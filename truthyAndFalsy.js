

            /* Javascript Truthy and Salsy */


// 1. Truthy list:-
/* 
1. Any positive number and negative number is truthy.
2. Any number string is truthy.
3. Only white space string is truthy.
4. Any string value is truthy.
5. String Null value is truthy.
6. String Undefined value is truthy.
7. String NaN value is truthy.
8. String false value is truthy.
9. String 0 (zero) number is truthy.
10. Any array and empty array is truthy.
11. Any object and empty object is truthy.
12. Boolean true is truthy.
*/
const num1 = 14;  //1. positive number.

const num2 = -525;  //2. negative number.

const num3 = '1545';  //3. string number.

const str = ' '; //4. shite space string.

const str1 = 'Noman'; //5. string value.

const nulls = 'null'; //6. string null value.

const undefinedd = 'undefined' //7. undefined string value. 

const NaNN = 'NaN'; //8. NaN string value. 

const zero = '0'; //9. 0 string value. 

const arr = []; //10. empty array.

const arr2 = [1,2,3,4,5,6,8]; //10. array.

const obj = {}; //11. empty object. 

const obj1 = {name:'abdu', age:25}; //12. object.

const falsee = 'false'; //13. string false.

// check truthy 
if(obj1){
    console.log(true);
}
else{
    console.log(false);
}



// 2. Falsy list:-
/* 
1. 0 (zero) number is falsy.
2. Boolean false is falsy..
3. Empty string '' is falsy.
4. null value is falsy.
5. undefined value is falsy.
6. NaN value is falsy.
*/
const zero0 = 0;   //1. Only 0 (zero) number value.

const nulll = null;   //2. null value.

const undefineddd = undefined //3. undefined value.

const nan = NaN //4. NaN value.

const fals1 = false; //5. Boolean false value.

const emptyString = ''; //5. empty string value.

// cheack falsy
if(!emptyString){
    console.log(false);
}
else{
    console.log(true);
};




