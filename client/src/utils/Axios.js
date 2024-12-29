import axios from "axios";
import SummaryApi, { baseURL } from "../common/SummaryApi";

const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

//sending access token in the header
Axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accesstoken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//extend the life span of access woken with the help of refresh token
Axios.interceptors.request.use(
  (response) => {
    return response;
  },
  async (error) => {
    let originRequest = error.config;
    if (error.response.status === 401 && !originRequest.retry) {
      originRequest.retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newAccessToken=await refreshAccessToken(refreshToken)
    if(newAccessToken){
        originRequest.headers.Authorization=`${newAccessToken}`
        return Axios(originRequest)
    }  
    }
    }
    return Promise.reject(error)
  }
);

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await Axios({
      ...SummaryApi.refreshToken,
      header: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    const accessToken=response.data.data.accessToken
    localStorage.setItem('accesstoken',accessToken)
    return accessToken
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default Axios;
