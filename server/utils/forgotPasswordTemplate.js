const forgotPasswordTemplate = ({ name, otp }) => {
  return `
    <div>
    <p>Dear,${name}</p>
    <p>You're requested a password reset. Please use following OTP code to reset your password.</p>
    <div>
        ${otp}
    </div>
    <p>This otp is valid for 1hour only. Enter this otp in the binkeyit website to proceed with resetting your password.</p>
    <br/>
    </br>
    <p>Thanks</p>
    <p>Binkeyit</p>
    </div>
    `;
};

export default forgotPasswordTemplate;
