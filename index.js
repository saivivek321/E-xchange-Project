const express=require('express');
const bodyParser = require('body-parser')
const _ = require('lodash')

const userProfileRoute = require('./routes/userProfile')
// const aboutUsRoute = require('./routes/aboutUs')

const categorys=[
    {"title":"Cycle","img_add":"imgs/1.jpg", "category":"Cycle","url":"/category/cycle"},
    {"title":"Books","img_add":"imgs/2.jpg", "category":"Books","url":"/category/books"},
    {"title":"Calculator","img_add":"imgs/5.jpg", "category":"Calculator","url":"/category/calculator"},
    {"title":"Stationary","img_add":"imgs/6.jpg", "category":"Stationary","url":"/category/stationary"},
    {"title":"Drafter","img_add":"imgs/3.jpg", "category":"Drafter","url":"/category/drafter"},
    {"title":"Chart-Holder","img_add":"imgs/4.jpg", "category":"Chart-Holder","url":"/category/chart_holder"}
];

const categoryItems = [
    {category: 'cycle', price: 500, condition: 'usable',img_add:"/imgs/cycles/1.jpg",owner: 'Vijay',
     description: 'Working well but front break need to be tightned'},
    {category: 'cycle', price: 600, condition: 'usable',img_add:"/imgs/cycles/4.jpg",owner: 'Vamsi',
    description: 'Working well but front break need to be tightned'}, 
    {category: 'cycle', price: 400, condition: 'super',img_add:"/imgs/cycles/5.jpg",owner: 'Jaithra',
     description: 'Working well but front break need to be tightned'},
    {category: 'cycle', price: 400, condition: 'super',img_add:"/imgs/cycles/2.jpg",owner: 'Jaithra',
    description: 'Working well but front break need to be tightned'},

    {category: 'books', price: 1200,condition: 'usable',img_add:"/imgs/books/5.jpg",owner: 'Sai Vivek',
    description: 'some pages missing'},
    {category: 'books', price: 650,condition: 'usable',img_add:"/imgs/books/1.jpg",owner: 'Jaithra',
     description: 'some pages missing'},
     {category: 'books', price: 300,condition: 'usable',img_add:"/imgs/books/2.jpg",owner: 'Vijay',
     description: 'some pages missing'},
     {category: 'books', price: 250,condition: 'usable',img_add:"/imgs/books/3.jpg",owner: 'Vivek',
     description: 'some pages missing'},
     {category: 'books', price: 700,condition: 'usable',img_add:"/imgs/books/4.jpg",owner: 'Vamsi',
     description: 'some pages missing'},


    {category: 'Stationary',price: 120,img_add:"/imgs/stationary/1.jpg",condition: 'Not so good',owner: 'Vamsi',
    description: 'Some leafs are torn'}, 
    {category: 'Stationary',price: 50,img_add:"/imgs/stationary/2.jpg",condition: 'Good',owner: 'Vijay',
    description: 'Some brushes are lost in set'}, 
    {category: 'Stationary',price: 70,img_add:"/imgs/stationary/3.jpg",condition: 'Not so good',owner: 'Jaithra',
    description: 'Some colors are dried'}, 
    {category: 'Stationary',price: 200,img_add:"/imgs/stationary/4.jpg",condition: 'Excellent',owner: 'Vivek',
    description: 'Parker pen'},

    {category: 'Calculator', price: 450,img_add:"/imgs/calculator/1.jpg",condition: 'Good',owner: 'Sai Vivek',
    description: 'Working well'},
    {category: 'Calculator', price: 700,img_add:"/imgs/calculator/2.jpg",condition: 'Ok',owner: 'Vamsi',
    description: 'Working well'},
    {category: 'Calculator', price: 1000,img_add:"/imgs/calculator/3.jpg",condition: 'Excellent',owner: 'Jaithra',
    description: 'Working very well'},
    
    {category: 'drafter', price: 45,img_add:"/imgs/drafter/1.jpg",condition: 'Good',owner: 'Sai Vivek',
    description: 'Working well'},
    {category: 'drafter', price: 70,img_add:"/imgs/drafter/2.jpg",condition: 'Ok',owner: 'Vamsi',
    description: 'Working well'},
    {category: 'drafter', price: 100,img_add:"/imgs/drafter/3.jpg",condition: 'Excellent',owner: 'Vijay',
    description: 'Working very well'},

    {category: 'Chart-Holder', price: 120,img_add:"/imgs/ChartHolder/1.jpg",condition: 'No Damage',owner: 'Vijay',
    description: 'Works very well'},
    {category: 'Chart-Holder', price: 120,img_add:"/imgs/ChartHolder/2.jpg",condition: 'Pretty good',owner: 'Jaithra',
    description: 'Holds more than 10 charts'},
    {category: 'Chart-Holder', price: 120,img_add:"/imgs/ChartHolder/3.jpg",condition: 'No Damage',owner: 'Vamsi',
    description: 'Nice Look'}
]

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res, next) => {
    res.render('aboutUs/aboutUs', {path: '/about'})
})

app.get("/about", (req, res, next) =>{
    res.render('aboutUs/aboutUs', {path: '/about'})
})

app.get("/purchase", (req, res, next) =>{
    res.render("purchase",{Categories:categorys, path: "/purchase"});
})

app.get('/sell', (req, res, next)=>{
    res.render('sellItem', { path: "/sell"})
})

app.post("/sell", (req, res, next)=>{
    const {category, owner, price, condition, description} = req.body
    categoryItems.push(req.body)
    res.redirect(`/category/${category}`)
})
app.get('/profile', userProfileRoute)


// app.get('/profile', (req, res, next)=>{
//     res.render('profile', { path: "/profile"})
// })

// app.get('/profile/profile', (req, res, next)=>{
//     res.render('profile/profile', { path: "/profile/profile"})
// })
// app.get('/profile/sales', (req, res, next)=>{
//     res.render('profile/sales', { path: "/profile/sales"})
// })
// app.get('/profile/orders', (req, res, next)=>{
//     res.render('profile/orders', { path: "/profile/orders"})
// })



app.get('/category/:categoryName', (req, res, next)=>{
    const categoryName = _.lowerCase(req.params.categoryName)
    const filteredItems = categoryItems.filter(item => categoryName === _.lowerCase(item.category))
    res.render('categoryItem', {
        path: `/category/${categoryName}`, 
        categoryItems: filteredItems
    })
})

app.get('/cart', (req, res, next) =>{
    res.render('cart', { path: "/cart"})
})

app.listen(3000,() =>{ console.log("Server Started and listening on 3000") })