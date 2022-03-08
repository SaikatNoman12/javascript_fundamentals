


            /* 1. Use template string ( ` ` )*/


      
// Use tempalte string:-
const obj1 = {
    name:'Abdullah Al Nomaan',
    age: 32,
    Depa:'DTNT',
    friends:['Hasnat', 'Mahir', 'Siful', 'Mehedi'],
    bookList:{
        bangla:200,
        english:252,
        math:23
    },
    collage:'Feni Mohipal Collage'
}; 

const text1 = `My name is ${obj1.name}. My friend name ${obj1.friends[1]}. Our department book price bangla ${obj1.bookList.bangla}tk, english ${obj1.bookList.english}tk.`
console.log(text1); 



            /* 2. Use string interpolation ${  } */

          

const obj2 = {
    name:'Abdullah Al Nomaan',
    age: 32,
    Depa:'DTNT',
    friends:['Hasnat', 'Mahir', 'Siful', 'Mehedi'],
    bookList:{
        bangla:200,
        english:252,
        math:23
    },
    collage:'Feni Mohipal Collage'
};

// use string interpolation 
const text2 = `My name is ${obj2.name}. My friend name ${obj2.friends[1]}. Our department book price bangla ${obj2.bookList.bangla}tk, english ${obj2.bookList.english}tk.`
console.log(text2);



            /* 3. Arrow function */


            
// no parameter arrow funtion:-
const noParameter = () => console.log('Hello my good friends');
noParameter();  // call no parameter arrow function.


// single parameter arrow function:-
const singleParameter = (num1) => num1 * 10;
const singleParametrdata = singleParameter(10);
console.log(singleParametrdata);


// double parameter arrow function:-
const doubleParameter = (num1 , num2) => (num1 + num2) * 20;
const doubleParameterData = doubleParameter(20, 20);
console.log(doubleParameterData);


// multiple paramter arrow function:-
const multipleParameter = (num1, num2, num3, num4) => num1 + num2 + num3 +num4;
const multipleParameterData = multipleParameter(10, 10, 10, 10);
console.log(multipleParameterData);


// multiple parameter and multi line arrow function:-
const multiLine = (num1, num2, num3, num4) => {
    const firstNumber = num1 * 2;
    const secondNumber = num2 * 2;
    const thirdNumber = num3 * 2;
    const fourthNumber = num4 * 2;
    const addNumber = firstNumber + secondNumber + thirdNumber + fourthNumber;
    const total = addNumber * 10;
    // return total value
    return total;
}; 

const multiLineData = multiLine(10, 10, 10, 10);
console.log(multiLineData);



            /* 4. Spread operaotr ( ... ) */



// a new array. Use spread operator:-
const numbers = [1, 33, 43, 25, 56, 12];
const newArr = [...numbers];
console.log(newArr);


// Create a new array form an older array and add an element:-
const numbers2 = [25, 36, 89, 24, 26, 45, 69, 788];
const nweArr2 = [ 100, 200, ...numbers2, 250, 361];
console.log(nweArr2);





