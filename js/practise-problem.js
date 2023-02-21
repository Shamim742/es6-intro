// write an arrow function that will take 3 parameters, will multiply the parameters and will return the result
const multiply = (x, y, z) => {
    const a = x * y * z;
    return a;
};
const multiplication = multiply(5, 7, 4)
console.log(multiplication)

// write the following sentence in three lines and print the result: 'I am a web developer.I love to code. I love to eat biryani.'

const multiLine = `I am a web developer.
I love to code.
I love to eat biryani.
`
console.log(multiLine)

// write an arrow function that takes two parameters and one parameter has to be default value
const division = (x = 4, y) => x / y;
const result = division(9, 5)
console.log(result)