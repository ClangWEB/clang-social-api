const express = require("express");
const { 
    login,
    register,
    activateAccount,
    sendVerification,
    findUser,
    sendResetPasswordCode,
    validateResetCode,
    changePassword,
    getProfile,
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", getProfile);

module.exports = router;