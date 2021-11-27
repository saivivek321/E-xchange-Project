const express=require('express');
const bodyParser = require('body-parser')
const _ = require('lodash')

const app= express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

const categorys=[
    {"title":"Cycle","img_add":"imgs/1.jpg"},
    {"title":"Books","img_add":"imgs/2.jpg"},
    {"title":"Calculator","img_add":"imgs/5.jpg"},
    {"title":"Stationary","img_add":"imgs/6.jpg"},
    {"title":"Drafter","img_add":"imgs/3.jpg"},
    {"title":"Chart-Holder","img_add":"imgs/4.jpg"}
];

const categoryItems = [
    {
        category: 'cycle', 
        price: 500, 
        condition: 'usable',
        owner: 'Viz',
        description: 'Working well but front break need to be tightned'
    },
    {
        category: 'books', 
        price: 500,
        condition: 'usable',
        owner: 'Vivek',
        description: 'some pages missing'
    },
    {
        category: 'Drafter', 
        price: 50, 
        condition: 'not so good',
        owner: 'Jaithra',
        description: 'Working well but need to be tightned'
    },
    {
        category: 'cycle', 
        price: 500, 
        condition: 'usable',
        owner: 'Viz',
        description: 'Working well but front break need to be tightned'
    },
    {
        category: 'Stationary', 
        price: 5, 
        condition: 'Not so good',
        owner: 'Vamsi',
        description: 'Working well but front break need to be tightned'
    },
]

app.get("/", (req, res) => {
    res.render("profile", {path: "/profile"});
})

app.get("/purchase", (req, res, next) =>{
    res.render("purchaseItem",{Categories:categorys, path: "/purchase"});
})

app.get('/sell', (req, res, next)=>{
    res.render('sellItem', { path: "/sell"})
})

app.post("/sell", (req, res, next)=>{
    const {category, owner, price, item_condition, branch_year, description} = req.body
    console.log(category, owner, price, item_condition, branch_year, description);
    // console.log(req.body);
    res.redirect("/purchase")
})

app.get('/profile', (req, res, next)=>{
    res.render('profile', { path: "/profile"})
})

app.get('/category/:categoryName', (req, res, next)=>{
    const categoryName = _.lowerCase(req.params.categoryName)
    const filteredItems = categoryItems.filter(item => categoryName === _.lowerCase(item.category))
    res.render('categoryItem', {
        path: `/category/${categoryName}`, 
        categoryItems: filteredItems
    })
})

app.listen(3000,function(){
    console.log("Server Started and listening on 3000");
})