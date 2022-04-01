const items = require("./data/items.json");

const getItems = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: 200, data: items, message: "Request successful" });
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
  try {
    let itemList = [];
    items.forEach((item) => {
      if (item.category.toLowerCase() === cat) itemList.push(item);
    });

    res
      .status(200)
      .json({ status: 200, data: itemList, message: "Request successful" });
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
    res.status(400).json({ status: 400, message: "Endpoint unavailable" });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
  }
};

module.exports = {
  getItems,
  getItemById,
  getItemsByCategory,
  getItemsByBodyLocation,
  placeOrder,
};
