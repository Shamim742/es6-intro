const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;

const multiply = (a, b) => a * b;

const result = multiply(7, 9)
console.log(result)

// no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
};
const result1 = doMath(3, 3, 98)
console.log(result1)