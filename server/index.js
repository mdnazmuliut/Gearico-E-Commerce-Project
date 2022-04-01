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
} = require("./handlersLocal");

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
  .post("/api/place-order", placeOrder)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
