// echo routes
const express = require('express');
const router = express.Router();



// route that return a list of echos
router.get('/echos', async (req, res) => {
        res.send("do some action here");
    }
);

module.exports = router;