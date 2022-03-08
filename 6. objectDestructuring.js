


                            /* Object Destructuring */



// 1. Simple Object destruncturing
const student = {
    name:'Abdullah Al Nomaan',
    age:25,
    phone:12546,
    institute: 'FCI',
    depa:'DTND'
};
const {name, age, depa, phone} = student;
console.log(name, age, phone, depa);



// 2. Arry to object destructuring:-
const friends = [
    'Abdullah Al Nomaan',
    {name:'Abul Kasem', age:55},
    'Abu Hasnat',
    'Abul Hayat',
    {name1:'Rahim khan', age1:26, job1:'Developer'} 
];
const {name1, age1, job1} = friends[4];
console.log(name1, age1, job1);


// 3. Object to object destructuring:-
const employee = {
    name:'Abdullah Al Nomaan',
    age:25,
    lang:{
        firstLang:'HTML',
        secondLang:'CSS',
        thirdLang:'Javascript',
        forthLang:'Python'
    },
    job:'Development'
}

const {firstLang, thirdLang} = employee.lang;
console.log(firstLang, thirdLang);


// 4. Object to array to object destructuring:-
const productss1 = {
    name:'BD Chpis',
    compnay:'BD',
    emplye:[
        'Abul Kasem',
        {name2:'Rahim Uddin', age2:25}
    ],
    total:125
};
const {name2, age2} = productss1.emplye[1];
console.log(name2, age2);


// 5. object to object to object destructuring:=
const productss2 = {
    name:'BD Chpis',
    compnay:'BD',
    emplye:[
        'Abul Kasem',
        {name2:'Rahim Uddin', age2:25}
    ],
    total:125,
    employName:{
        first:{name3:'Karim Uddin', age3:26},
        second:{name4:'Karim Uddin', age4:66},
        third:{name5:'Kakhi Khan', age:56, position:'Manager'}
    }
};  
const {name4, age4} = productss2.employName.second;
console.log(name4, age4);




