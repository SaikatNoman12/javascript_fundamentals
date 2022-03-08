

            /* ternary Operator */



// 1. use variable and check true or false;
let isActive = true;
const first2 = () => 'yse i eat rice';
const second2 = () => 'no i.... cryyyyyyyyy.';

const eatOrNott = isActive ? first() : second();
console.log(eatOrNott);


// 2. ternary operator use simple condition.
const money = 500;
const eat = money > 300 ? 'Opss, I like Biryani.' : 'Yhhh, I like tea and biskuttt.';
console.log(eat);


// 3. ternary operator use multiple condition. Use && and operator.
const money1  = 1000;
const eat2 = (money1 > 200 && money1 < 900) ? 'nah thaka ajke khamu na.' : 'nah ajke valo korei khaoa hobe.';
console.log(eat2); 


// 4. ternery operator use single bang(not) (!) operator.
let x;
const defind = !x ? 'undefind value' : 'defined value.';
console.log(defind);


// 5. ternary 
let y;
const defind1 = !!y ? 'Value is defined.' : 'Value is not defined';
console.log(defind1);  


// 6. ternary operator use not equals to operator.
let z;
const defind2 = y !== undefined ? 'Value is defined.' : 'Value is not defined';
console.log(defind2);


// 7. ternary operator use function conditonally call.
const a = 500;
const b = 1000;
const first = () => 'yse i eat rice';
const second = () => 'no i.... cryyyyyyyyy.';

const eatOrNot = (a >= 200 && b <= 900) ? first() : second();
console.log(eatOrNot);