const items = require("./data/items.json");
const companies = require("./data/companies.json")

const getItems = async (req, res) => {
  let start = req.query.start ? Number(req.query.start) : 0;
  let limit = req.query.limit ? Number(req.query.limit) : 10;
  try {
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
};

const getItemById = async (req, res) => {
  const id = req.params._id;
  try {
    const item = items.find(({ _id }) => _id == id);
    res
      .status(200)
      .json({ status: 200, data: item, message: "Request successful" });
  } catch (err) {
    res.status(500).json({ status: 500, data: id, message: "Server error" });
  }
};

const getItemsByCategory = async (req, res) => {
  const cat = req.params.cat.toLowerCase();
  
  let start = req.query.start ? Number(req.query.start) : 0;
  let limit = req.query.limit ? Number(req.query.limit) : 10;

  try {
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
};

const getItemsByBodyLocation = async (req, res) => {
  const location = req.params.location.toLowerCase();
  try {
    let itemList = [];
    items.forEach((item) => {
      if (item.body_location.toLowerCase() === location) itemList.push(item);
    });

    res
      .status(200)
      .json({ status: 200, data: itemList, message: "Request successful" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

const placeOrder = async (req, res) => {
  try {
    const reqInfo = req.body;

    console.log("BODY-----------------------", reqInfo);
    console.log("JUST ORDER INFO", req.body.order);

    res.status(200).json({ status: 200, message: "Endpoint unavailable - please change from handlersLocal to handlers" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

const getCompanyById = async (req, res) => {
  const id = Number(req.params._id);
  try {
    const company = companies.find(({ _id }) => _id === id);

    (company)
    ? res.status(200).json({ status: 200, data: company, message: "Request successful" })
    : res.status(404).json({ status: 404, data: id, message: "Company not found"})
  } catch (err) {
    res.status(500).json({ status: 500, data: id, message: "Server error" });
  }
};

module.exports = {
  getItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  placeOrder,
  getCompanyById,
};
