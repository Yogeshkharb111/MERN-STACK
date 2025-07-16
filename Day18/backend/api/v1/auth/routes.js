const express = require("express");
const { userRegistrationController } = require("../products/controllers");


const authRouter = express.Router();
authRouter.post("/signup", userRegistrationController);

module.exports = { authRouter };
