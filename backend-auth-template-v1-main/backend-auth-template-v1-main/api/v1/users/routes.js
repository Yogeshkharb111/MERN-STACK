const express = require("express");
const {
  sendUserBasicInfoController,
  sendUserDetailsController,
} = require("./controllers");

const usersRouter = express.Router();

usersRouter.get("/", sendUserBasicInfoController);

// /api/v1/users/details
usersRouter.get("/details", sendUserDetailsController);

module.exports = { usersRouter };
