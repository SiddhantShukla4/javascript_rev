const score =400 
const balance = new Number(100)

console.log(balance)
console.log(balance.toString().length)
const hundreds =10000000;
console.log(hundreds.toLocaleString('en-IN')) // it will set commas as per indian 

let randomval = Math.random() // it will give random value between 0  to 1
const max =10
const min =20
console.log(Math.floor(Math.random() *(max -min +1))+min)