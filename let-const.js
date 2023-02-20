// break-up with var
// no more use of var 
// let: let it to reassign
// const: do not allow it to reassign

let money = 100;
money = 90;
console.log(money)

const bird = 'jaan pakhi';
// brid = 'moyna pakhi'; //throws TypeError
const message = bird + 'I Love you ❤🧡❣🤍';
console.log(message)

const numbers = [121, 89, 49, 90, 32, 23, 99];
// reassign is not allowed
// numbers = [77, 66, 55, 33, 22]
numbers.push(123);
numbers[1] = 90;
console.log(numbers)

const student = {
    name: 'mofiz',
    address: 'Rongpur'
}
// student = {name:'Mofazzal'} //not allowed
student.name = 'Mofazzal'
console.log(student.name)

let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}

console.log(number)