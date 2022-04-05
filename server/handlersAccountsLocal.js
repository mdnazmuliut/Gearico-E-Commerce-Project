"use strict";

const {accounts} = require("./data/accounts")

const checkEmail = async (req, res) => {
  try {
    
    const email = req.body.email

    const user = accounts.find((user)=> user.email===email)
    
    console.log(user);
    
    (user) 
    ? res.status(200).json({ status: 200, message: "An email has been sent with instructions on how to reset your password." })
    : res.status(404).json({ status: 404, message: "Email not found" })
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error, please try again later" });
  }
};

const loginAccount = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = accounts.find((user)=> user.email===email)

    console.log(user);

    (user && user.password === password)
    ? res.status(200).json({ status: 200, message: "Request successful" })
    : res.status(404).json({ status: 404, message: "Email or password incorrect" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

const createAccount = async (req, res) => {
  try {
    const { email, password } = req.body
    
    // check to make sure email isn't already in use
    const user = await accounts.find((user)=> user.email===email )
    
    console.log(user);

    if (user) {
      res.status(400).json({ status: 400, message: "Email address already connected to an account"})
    } else {
      console.log("here?", user);
        await accounts.push({ email, password });
        res.status(200).json({ status: 200, message: "Please check your email to confirm your account. You will be redirected shortly"});
    }

  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }

};

module.exports = {
  checkEmail,
  loginAccount,
  createAccount,
};
