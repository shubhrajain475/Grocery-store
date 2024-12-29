import jwt from "jsonwebtoken";
const auth = (request, response, next) => {
  try {
    const token =
      request.cookies?.accessToken ||
      (request.headers?.authorization
        ? request.headers.authorization.split(" ")[1]
        : null);

    if (!token) {
      return response.status(401).json({
        message: "Unauthorized: No token provided",
        error: true,
        success: false,
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
    if (!decode) {
      return response.status(401).json({
        message: "unauthorized access",
        error: true,
        success: false,
      });
    }
    request.userId = decode.id;
    next();
    // console.log('decode',decode);
    //console.log("Token: ", token); // Log the token to see what is being sent

    // Validate the token (for example, using JWT)
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export default auth;
