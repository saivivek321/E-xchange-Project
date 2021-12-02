const fs = require('fs')
const path = require('path')

// const filePath = path.join(path.dirname(require.main.filename), "data", 'data.json')
const categories = path.join(path.dirname(require.main.filename), "data", 'categories.json')
const categoryItems = path.join(path.dirname(require.main.filename), "data", 'categoryItems.json')

const getDataFromFile = (callBack, fileName) =>{
  fs.readFile(fileName, (err, content)=>{
    if(err) callBack([])
    else callBack(JSON.parse(content))
  })
}

module.exports = class Product{
  constructor(item){
    this.item = item
  }
  save(){
    getDataFromFile((products, categoryItems) =>{
      products.push(this.item)
      fs.writeFile(categoryItems, JSON.stringify(products), (err)=>{
        console.log(err);
      })
    })
  }
  static fetchAll(callBack){
    getDataFromFile(callBack, categoryItems)
  }
}

module.exports = class Categories{
  constructor(item){this.item = item}
  save(){
    getAllCategories((category, categories) =>{
      category.push(this.item)
      fs.write(categories, JSON.stringify(category), (err) =>{
        console.log(err);
      })
    })
  }
  static fetchAllCategories(callBack){
    getAllCategories(callBack, categories)
  }
}