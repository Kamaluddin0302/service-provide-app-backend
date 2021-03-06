const express = require("express");
const router = express.Router();
const verify = require("../middelwares/verifyToken");
const Category = require("./../modal/Category");
const service = require("../modal/addService");
const Orders = require("./../modal/addorder");
const OrdersTechnician = require("./../modal/booktechnician");

router.get("/getServices", async (req, res) => {
  try {
    const getproduct = await service.find();

    res.send({
      posts: getproduct,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.get("/getcategory", async (req, res) => {
  try {
    const getcategory = await Category.find();

    res.send({
      posts: getcategory,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.get("/getorder", async (req, res) => {
  console.log(req.query);
  try {
    const getorder = await Orders.find(req.query);
    res.send({
      posts: getorder,
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.get("/getCurrentUserOrder", async (req, res) => {
  console.log(req.query);
  try {
    const getorder = await OrdersTechnician.find(req.query);
    res.send({
      posts: getorder,
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.put("/updateorder/:id", async (req, res) => {
  console.log(req.query);
  try {
    const getorder = await OrdersTechnician.findOneAndUpdate(
      { _id: req.params.id },
      req.query
    );

    res.send({
      posts: getorder,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.put("/updateproduct/:id", async (req, res) => {
  console.log(req.body);
  try {
    const getproduct = await products.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.send({
      posts: getproduct,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.delete("/deleteService/:id", async (req, res) => {
  console.log(req.body);
  try {
    const getservice = await service.findOneAndDelete({ _id: req.params.id });

    res.send({
      posts: getservice,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

router.delete("/deleteCategory/:id", async (req, res) => {
  console.log(req.body);
  try {
    const getproduct = await Category.findOneAndDelete({ _id: req.params.id });

    res.send({
      posts: getproduct,
      result: "success",
    });
  } catch (error) {
    res.send({
      message: error.message,
      result: "error",
    });
  }
});

module.exports = router;
