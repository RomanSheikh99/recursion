let AllProducts = [
    {name: "samsung phone", price: 11000},
    {name: "asus laptop", price: 33400},
    {name: "walton phone", price: 6400},
    {name: "apple watch", price: 10000},
    {name: "hp laptop", price: 64000},
    {name: "sport shoe", price: 1000},
    {name: "itel phone", price: 6500}
]


function getProduct(prodacts,Search){
    let match = [];
    for(let product of prodacts){
        let name = product.name;
        if(name.indexOf(Search) != -1){
            match.push(product);
        }
    }
    return match;
}

let searchText = "PHone"
let text = searchText.toLowerCase();
let searchProduct = getProduct(AllProducts,text);
console.log(searchProduct);