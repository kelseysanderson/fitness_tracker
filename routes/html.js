const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

module.exports = router;

  