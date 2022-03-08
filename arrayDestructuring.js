

/* Array Destructring */



// 1. array destructuring:
const friedns = ['Hasnat', 'Tahmid', 'Kalia', 'Hannan', 'Rahim', 'Mahir', 'Siful'];

const [firstFriend, secondFriend, thirdFriend, forthFriend] = friedns;
console.log(firstFriend, thirdFriend, forthFriend);



// 2. function array destructring:-
function funcArrayDestruc(num1, num2, num3, num4, num5){
    const funcArray = [num1, num2, num3, num4, num5];
    return funcArray;
};
const [first , second, third, forth] = funcArrayDestruc(1,2,3,4,5);
console.log(first, third , forth);



// 3. arry to array destructuring:-
const friends2 = ['Abul', 'Khalm', 'Fahim', 'Rahim',
    ['Abdullah', 'Al', 'Nomaan'],
    ['Karim', 'Uddin']
]
const [firstName , secondName, thirdName] = friends2[4];
console.log(firstName, secondName, thirdName);



// 4. Object array destructring:-
const employee = {
    name: 'Abdullah Al Nomaan',
    ide:['Vs Code', 'Sublime Text', 'Bracket', 'Atom'],
    age:20,
    phone:[123385574, 12598764, 475478996]
}
const [firstNum, secondNum, thirdNum] = employee.phone;
const numbers = `1st number:${firstNum}, 2nd number:${secondNum}, 3rd number:${thirdNum}`;
console.log(numbers);



