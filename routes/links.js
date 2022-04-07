const express = require("express");
const router = express.Router();
const cors = require("cors");

// import methods from controllers
const {linkdata, deletelinkdata, addlinkdata, updateClick} = require("../controllers/links")

//allow cors
router.use(cors({
    origin: true,
    methods : ["GET", "POST", "PUT", "PATCH", "DELETE"] , 
}))


router.get("/links", linkdata);
router.delete("/links/delete/:id", deletelinkdata);
router.post("/links/add", addlinkdata);
router.patch("/links/update/count/:id", updateClick);

module.exports = router;