const fish = {
    name: 'king Hilsa',
    address: 'chandpur',
    color: 'silver',
    phone: '21930293',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone)
const { name, address, color, phone, price } = fish;
console.log(name)
console.log(address)
console.log(color)
console.log(phone)
console.log(price)

const { age, name1 } = {
    name1: 'mofiz',
    age: 67,
    profession: 'artist'
}
console.log(name1)

// array destructuring
const [first, another] = [44, 99, 88, 345, 44];
console.log(first, another)

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king, lost, notun)
// function destructuring
function getNames(){
    return ['Halim', 'Kalim']
};
const [baba, kaka] = getNames();
console.log(baba, kaka)