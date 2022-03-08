


                /* Short cut */

// 1. Convert number to string number;
const nums = 250;
const numsStr = nums + '';
console.log(numsStr);  // retrunr string number.


// 2. Convert string number to number
const srtNum = '4500';
const numbers = +srtNum;
console.log(numbers);  // return numbers.


// 3. Use and && operator if the left side is true then right side will be executed.
let isActive2 = false;
const showDisplay = () => console.log('display active');
const hideDisplay = () => console.log('display hide');

// i. check isActive value is true;
isActive2 && showDisplay(); // return display active.

// ii. check isActive value is false;
isActive2 && showDisplay();  // no return


// 4. Use or || operator if the left side is false then right side will be executed.

let isActive3 = true;
const showDisplay2 = () => console.log('display showed.');
const hideDisplay2 = () => console.log('hide display.');

// i. check isActive value is true
isActive3 || showDisplay2();  // no return.

// ii. check isActive value is fasle.
isActive3 || showDisplay2();  // return display active.


// 5. Toggle boolean:-
let isActive4 = true;

// retrun true.
console.log(isActive4);

// retrurn false.
isActive4 = !isActive4;  // value false
console.log(isActive4);

// return true.
isActive4 = !isActive4;  // value true
console.log(isActive4);