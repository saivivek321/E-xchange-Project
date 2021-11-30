const express=require('express');
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

const categorys=[
    {"title":"Cycle","img_add":"imgs/1.jpg", "category":"Cycle","url":"/category/cycle"},
    {"title":"Books","img_add":"imgs/2.jpg", "category":"Books","url":"/category/books"},
    {"title":"Calculator","img_add":"imgs/5.jpg", "category":"Calculator","url":"/category/calculator"},
    {"title":"Stationary","img_add":"imgs/6.jpg", "category":"Stationary","url":"/category/stationary"},
    {"title":"Drafter","img_add":"imgs/3.jpg", "category":"Drafter","url":"/category/drafter"},
    {"title":"Chart-Holder","img_add":"imgs/4.jpg", "category":"Chart-Holder","url":"/category/chart_holder"}
];

const categoryItems = [
    {
        category: 'cycle', 
        price: 500, 
        condition: 'usable',
        img_add:"/imgs/cycles/1.jpg",
        owner: 'Vijay',
        description: 'Working well but front break need to be tightned'
    },
    {
        category: 'books', 
        price: 500,
        condition: 'usable',
        img_add:"/imgs/2.jpg",
        owner: 'Vivek',
        description: 'some pages missing'
    },
    {
        category: 'Drafter', 
        price: 50,
        img_add:"/imgs/3.jpg",
        condition: 'not so good',
        owner: 'Jaithra',
        description: 'Working well but need to be tightned'
    },
    {
        category: 'cycle', 
        price: 600, 
        condition: 'usable',
        img_add:"/imgs/cycles/2.jpg",
        owner: 'Vamsi',
        description: 'Working well but front break need to be tightned'
    },
    {
        category: 'Stationary',
        price: 5,
        img_add:"/imgs/6.jpg",
        condition: 'Not so good',
        owner: 'Vamsi',
        description: 'Working well but front break need to be tightned'
    },  
    {
        category: 'cycle', 
        price: 400, 
        condition: 'super',
        img_add:"/imgs/cycles/3.jpg",
        owner: 'Jaithra',
        description: 'Working well but front break need to be tightned'
    },
    {
        category: 'cycle', 
        price: 400, 
        condition: 'super',
        img_add:"/imgs/cycles/3.jpg",
        owner: 'Jaithra',
        description: 'Working well but front break need to be tightned'
    }
]

app.get("/", (req, res, next) => {
    res.render("profile", {path: "/profile"});
})

app.get("/purchase", (req, res, next) =>{
    res.render("purchase",{Categories:categorys, path: "/purchase"});
})

app.get('/sell', (req, res, next)=>{
    res.render('sellItem', { path: "/sell"})
})

app.post("/sell", (req, res, next)=>{
    const {category, owner, price, condition, branch_year, description} = req.body
    // console.log(category, owner, price, condition, branch_year, description);
    categoryItems.push(req.body)
    console.log(categoryItems);
    // console.log(req.body);
    res.redirect(`/category/${category}`)
    // need to redirect to sold items page at last  -----> final goal
    // right now the data is added to the var and redirected to purchase page  ---> current working method to continue other work
})

app.get('/profile', (req, res, next)=>{
    res.render('profile', { path: "/profile"})
})

app.get('/profile_profile', (req, res, next)=>{
    res.render('profile/profile', { path: "/profile/profile"})
})
app.get('/profile_sales', (req, res, next)=>{
    res.render('profile/sales', { path: "/profile/sales"})
})
app.get('/profile_orders', (req, res, next)=>{
    res.render('profile/orders', { path: "/profile/orders"})
})




app.get('/category/:categoryName', (req, res, next)=>{
    const categoryName = _.lowerCase(req.params.categoryName)
    const filteredItems = categoryItems.filter(item => categoryName === _.lowerCase(item.category))
    res.render('categoryItem', {
        path: `/category/${categoryName}`, 
        categoryItems: filteredItems
    })
})

app.get('/cart', (req, res, next) =>{
    console.log("This is your cart");
})


app.listen(3001,function(){
    console.log("Server Started and listening on 3001");

})