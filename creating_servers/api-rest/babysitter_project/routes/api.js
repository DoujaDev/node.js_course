const express = require("express");
const Babysitter = require("../models/babysitter");
const router = express.Router();

//get a list of babysitter from database
router.get("/babysitters", (req, res) => {
    res.send({ type: "GET" });
});

//add a new babysitter to the database
router.post("/babysitters", (req, res) => {
    /*var babysitter = new Babysitter(req.body);
    babysitter.save();*/
    // we can do this using the method create
    Babysitter.create(req.body).then((babysitter) => {
        res.send(babysitter);
    });
});

//update a babysitter in tha database
router.put("/babysitters/:id", (req, res) => {
    res.send({ type: "PUT" });
});

//delete a babysitter from the database
router.delete("/babysitters/:id", (req, res) => {
    res.send({ type: "DELETE" });
});

module.exports = router;