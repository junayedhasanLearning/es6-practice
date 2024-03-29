// before ES6
function sum(num1, num2) {
    if(num2 == undefined){
        num2 = 0;
    };
    return num1 + num2;
}
let total = sum(23,12);
console.log(total);

// after ES6

function newSum(num1, num2=0){
    // num1 = num1 || 0;
    // num2 = num2 || 0;
    return num1 + num2;
}
total = newSum(1,2);
console.log(total);