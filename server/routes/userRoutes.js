const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;


// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login
