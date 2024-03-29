const num1 = [1,2,3,4,5,6,7];
const num2 = [8,9,10,11,12,13,14];
const num3 = [15,16,17,18,19,20];

// const totalArr = num1.concat(num2).concat(num3);
const totalArr = [...num1, ...num2, ...num3];
console.log(totalArr);

const takaPoysha = [120,345,675,346,532];
const maximumTaka = Math.max(...takaPoysha);
console.log(maximumTaka);