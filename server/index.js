"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

const {
  getItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  placeOrder,
  getCompanyById,
} = require("./handlers");

const {
  checkEmail,
  loginAccount,
  createAccount,
} = require("./handlersAccounts");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints
  .get("/api/get-items", getItems)
  .get("/api/get-item/:_id", getItemById)
  .get("/api/get-items/cat/:cat", getItemsByCategory)
  .get("/api/get-items/location/:location", getItemsByBodyLocation)
  .get("/api/get-company/:_id", getCompanyById)
  .post("/api/place-order", placeOrder)

  .post("/api/check-email", checkEmail)
  .post("/api/login-account", loginAccount)
  .post("/api/create-account", createAccount)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
