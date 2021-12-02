const fs = require('fs')
const path = require('path')

// const filePath = path.join(path.dirname(require.main.filename), "data", 'data.json')
// const categories = path.join(path.dirname(require.main.filename), "data", 'categories.json')
const categoryItems = path.join(path.dirname(require.main.filename), "data", 'categoryItems.json')

const getDataFromFile = callBack =>{
  fs.readFile(categoryItems, (err, content)=>{
    if(err) callBack([])
    else callBack(JSON.parse(content))
  })
}

module.exports = class Product{
  constructor(item){
    this.item = item
  }
  save(){
    getDataFromFile(products =>{
      products.push(this)
      fs.writeFile(categoryItems, JSON.stringify(products), (err)=>{
        console.log(err);
      })
    })
  }

  //the below fetchAll method contains async readFile function which just contains the callback function when the contents in file are read
  // since that is async, before the call back execution the fetchAll method return undefined as there are no return statements in outer loop
  // solution 1
  // add a callback to the fetchAll method as a parameter function 

  static fetchAll(callBack){
    getDataFromFile(callBack)
  }
}