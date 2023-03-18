const express = require("express");
const { getCashOffer } = require("../Controller/getCashOffer");
//Router Object
const router = express.Router();

//Login
router.post("/get-a-cash-offer", getCashOffer);


module.exports = router;