// 1. tofixed()
const num = 20.2356890978675;
const formatnum = num.toFixed(2);
console.log(`toFixed: ${formatnum}`);

//2. ceil()
const marks = Math.ceil(52.92)
console.log("\nCeiling value: "+marks);

//3. floor()
const res = Math.floor(75.25);
console.log("\nFloor value: "+res);

//4. round()
const value = Math.round(62.99)
console.log("\nrounded value: "+value)

//5.pow()
const number = Math.pow(4,4)
console.log("\npower of number: "+number);
const number1 = Math.pow(5, 4)
console.log("\npower of number: "+number1);

//6.absolute()
const num1 = Math.abs(-4.5)
console.log("\nabsolute value:"+num1);

const num2 = Math.abs(3.5)
console.log("\nabsolute value: "+num2);

//7.Math.min()
const main = Math.min(11, 34, 5);
console.log("\nMinimum value: "+main);

//8.Math.max
const main1 = Math.max(20, 30, 40);
console.log("\nmaximum value: "+main1)

//9.Math.sqrt
const val = Math.sqrt(16);
console.log("\nsquare root of val: "+val);
const val1 = Math.sqrt(49);
console.log("\nsqrt of val: ",val1);
