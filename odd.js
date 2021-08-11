// how many odd number ,, find odd number

let from = 16;
let to = 216;

function findOddEven(from,to){
    let oddNum = [];
    let evenNum = [];
    for(let i = from; i <= to; i++){
        if(i % 2 != 0){
            oddNum.push(i);
        }else{
            evenNum.push(i);
        }
    }
    const showOdd = oddNum + "\n" + "From " + from + " To " + to + " total Odd number = " + oddNum.length + "\n"; 
    const showEven = evenNum + "\n" + "From " + from + " To " + to + " total Even number = " + evenNum.length + "\n";

    return showOdd + showEven;
}


let howMany = findOddEven(from,to);
console.log(howMany);