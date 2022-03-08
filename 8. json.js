

                            /* JSON (Javascript Object Notaion) */



// 1. JSON stringify() method:-
const obj1 = {name:'Abdullah Al Nomaan', age:29, ide:'VS code', institute: 'FCS', depa:'DTND'};
const stringObj = JSON.stringify(obj1);
console.log(stringObj);


// 2. JSON parse() method:-
const obj2 = {name:'Abdullah Al Nomaan', age:29, ide:'VS code', institute: 'FCS', depa:'DTND'};

const stringObj2 = JSON.stringify(obj2);
console.log(stringObj2);  // return json object string.

const normalObj = JSON.parse(stringObj2);
console.log(normalObj);  // return normal object.


