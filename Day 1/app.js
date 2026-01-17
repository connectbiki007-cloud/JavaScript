// Output in various ways in browser
// document.write("First Javascript show in browser.")
// document.write(10)
// document.write(10+20)
// document.write("Welcome" , 10+20)

// console.log(10)
// console.log("Welcome to JavaScript",  "Sum",10+20)

// alert("Welcome to Javascript")

// variable in JavaScript

// var a = 10
// var b = 20
// console.log("Sum is:", a+b)
// console.log("Difference is:", a-b)
// console.log("Multiplication is:", a*b)
// console.log("Division is:", a/b)

// var userName = "Bikash" 
// console.log(userName)

// var userName ="Rijan" // var value is changeable
// console.log(userName)

// let userName = "Bikash"
// console.log(userName)

// // let userName = "Rijan" // Same variable name can't be used with let
// // console.log(userName)

// Scoped Variable with let 
{
    let a =10
    console.log(a)
}
//console.log(a)  // this will give error bcz a is not defined outside the block scoped

const b =10
console.log(b)

// b = 30 // this will give error bcz const value can't be changed
// console.log(b)

//Questions in Javascript
{
    n = 10
    //console.log(n)
}
var n = 30
console.log(n); // which n will be printed? 10 or 30

// Hosting in JavaScript with var
console.log(c)
var c= 50

// Template Literals in JavaScript
let firstName = 'Bikash'
let rollNo = 4
console.log(`My name is ${firstName}  my roll no is ${rollNo}`)

// Data Types in JavaScript
// Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol

let a = 10
console.log(a, typeof(a)) // typeof is used to check the data type of variable

let userName = "Bikash"
console.log(userName, typeof(userName))

let x 
console.log(x, typeof(x))

let status = true
console.log(status, typeof(status)) // status is cross bcz it is reserved word in JS
console.log(true+5) // true is considered as 1 and false as 0 in arithmetic operation

let y = null
console.log(y, typeof(y));

let sym = Symbol("My Symbol")// Symbol is used to create unique identifiers
console.log(sym, typeof(sym)); 

// Non-Primitive Data Types: Object, Array, Function

let arr = [10,20, 30,99]
console.log(arr, typeof(arr))

let obj = {
    name: "Bikash", //key: value
    address: "Bhaktapur"
    
}
console.log(obj, typeof(obj))

function sum() {
     // function body
}
console.log(sum, typeof(sum))


// Some Questions in Data Types
let o = 10
console.log(a * "20") // Explict data type conversion done by JS

console.log(o + "20") // + is used for both Addition and Append operation in JS

console.log(o - "Hello") // NaN : Not a Number

// // User Input in JavaScript
// let num1 = prompt("Enter first number:-") // prompt is used to take input from user in browser
// console.log(num1, typeof(num1))

// let num2 = Number(prompt("Enter second number:-")) // parseInt is used to convert string to integer
// console.log(num2, typeof(num2))