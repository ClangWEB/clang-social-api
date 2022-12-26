const { validateEmail, validateLength, validateUsername } = require("../helpers/validation");
const User = require("../models/User");
const Post = require("../models/Post");
const Code = require("../models/Code");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail, sendResetCode } = require("../helpers/mailer");
const generateCode = require("../helpers/generateCode");


// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User doesn't exists" });
    const check = await bcrypt.compare(password, user.password);
    if (!check) return res.status(400).json({ message: "Password doesn't match. Try again!" });
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
    });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// REGISTER
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      bYear, bMonth, bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid Email Address!"
      });
    }
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: "This Email Address already exists, try with different Email Address!"
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "First Name must be between 3 and 30 characters!"
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "Last Name must be between 3 and 30 characters!"
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "Password must be atleast 6 characters!"
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    let tempUsername = (first_name + last_name).toLowerCase()
    let newUsername = await validateUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      email,
      username: newUsername,
      password: encryptedPassword,
      bYear, bMonth, bDay,
      gender,
    }).save();
    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );

    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Registration Successful! Please activate your account by completing the verification process sent to your Email address."
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ACTIVATE ACCOUNT
exports.activateAccount = async (req, res) => {
  try {
    const validUser = req.user.id;
    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET)
    const check = await User.findById(user.id)

    if (validUser !== user.id) return res.status(400).json({ message: "You don't have the authorization to complete this operation." });
    if (check.verified == true) return res.status(400).json({ message: "Email already activated" });
    else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res.status(200).json({ message: "Account activated successfully" });
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEND VERIFIVATION
exports.sendVerification = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);

    if (user.verified === true) return res.status(400).json({ message: "This account is already activated." });

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    return res.status(200).json({
      message: "Account Verification link has been sent to your email.."
    });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND USER
exports.findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");

    if (!user) return res.status(400).json({ message: "Account doesn't exists." });
    return res.status(200).json({
      email: user.email,
      picture: user.picture,
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEND RESET PASSWORD CODE
exports.sendResetPasswordCode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    await Code.findOneAndRemove({ user: user._id });
    const code = generateCode(5);
    const savedCode = await new Code({
      code,
      user: user._id,
    }).save();
    sendResetCode(user.email, user.first_name, code);
    return res.status(200).json({
      message: "Email reset code has been sent to your email",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// VALIDATE RESET CODE
exports.validateResetCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    const DBcode = await Code.findOne({ user: user._id });

    if (DBcode.code !== code) {
      return res.status(400).json({
        message: "Verification code doesn't match with the entered code."
      });
    }
    return res.status(200).json({ message: "Code is OK!" });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHANGE PASSWORD
exports.changePassword = async (req, res) => {
  const { email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 12);
  await User.findOneAndUpdate({ email }, {
    password: encryptedPassword,
  });

  return res.status(200).json({ message: "Password is changed!" });
}

// PROFILE
exports.getProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const profile = await User.findOne({ username }).select("-password");
    if (!profile) return res.json({ ok: false });
    const posts = await Post.find({ user: profile._id }).populate("user");
    return res.status(200).json({ ...profile.toObject(), posts });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}