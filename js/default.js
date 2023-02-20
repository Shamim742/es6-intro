// function add(first, second){
//     console.log(first, second)
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// };

// const result = add(10);
// console.log(result)

function add(first = 0, second = 0){
    console.log(first, second)
    const total = first + second;
    return total;
}
const result = add()
console.log(result)

function fullName(firstName, lastName = 'Mishory'){
    const fullName = firstName + ' ' + lastName;
    return fullName;
};

const name = fullName('Billal');
console.log(name)