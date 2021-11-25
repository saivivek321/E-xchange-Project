const express=require('express');

const app= express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

var categorys=[
    {"title":"Cycle","img_add":"imgs/1.jpg"},
    {"title":"Books","img_add":"imgs/2.jpg"},
    {"title":"Calculator","img_add":"imgs/5.jpg"},
    {"title":"Stationary","img_add":"imgs/6.jpg"},
    {"title":"Drafter","img_add":"imgs/3.jpg"},
    {"title":"Chart-Holder","img_add":"imgs/4.jpg"}
];


app.get("/", (req, res) => {
<<<<<<< HEAD
   // res.render("buyer",{Categories:categorys});
   // res.render("seller");
   res.render("profile");
=======
    res.render("profile", {path: "/profile"});
>>>>>>> 7cf968ee9af42c714b90112e13a2712adcee6e5c
})

app.get("/buyer", (req, res, next) =>{
    res.render("buyer",{Categories:categorys, path: "/buyer"});
})

app.get('/seller', (req, res, next)=>{
    res.render('seller', { path: "/seller"})
})

app.listen(3000,function(){
    console.log("Server Started and listening on 3000");
})