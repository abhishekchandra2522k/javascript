// log a statement using console.log()
console.log('hello from script.js')

// variables
let age = 25
console.log(age)

const salary = 8000 // must be initialized and cannot be changed, like final keyword in java
console.log(salary)

let sum = 0
sum = 5
console.log(sum)

// data types

// strings
const firstName = 'Abhishek'
const lastName = 'Chandra'
const language = `JavaScript` // a string can have single quotes or double quotes or backticks

// float / number
const total = 0
const PI = 3.14

// booleans
const isPrimaryNumber = true
const isNewUser = false

// undefined: if the variable is declared but a value is not assigned to it
let result
console.log(result)

// we can assign a value to a variable later, intializing with undefined
// const res = undefined
const res = null // use this

// null: if the value is unknown or empty
const data = null

// object literal, key can only be a string or a symbol, value can be anything
const person = {
  firstName: 'Abhishek',
  lastName: 'Chandra',
  age: 22,
}

// if the key doesnot contain any spaces, we can remove the quotes

// to access the value of a key, use dot notation
console.log(person.firstName)

// array object
const oddNumbers = [1, 3, 5, 7, 9]

console.log(oddNumbers[0]) // 1
console.log(oddNumbers[3]) // 4

// js is a dynamically typed language, so we don't have to specify the type of the variable
// which also means that data types are automatically converted as needed during runtime

let a = 10
a = 'hello'
a = true
console.log(a) // last assigned value is printed

// operators
x = 5
let y = 10

console.log(x++)

console.log(x === y)
console.log(x !== y)

const isValidNumber = x < 8 && 8 < y
console.log(isValidNumber)

const isValid = true
console.log(!isValid)

console.log('Bruce ' + 'Wayne')

const isEven = 10 % 2 == 0 ? 'Number is even' : 'Number is odd'
console.log(isEven)

// implicit type conversion

// number + string = string
console.log(2 + '3')

// boolean + string = string
console.log(true + '3')

console.log(first)
