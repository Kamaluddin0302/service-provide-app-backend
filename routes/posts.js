const express = require("express");
const router = express.Router();
const verify = require("../middelwares/verifyToken");
const Category = require("./../modal/Category");
const services = require("../modal/addService");
const Orders = require("./../modal/addorder");
const booktechnician = require("./../modal/booktechnician");

router.post("/", (req, res) => {
  try {
    res.send({
      posts: {
        title: "my first pet",
        description: "random data you shoud not access",
      },
    });
  } catch (error) {
    res.send({
      message: "dkmmkm",
    });
  }
});

router.get("/", (req, res) => {
  try {
    res.send({
      posts: {
        title: "my first pet",
        description: "random data you shoud not access",
      },
    });
  } catch (error) {
    res.send({
      message: "dkmmkm",
    });
  }
});

router.post("/addservice", async (req, res) => {
  console.log(req.body);
  let { serviceName, serviceDetail, serviceImage } = req.body;
  // create new Product
  const service = new services({
    serviceName,
    serviceDetail,
    serviceImage,
  });
  try {
    const savedservice = await service.save();
    res.send({ result: "success", message: savedservice });
  } catch (err) {
    res.status(400).send({ result: "error", message: err });
  }
});

router.post("/booktechnician", async (req, res) => {
  console.log(req.body);
  let {
    detail,
    address,
    image,
    uid,
    userName,
    serviceName,
    serviceImage,
    price,
    cash_on_delavery,
  } = req.body;
  // create new Product
  const technician = new booktechnician({
    detail,
    address,
    image,
    uid,
    userName,
    serviceName,
    serviceImage,
    status: "pending",
    price,
    cash_on_delavery,
  });
  try {
    const savedTechnician = await technician.save();
    res.send({ result: "success", message: savedTechnician });
  } catch (err) {
    res.status(400).send({ result: "error", message: err });
  }
});

router.post("/addCategory", async (req, res) => {
  console.log(req.body);

  const CategoryExist = await Category.findOne({
    category: req.body.category,
  });
  if (CategoryExist)
    return res.status(400).send({
      result: "error",
      message: "Category already exist",
    });

  // create new Category
  const category = new Category({
    category: req.body.category,
  });
  try {
    const savedCategory = await category.save();
    res.send({ result: "success", message: savedCategory });
  } catch (err) {
    res.status(400).send({ result: "error", message: err });
  }
});

router.post("/addOrder", async (req, res) => {
  console.log(req.body);
  let { OrderProduct, address, month, date, year, status, uid } = req.body;
  // create new Product
  const orders = new Orders({
    OrderProduct,
    address,
    month,
    date,
    year,
    status,
    uid,
  });
  try {
    const savedOrder = await orders.save();
    res.send({ result: "success", message: savedOrder });
  } catch (err) {
    res.status(400).send({ result: "error", message: err });
  }
});

module.exports = router;
