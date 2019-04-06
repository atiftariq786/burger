var express = require("express");
var router = express.Router();

// Import the model "burger.js" to use its database functions.
var burger = require("../models/burger.js");
 
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//===============================================
router.post("/api/burger", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});
//================================================

router.put("/api/burger/:id", function(req, res) {

  var condition = "id = "+ req.params.id;

  burger.updateOne({devoured:1},condition,function(result) {




    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }

    
  });
});
// Export routes for server.js to use.
module.exports = router;
