exports.getItemData = (req, res, next) =>{
  res.render('sellItem', {path: '/sell'})
}

exports.postItemData = (req, res, next)=>{
  // const {category, owner, price, condition, description} = req.body
  categoryItems.push(req.body)
  res.redirect(`/category/${category}`)
}