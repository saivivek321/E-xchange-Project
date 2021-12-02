const allItems = require('../models/getData')

exports.getItemData = (req, res, next) =>{
  res.render('sellItem', {path: '/sell'})
}

exports.postItemData = (req, res, next)=>{
  const item = req.body
  console.log(item);
  const newItem = new allItems(item)
  // const {category, owner, price, condition, description} = req.body
  newItem.save()
  // categoryItems.push(req.body)
  res.redirect(`/category/${req.body.category}`)
}