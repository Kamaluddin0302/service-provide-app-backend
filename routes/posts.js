const express = require("express");
const router = express.Router();
const verify = require("../middelwares/verifyToken");
const Category = require("./../modal/Category");
const products = require("./../modal/addproduct");
const Orders = require("./../modal/addorder");

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

router.post("/addProduct", async (req, res) => {
  console.log(req.body);
  let {
    Product_Name,
    Product_ShotDetail,
    Product_Price,
    Product_Catagery,
    Product_Full_Detail,
    image,
  } = req.body;
  // create new Product
  const product = new products({
    Product_Name,
    Product_ShotDetail,
    Product_Price,
    Product_Catagery,
    Product_Full_Detail,
    image,
  });
  try {
    const savedproduct = await product.save();
    res.send({ result: "success", message: savedproduct });
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
