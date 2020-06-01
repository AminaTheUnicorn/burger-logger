const orm = require("../config/orm");

router.get("/", function(req, res) {
orm.selectAll(function(data){
    let hbsObject ={
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
}),

});



module.exports = router;