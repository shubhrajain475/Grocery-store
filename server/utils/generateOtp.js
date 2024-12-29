const generatedOtp=()=>{
    return Math.floor(Math.random()*900000)+100000//100000to 999999
}
export default generatedOtp