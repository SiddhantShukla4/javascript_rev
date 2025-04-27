/*
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

*/

// Dates and Time .            Date is Object in js

let date = new Date()
console.log(date.toString())

let mydate = new Date(2025 , 0 , 21)
mydate = new Date("2-04-2025")
console.log(mydate.toDateString())

let mytimestamps = Date.now()
console.log(mytimestamps)

console.log(Math.floor(Date.now()/1000)) // from milisecond to second  

let newdate = new Date()

console.log(newdate.getDay())

newdate.toLocaleString('en-IN' ,{
    // weekday : "long",
    timeZone: 'Asia/Kolkata'
})

console.log(newdate)
