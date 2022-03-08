


                /* add and remove element  form an array */



// 1. add element in an array. Use spread operator:-
const products1 = [
    {name:'iphone', price:10000, brand:'apple', quality:10},
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'Laptop', price:16000, brand:'HP', quality:9},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
const newElement = {name:'Mouse', price:25800, brand:'Walton', quality:10};
const newElement2 = {name:'Computer', price:2500, brand:'samsung', quality:10};

const newArr = [ newElement, ...products1, newElement2]
// console.log(newArr);


// 2. remove array element in an array:-
const products2 = [
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'phone', price:10000, brand:'apple', quality:10},
    {name:' Asus phone', price:2500, brand:'asus', quality:8},
    {name:'Laptop', price:16000, brand:'HP', quality:9},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
const removePhone = products2.filter(product => product.name !== 'phone');
console.log(removePhone);



