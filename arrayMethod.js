


                                        /* Array Methods */



            // 1. map() array method. Use for normal loop:-
const products1 = [
    {name:'iphone', price:10000, brand:'apple', quality:10},
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'Laptop', price:16000, brand:'HP', quality:9},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
const mapp = products1.map(product => product.brand);
console.log(mapp);



            // forEach()  array method. Use for normal loop:-
const products2 = [
    {name:'iphone', price:10000, brand:'apple', quality:10},
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'Laptop', price:16000, brand:'HP', quality:9},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
products2.forEach(product => console.log(product));



            // filter() array method. use for condition:-
const products3 = [
    {name:'iphone', price:10000, brand:'apple', quality:10},
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'Laptop', price:16000, brand:'HP', quality:9},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
const filter = products3.filter(product => product.price < 20000);
console.log(filter);



            // find()  method. Retrun 1st conditional match element:-
const products4 = [
    {name:'iphone', price:10000, brand:'apple', quality:10},
    {name:'watch', price:3000, brand:'Quatraj', quality:5},
    {name:'laptop', price:16000, brand:'HP', quality:9},
    {name:'asus laptop', price:36000, brand:'asus', quality:10},
    {name:'Samsung tv', price:20000, brand:'samsung', quality:7}
];
const find = products4.find(product => product.name.includes('l'));
console.log(find);
