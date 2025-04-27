let myarr = [1,2,3,4,5]

// console.log(myarr.includes(5))

// const newArr = myarr.join() // it changes  the type of arr in String

// console.log(newArr)

// slice And splice 
//slice gives the subarray of given range without including the last value
// splice give the subarray of the given range including last value . And also modifies the original array 


let newarray = [7,8,9]

let added = myarr.concat(newarray) // in concat it doesn't change original 
// best method 
const all = [...myarr,...newarray] // spreading method : in this you can add how many you want 

console.log(added)
console.log(all )
