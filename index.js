const express=require('express');

const app= express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


var category=["Cycle","Books"];
app.get("/", (req, res) => {
    res.render("buyer",{Categories:category});
})
app.listen(3000,function(){
    console.log("Server Started and listening on 3000");
})