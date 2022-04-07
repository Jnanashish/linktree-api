const express = require("express");
const router = express.Router();

const {daimgdata, deletedaimg, adddaimg, updateClick} = require("../controllers/daimg")

router.get("/daimg", daimgdata);
router.delete("/daimg/delete/:id", deletedaimg);
router.post("/daimg/add", adddaimg);
router.patch("/daimg/update/count/:id", updateClick);

module.exports = router;