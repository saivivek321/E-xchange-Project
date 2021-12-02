// const Product = require("../models/product")
const AllItems = require("../models/getData")

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products =>{
//     res.render("shop/productList", {
//       data: products, 
//       title: "All Products", 
//       path: '/products'
//     })
//   })
// }

exports.getItemsData = (req, res, next) =>{
  AllItems.fetchAll(products =>{
    res.render('/purchase', {
      path: '/purchase',
      Categories: products
    })
  })
}