// object literals
const mysymbol = Symbol()
const user = {
    name : "Sid",
    age : 18,
    location : "Bhopal",
    email : "sid@gmail.com",
    isloggedin : false ,
    [mysymbol]: "key"
}

// console.log(user.email)
// console.log(user[mysymbol])

// Object.freeze(user) // now values can't be modified 
user.greeting = function(){
    console.log(`Hello user ${this.name}`)
    
}
console.log(user.greeting())  

function calculateprice(...nums1){   // rest operator add everything in array 
   return nums1
}
console.log(calculateprice(300,200))

function handlObject(anyobject){
    console.log(`username is ${user.name} and age is ${user.age}`)
}
console.log(handlObject(user))