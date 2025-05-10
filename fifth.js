
/*
// Arrow Function () =>{}

    // if u want return object u need this () =>({})

 const one  = () =>({
    username : "Sid"
 });
 console.log(one());


 // Immediately Invoked Functions Expressions (IIFE)
 (function dbconnect(){
    console.log(`db connected`);
 })();

 ((name)=>{
    console.log(`Hey ${name}`)
 })('Sid')

 */

 //falsy values 
  // false , 0 ,-0 , BigInt 0n , "" , undefined , null , NaN 

  //truthy values 
//   "0", 'false' ," " , [], {} ,function(){}
0
const empty = {}

if(Object.keys(empty).length === 0){
console.log('this is empty')
}

//ternary operator
 const val =100 

 val <=80 ? console.log("less than 80") : console.log("more than 80")

 // break & continue 
 const map = new  Map ()
   map.set(1, "one") 
   map.set(2, "two")
   console.log(map)

   const obj = {
      js : "JavaScript",
      cpp :"C++",
      py :"python "
   }
   for(const key in obj){
      console.log(`${key} and ${obj[key]}`)
   }

   // for in loop is used for geting keys 

   const coding = ["python", "ruby", "cpp"]

   // coding.forEach(function (name){
   //    console.log(name)
   // })

   // coding.forEach((item)=>{
   //    console.log(item)
   // })

   // function print(item){
   //    console.log(item)
   // }
   // coding.forEach(print)

   coding.forEach((item , index ,arr) =>{
      console.log(item, index , arr)
   })

   