exports.getProfileData = (req, res, next) =>{
  console.log("this is /profile/ route");
  res.render('profile/profile', {path: '/profile/'})
}

exports.getProfileOrders = (req, res, next) =>{
  console.log("this is /profile/orders route");
  res.render('profile/orders', {path: '/profile/orders'})
}

exports.getProfileSales = (req, res, next) =>{
  console.log("this is /profile/sales route");
  res.render('profile/sales', { path: "/profile/orders"})
}