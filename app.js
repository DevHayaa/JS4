// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multidimensionalArray = [];

//2: Declare and initialize a multidimensional array
// representing the following matrix:


// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

let matrix = [
    [0, 1, 2, 3 + "<br>"], 
    [1, 0, 1, 2 + "<br>"],
    [2, 1, 0, 1 + "<br>"]
];

  
document.write(matrix);


//3: Write a program to print numeric counting from 1 to 10.

var i=0;
for(i=1; i<=10; i++){
    document.write(i + "<br>")
}


// 4: Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


// function printMultiplicationTable() {
//     // Get user inputs
//     let number = document.getElementById('number').value;
//     let length = document.getElementById('length').value;
    
//     // Convert inputs to integers
//     number = parseInt(number);
//     length = parseInt(length);
    
//     // Initialize result string
//     let result = '';

//     // Generate multiplication table
//     for (let i = 1; i <= length; i++) {
//         result += `${number} x ${i} = ${number * i}\n`;
//     }

//     // Display the result
//     document.getElementById('result').textContent = result;
// }


var multiTable = +prompt("Enter a number to its multiplication table");
var tableLength = +prompt("Enter length multiplication table");

for (var i = 1; i <= tableLength; i++) {
    document.write(`${multiTable} x ${i} = ${multiTable * i}` + "<br>");
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

var i;
for (i = 0; i < fruits.length; i++) {
        document.write(fruits[i] + "<br>");
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//Counting
var i;
for ( i = 1; i <= 15; i++) {
    document.write(i + ", "); 
}
 //Reverse counting
var i;
for ( i = 10; i >= 1; i--) {
    document.write(i + ", "); 
}


//Even
var i;
for (i = 0; i <= 20; i += 2) {
    document.write(i + ", "); 
}


//odd
var i;
for (i = 1; i <= 19; i += 2) {
    document.write(i + ", "); 
}

//Series
var i;
for (i = 2; i <= 20; i += 2) {
    document.write(i + "k, " + "<br>");  
}


// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var userItem = prompt("Welcome to ABC bakery, what do you want to order ma'am?")
var matchFound = "no";


for(var i = 0; i<items.length; i++){
    if(items[i]===userItem){
        matchFound="yes"
        alert("Yes, Available")
        break;
    }
}

if(matchFound=="no"){
   alert("We are sorry, this is not available")
}


//8: Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


var number = [24, 53, 78, 91, 12];

var largestNumber = number[0];

for (var i = 1; i < number.length; i++) {
   if (number[i] > largestNumber) {
            largestNumber = number[i];
     }
}
 

document.write("Array:" + number +"<br>")
document.write("The largest number in the array is: " + largestNumber + "<br>");


// 9: Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var numberSmall = [24, 53, 78, 91, 12];

var smallestNumber = numberSmall[0];

for (var i = 1; i > numberSmall.length; i--) {
   if (numberSmall[i] > smallestNumber) {
            smallestNumber = numberSmall[i];
     }
}

document.write("Array:" + numberSmall +"<br>")
document.write("The smallest number in the array is: " + smallestNumber);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.


for (var i = 0; i <= 100; i++) {

    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
}