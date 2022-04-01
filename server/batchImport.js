const { MongoClient } = require("mongodb");

const items = require("./data/items.json");
const companies = require("./data/companies.json");
const orders = require("./data/orders.json");

require("dotenv").config();
const { MONGO_URI } = process.env;
// console.log("MONGO:", MONGO_URI);
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

// TODO: declare 'db'
const db = client.db("ecommerce");

const batchImport = async () => {
  try {
    //create new client
    await client.connect();

    console.log("connected!");

    // and creating a new collection 'items' and "companies"
    await db.collection("items").insertMany(items);
    // await db.collection("companies").insertMany(companies);
    // await db.collection("orders").insertMany(orders);

    console.log("success");
  } catch (err) {
    console.log("error>", err.stack);
  }
  client.close();
};

batchImport();
