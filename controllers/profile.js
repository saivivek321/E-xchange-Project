exports.getProfileData = (req, res, next) =>{
  res.render('profile/profile', {path: '/profile/'})
}

exports.getProfileOrders = (req, res, next) =>{
  res.render('profile/orders', {path: '/profile/orders'})
}

exports.getProfileSales = (req, res, next) =>{
  res.render('profile/sales', { path: "/profile/orders"})
}