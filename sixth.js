const myobj = [
    {
        lang : "javascript",
        langfile : "js"
    },
    {
        lang : "java",
        langfile : "java"
    },{
        lang : "C++",
        langfile : "cpp"
    },
    {
        lang : "Python",
        langfile : "py"
    }
]

// myobj.forEach((item)=>{
//     console.log(item.lang)
// })


// forEach do not return anything  its just used for modification

const nums = [1,2,3,4,5,6]

const st = nums.filter((num)=> num > 5)
// console.log(st)
// const num =  nums.map((n) => {return n>5})
// console.log(num)

const newnums =  nums
.map((num) => num*10)
.map((num) => num +1)
.filter((num)=> num >=30)

console.log(newnums)

// const mytotal = nums.reduce(function (acc , currval){
//     return acc + currval ;
// },0)
const mytotal= nums.reduce((acc ,currval) => acc +currval , 0) 

console.log(mytotal)
