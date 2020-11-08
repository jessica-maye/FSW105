//function accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    return num1 + num2
}
//function that accepts three numbers as parameters, and returns the largest of those numbers.
function largeNumber(num1, num2, num3){
    return Math.max (num1, num2, num3);
}
var result = largeNumber(11, 2, 3)
console.log(result)

//function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function rEvenOdd(num1) {
    if (num1 % 2=== 0) {
        return "Even number"
    } else {
        return "Odd number"
    }
}
var evenResult = rEvenOdd(9)
console.log(evenResult) 

//function that accepts a string as a parameter. 
//If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function stringLength(jellybeans) {
    if (jellybeans.length <= 20) {
    console.log(jellybeans.length) 
} 
    else { return jellybeans.slice()
    }
var jBresult = stringLength("horse")}
