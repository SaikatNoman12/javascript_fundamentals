


                /* 1. Declear 3 variable in 3 types : var, let, const. */



// var  do not use var type variable:-
var product = 'Amul Jus';
console.log(product);

var product = 'kamal jus';
console.log(product);


// let use for variable reassign . any variable ressign for use let variable:-
let powerHouse = 'My Power House in Bangladesh';
console.log(powerHouse);

// reassign variable
powerHouse = 'My power house name is Noman Abdullah Power house';
console.log(powerHouse);


// const use for constant variable. do not redeclear and reassing in this variable:-
const names = 'Abdullah Al Nomaan';
console.log(names);



                /* 2. Use for conditon */



// use if & else:-
const names1 = 'abdulllah al nomaan'
if(names1 === 'abdulla'){
    console.log('found');
}
else{
    console.log('not found');
}; 


// use if, else & else if:-
let noman = '';
if(noman !== undefined){
    console.log('noman is heare');
}
else if(noman === 'noman'){
    console.log('hello noman');
}
else{
    console.log('hello');
} 



                /* 3. Muyltiple conditon  && and || */



// && end conditional operator:-
const num = 100;
if((num > 50) && (num < 200)){
    console.log('yessss');
}
else{
    console.log('nooooo');
} 


// ||  or condtion operator:-
const names2 = 'Abudllah';
if((names2.length > 3) || (names2 === 'abudllah')){
    console.log('nommmmmmm');
}
else{
    console.log('naaaaaa');
}



                /* 4. Declear an array */



// declare an array:-
const students1 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
console.log(students1); 
 

// array index and array index length:-
const students2 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
console.log(students2.length); 


// array indexOf() method:-
const students3 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
const second = students3.indexOf('Fahim');
console.log(second); 


// array push()  method:-
const students4 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
students4.push('kaka', 'faka');
console.log(students4); 


// array pop() method:
const student5 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
student5.pop();
console.log(student5); 


// array add new element in any array index:-
const students6 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
students6[2] = 'Mafia';
console.log(students6); 


// add new array element in any array positions:-
const students7 = ['Rahim', 'Karim', 'Fahim', 'Asiq', 'Kalia'];
students7.splice(3, 0,'indexxx');
console.log(students7); 



                /* 5. types of loop */



// while loop use of array

const arr1 = ['friends', 'hello', 'how', 'are', 'you'];
let i = 0
while (i < arr1.length) {
    console.log(arr1[i]);
    i++
} 


// for loop use of array:-
const arr2 = ['friends', 'hello', 'how', 'are', 'you???'];
for(let i = 0; i < arr2.length; i++){
    const e = arr2[i];
    console.log(e);
} 


// for of loop:- 
const arr3 = ['friends', 'hello', 'how', 'are', 'you???', 'mariala'];
for(const e of arr3){
    console.log(e);
} 


// for in use for object:-
const obj1 = {
    name:'Abdullah Al Nomaan',
    depa: 'DTNT',
    age:'25',
    friends:['hasnat', 'rahim', 'shafin', 'karim', 'nehal']
}
for(const key in obj1){
    console.log(key , obj1[key]);
} 



                /* 6. simple function */



// creat simple function and function call and return funtion:-
function funcName(num2, num3, devide){
    const number1 = num2 * 10;
    const number3 = num3 * 10;
    const numberAdd = number1 + number3;
    const numberDevide = numberAdd / devide;
    return numberDevide;
};
const funcNumCall = funcName(20, 50, 7);
console.log(funcNumCall);



                /* 7. Declare an object */



// declear object:-
const obj2 = {
    name:'Abdullah Al Nomaan',
    depa: 'DTNT',
    age:'25',
    friends:['hasnat', 'rahim', 'shafin', 'karim', 'nehal']
};
console.log(obj2.name, obj2.age);


// add new property in object:-
const obj3 = {
    name:'Abdullah Al Nomaan',
    depa: 'DTNT',
    age:'25',
    friends:['hasnat', 'rahim', 'shafin', 'karim', 'nehal']
};
obj3.best = 'Kalia';
obj3.finally = 'Kopa kopa kopa';
console.log(obj3);


// Object propety access in 3 types:-
const obj4 = {
    name:'Abdullah Al Nomaan',
    depa: 'DTNT',
    age:'25',
    friends:['hasnat', 'rahim', 'shafin', 'karim', 'nehal']
};

// 1st type use direct property.
console.log(obj4.name);   

// 2nd type access by strig and use propety.
console.log(obj4['friends']);  

// 3rd type access propety use variable.
const depa = 'depa';   
console.log(obj4[depa]);  







                            










