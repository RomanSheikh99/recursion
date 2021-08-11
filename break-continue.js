// this function tell us about price

let AllProducts = [
    {name: "samsung phone", price: 11000},
    {name: "asus laptop", price: 33400},
    {name: "walton phone", price: 6400},
    {name: "apple watch", price: 10000},
    {name: "hp laptop", price: 64000},
    {name: "sport shoe", price: 1000},
    {name: "itel phone", price: 6500}
]

function findBudgetProduct(productList,budget){
    let budgetProduct = [];
    for(let product of productList){
    if(product.price > budget){
        continue;
    }
    else{
        budgetProduct.push(product);
    }
    }
    return budgetProduct;
}

const showProduct = findBudgetProduct(AllProducts,10000);
console.log(showProduct);