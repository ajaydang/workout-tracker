const router = require('express').Router();

//User Profile
const UserController = require("../controllers/user.controllers");
router.post("/user/add", UserController.createUser);
router.get("/user",UserController.getUser);


module.exports= router;