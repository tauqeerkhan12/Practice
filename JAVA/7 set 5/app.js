//JAVA SCRIPT (SET 5) - FUNCTIONS.1 -
//Assignment 01:
//1. Write a JavaScript program that accept two integers and display the larger   

// function lengthCompareter() {
//     var userInput1 = prompt("Enter first word to compare its length with second");
//     var userInput2 = prompt("Enter second word to compare its length with first");
//     if (userInput1.length > userInput2.length) {
//         document.write(userInput1 + " length is greater than " + userInput2)
//     }
//     else if (userInput1.length === userInput2.length) {
//         document.write("Both have same lengths...")
//     }
//     else {
//         document.write(userInput2 + " length is greater than " + userInput1)
//     }
// }
// lengthCompareter();

//--------------------------------------------------------------------------------------------------------------------------

//Assignment 02:
//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Sample numbers : 0, -1, 4  Output : 4, 0, -1 

// function sorter(sort1, sort2, sort3) {
//     document.write(sort3 + ", " + sort2 + ", " + sort1);
// }
// sorter("0", "-1", "4");

//--------------------------------------------------------------------------------------------------------------------------

//Functions.2
//Assignment 01:
//Define a function max() that takes 2 numbers as arguments and return the largest number.

// function max(a, b) {
//     if (a > b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// alert(max(2, 5));

//--------------------------------------------------------------------------------------------------------------------------

//Assignment 02:
//Define a function middleOfThree() thats takes 3 numbers as arguments and return the middle of them.

// function middleOfThree(a, b, c) {
//     if ((a > b || a > c) && (a < b || a < c)) {
//         return a;
//     }
//     else if ((b > a || b > c) && (b < a || b < c)) {
//         return b;
//     }
//     else if ((c > b || c > a) && (c < b || c < a)) {
//         return c;
//     }
//     else{alert("Something went wrong")}
// }
// document.write(middleOfThree(10, 200, 30));

//--------------------------------------------------------------------------------------------------------------------------

//Assignment 03:
//function ,takes a word and return .and num of vovels chracters and not char.

// var vowevls = 0;
// var notVowels;
// function identifier(a) {
//     var vol = ["a", "e", "i", "o", "u"]
//      for (var i = 0; i < a.length; i++) {
//          for (var j = 0; j < vol.length; j++) {
//              if (a.charAt(i) === vol[j]) {
//                  a = a.replace(a.charAt(i), "");
//                  vowevls++;
                 
//              }
//          }
//      }
//      return a;
// }
// var userInput = prompt("Enter any word...");
// document.write("Word without vowel: " + identifier(userInput) + "<br />Number of vowels in word: " + vowevls);


//--------------------------------------------------------------------------------------------------------------------------

//Assignment 04:
//find longest word from array given by user.

// function longestWord(words) {
//     if (words[0].length > words[1].length && words[0].length > words[2].length) {
//         document.write(words[0] + " is the longest word.")
//     }
//     else if (words[1].length > words[0].length && words[1].length > words[2].length) {
//         document.write(words[1] + " is the longest word.")
//     }
//     else if (words[2].length > words[1].length && words[2].length > words[0].length) {
//         document.write(words[2] + " is the longest word.")
//     }
//     else {document.write("2 or 3 words have same lengths")}
// }
// var words = [prompt("Enter word 1..."), prompt("Enter word 2..."), prompt("Enter word 3...")];
// alert(longestWord());

//--------------------------------------------------------------------------------------------------------------------------

//Assignment 05:
//write a function to calculate age by birth year.
 
//  function ager(birthYear) {
//      var currentYear = new Date().getFullYear();
//      var age = currentYear - birthYear;
//      return age;
//  }
//  var userInput = prompt("Enter your birth year...");
//  alert("Your age is " + ager(userInput));

//--------------------------------------------------------------------------------------------------------------------------

//End//