const router = require("express").Router();

router.get("/" , (req : any , res : any) => {
    res.send("Hello World");
});

module.exports = router;