"use strict";

const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
// console.log("MONGO:", MONGO_URI);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

//=====Declare 'db'=====
const db = client.db("ecommerce");

const checkEmail = async (req, res) => {
    try {
    await client.connect();
    const email = req.body.email

    const user = await db.collection("accounts").findOne({ "email": email }).toArray()
    
    console.log(user.length);
    
    (user.length > 0) 
    ? res.status(200).json({ status: 200, data: user.email, message: "An email has been sent with instructions on how to reset your password." })
    : res.status(404).json({ status: 404, message: "Email not found" })
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};


const loginAccount = async (req, res) => {
  try {
    await client.connect();

    const { email, password } = req.body

    const user = await db.collection("accounts").find({ "email": email }).toArray();
    
    console.log(user);

    (user.length > 0 && user[0].password === password)
    ? res.status(200).json({ status: 200, data: email, message: "Request successful" })
    : res.status(404).json({ status: 404, message: "Email or password incorrect" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};

const createAccount = async (req, res) => {
  try {
    await client.connect();
    const {email, password} = req.body

    // check to make sure email isn't already in use
    const user = await db.collection("accounts").findOne({ "email": email }).toArray()
    
    console.log(user);
    
    if (user.length > 0) {
        res.status(400).json({ status: 400, data: email, message: "Email address already connected to an account"})
    } else {
        await db.collection("accounts").insertOne({ email, password})
        res.status(200).json({ status: 200, data: email, message: "Please check your email to confirm your account. You will be re-directed shortly."});
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};

const getOrdersByEmail = async (req, res) => {
  try {
    await client.connect();
    const {email} = req.body;

    const orders = await db.collection("orders").find({ "shipping.email" : email}).toArray();

    console.log(orders);

    (orders)
    ? res.status(200).json({ status: 200, data: orders, message: "Request successful" })
    : res.status(400).json({ status: 404, data: email, message: "Bad request" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}
 
module.exports = {
  checkEmail,
  loginAccount,
  createAccount,
  getOrdersByEmail,
};
