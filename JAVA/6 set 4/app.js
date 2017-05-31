//JAVA SCRIPT (SET 4) - MATH AND DATE METHODS -
//Assignment: 01
//1.  Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number   

// var num = prompt("Enter a decimal number...");
// document.write("Number: " + num + "<br />Round off value: " + Math.round(num) + "<br />Floor value: " + Math.floor(num) + "<br />Ceil value: " + Math.ceil(num));

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 02
//2. Write a program that takes a negative integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number   

// var num = prompt("Enter a negative decimal number...");
// document.write("Number: " + num + "<br />Round off value: " + Math.round(num) + "<br />Floor value: " + Math.floor(num) + "<br />Ceil value: " + Math.ceil(num));

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 03
//6. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.   

// var a = Math.random();
// a = (a * 6) + 1;
// a = Math.floor(a);
// document.write("<b>..Welcome To Lodo..<br />Dice Value: </b>" + a)

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 04
//7. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var a = Math.random();
// a = (a * 2) + 1;
// a = Math.floor(a);
// document.write("Welcome to T20 WORLD CUP 2017<br />")
// var userInput = prompt("Try your luck  heads/tails").toLowerCase();
// if (a === 1 && userInput === "heads") {
//     document.write("<b>Heads<br /></b>YOU <i>WON</i> THE TOSS")
// }
// else if (a === 2 && userInput === "tails") {
//     document.write("<b>Tails<br /></b>YOU <i>WON</i> THE TOSS")
// }
// else {
//     document.write("<i>YOU Loose THE TOSS</i>")
// }

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 05
//8.  Write a program that shows a random number between 1 and 100 in your browser. 

// var num = Math.random();
// num = Math.floor((num * 100) + 1);
// document.write("Random number between 1 and 100: " + num);

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 06
//10. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var num = Math.random();
// num = Math.floor((num * 10) + 1);
// console.log(num);
// document.write("Welcome to game show<br />");
// var userInput = prompt("Enter any number from 1 to 10 to get a aeroplane...");
// if (num == userInput) {
//     document.write("COOONG     Ratulatioooooooooooooooooooooooooo ns<br />You won a <b>Aero Plain</b>")
// }
// else {
//     alert("Try again...");
//          var userInput = prompt("Enter any number from 1 to 10 to get a aeroplane...");
// }

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 07
//11. Write a program that displays current date and time in your browser. 

// document.write(new Date());

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 08
//12. Write a program that alerts the current month in words. For example December. 

// var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG"];
// var d = new Date();
// console.log(d);
// m = d.getMonth();
// console.log(m);
// document.write("Current Month is " + months[m]);

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 09
//13. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 

// var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// var d = new Date();
// m = d.getDay();
// document.write("Today is " + days[m]);

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 10
//