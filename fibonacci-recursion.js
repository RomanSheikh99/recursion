// fibonacci 

let num = 8;
let fibo = [0,1];
for(let i = 2; i <= num; i++){
    fibo[i]=fibo[i-1]+ fibo[i-2];
}
console.log(fibo);

function getfibo(nth){
    if(nth == 0){
        return 0;
    }
    else if(nth == 1){
        return 1;
    }
    else{
        return getfibo(nth - 1) + getfibo(nth - 2);
    }
}

console.log(getfibo(4));