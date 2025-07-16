const { UserModel } = require("../../../models/userSchema");
const { handleGenericAPIError } = require("../../../utils/controllerHelpers");

const sendUserBasicInfoController = (req, res) => {
  const userInfo = req.user;

  res.status(200).json({
    isSuccess: true,
    message: "User is valid!",
    data: {
      user: userInfo,
    },
  });
};

const sendUserDetailsController = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await UserModel.findById(_id).select("-password");
    res.status(200).json({
      isSuccess: true,
      message: "User details found!",
      data: {
        user: user,
      },
    });
  } catch (err) {
    handleGenericAPIError("sendUserDetailsController", req, res, err);
  }
};

module.exports = { sendUserBasicInfoController, sendUserDetailsController };
