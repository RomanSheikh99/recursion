// this recursion function find factorial number.

function getfactorial(n){
    if(n === 1){
        return 1;
    }
    else{
        return n * getfactorial(n-1);
    }
}

let getResult = getfactorial(6);
console.log(getResult);