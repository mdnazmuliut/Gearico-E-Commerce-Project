"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
// const items = require("./data/items.json");

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

const getItems = async (req, res) => {
  let start = req.query.start ? Number(req.query.start) : 0;
  let limit = req.query.limit ? Number(req.query.limit) : 10;
  try {
    await client.connect();

    const items = await db.collection("items").find().toArray();

    let end = start + limit;
    let reqResult = items.slice(start, end);

    if (start + limit > items.length) {
      limit = Number(items.length) - start;
    }

    switch (true) {
      case items.length <= 0:
        res.json({ status: 400, message: "not found" });
        break;
      default:
        res.status(200).json({
          status: 200,
          start: start,
          limit: limit,
          data: reqResult,
          message: "Request successful",
        });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

const getItemById = async (req, res) => {
  const id = req.params._id;
  try {
    await client.connect();
    const items = await db.collection("items").find().toArray();

    const item = items.find(({ _id }) => _id == id);
    res
      .status(200)
      .json({ status: 200, data: item, message: "Request successful" });
  } catch (err) {
    res.status(500).json({ status: 500, data: id, message: "Server error" });
  }
  client.close();
};

const getItemsByCategory = async (req, res) => {
  const cat = req.params.cat.toLowerCase();

  let start = req.query.start ? Number(req.query.start) : 0;
  let limit = req.query.limit ? Number(req.query.limit) : 10;

  try {
    await client.connect();

    const items = await db.collection("items").find().toArray();

    let itemList = [];
    items.forEach((item) => {
      if (item.category.toLowerCase() === cat) itemList.push(item);
    });

    let end = start + limit;
    let reqResult = itemList.slice(start, end);

    if (start + limit > itemList.length) {
      limit = Number(itemList.length) - start;
    }

    switch (true) {
      case itemList.length <= 0:
        res.json({ status: 400, message: "not found" });
        break;
      default:
        res.status(200).json({
          status: 200,
          start: start,
          limit: limit,
          data: reqResult,
          message: "Request successful",
        });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

const getItemsByBodyLocation = async (req, res) => {
  const location = req.params.location.toLowerCase();
  let start = req.query.start ? Number(req.query.start) : 0;
  let limit = req.query.limit ? Number(req.query.limit) : 10;
  try {
    await client.connect();
    const items = await db.collection("items").find().toArray();

    let itemList = [];
    items.forEach((item) => {
      if (item.body_location.toLowerCase() === location) itemList.push(item);
    });

    let end = start + limit;
    let reqResult = itemList.slice(start, end);

    if (start + limit > itemList.length) {
      limit = Number(itemList.length) - start;
    }

    switch (true) {
      case itemList.length <= 0:
        res.json({ status: 400, message: "not found" });
        break;
      default:
        res.status(200).json({
          status: 200,
          start: start,
          limit: limit,
          data: reqResult,
          message: "Request successful",
        });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

const placeOrder = async (req, res) => {
  try {
    await client.connect();
    const reqInfo = req.body;

    const { firstName, lastName, email, address } = reqInfo;

    const newValues = {
      _id: uuidv4(),
      customerInfo: {
        firstName: reqInfo.customerInfo.firstName,
        lastName: reqInfo.customerInfo.lastName,
        email: reqInfo.customerInfo.email,
        address: reqInfo.customerInfo.address,
      },
      orderInfo: reqInfo.orderInfo,
      creditInfo: reqInfo.creditInfo,
    };

    //=====Post order inside "orders" collection=====
    const data = await db.collection("orders").insertOne(newValues);

    const items = await db.collection("items").find().toArray();
    const orders = await db.collection("orders").find().toArray();

    let orderInfoList = reqInfo.orderInfo.map((el) => el);

    let orderId = reqInfo.orderInfo.map((el) => el._id);

    let itemList = [];
    items.forEach((item) => {
      if (orderId.includes(item._id)) itemList.push(item);
    });

    const promises = [];

    await reqInfo.orderInfo.forEach((el) => {
      promises.push(
        db
          .collection("items")
          .updateOne({ _id: el._id }, { $inc: { numInStock: -el.qnt } })
      );
    });

    await Promise.all(promises).then((results) => {
      res.status(200).json({
        status: 200,
        data: results,
        itemList,
        message: "Request successful",
      });
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }

  client.close();
};

module.exports = {
  getItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  placeOrder,
};
