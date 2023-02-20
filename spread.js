const max = Math.max(12, 85, 774, 873, 45);
// console.log(max)
const numbers = [12, 85, 74, 343];
const largest = Math.max(...numbers);
console.log(...numbers)
console.log(largest)
const numbers1 = [...numbers];
console.log(numbers)
numbers.push(55)
numbers1.push(783)
console.log(numbers1)

const numbers2 = [...numbers]

const numbers3 = [111, 78, 99,...numbers, 12]
console.log(numbers3)