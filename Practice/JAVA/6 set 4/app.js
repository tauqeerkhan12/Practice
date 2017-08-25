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
//15. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

// var date = new Date();
// if (date.getDate() <= 15) {
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 11
//16. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var date = new Date();

// document.write("Current Date: " + date + "<br />Elapsed Milliseconds since Jan 1 1970: " + date.getTime() + "<br />Elapsed Minutes since Jan 1 1970: " + new Date("January 1, 1970").getTime() - new Date().getTime() / (1000 * 60 * 60 * 24));

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 12
//17. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// var date = new Date().getHours();
// if (date < 12) {
//     document.write("Its AM");
// }
// else {
//     document.write("Its PM");
// }

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 12
//18. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate   

// var a = new Date("December 31, 2020");
// document.write(a);

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 13
//19. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?  Note: 1st Ramadan was on June 18, 2015   (ramazan === 2017 year).

// var date = new Date("January 1, 2017").getTime() - new Date().getTime();
// var daysGone = Math.floor(date / (1000 * 60 * 60 * 24));
// document.write(daysGone + " Days gone since 2017");

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 14
//23. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = prompt("Enter your age...");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your Birth year is " + birthYear);

//----------------------------------------------------------------------------------------------------------------------------

//Assignment: 15
//24. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date) 

// var userInputName = prompt("Enter your Name...");
// var date = new Date();
// var units = 500;
// var rate = 16;
// var cost = units * rate + 500;
// document.write("<b>K-Electric Bill</b><br /><br />Customer Name: " + userInputName + "<br />Month: " + date.getMonth() + "<br />Number of Units: " + units + "<br />Charges per unit: " + rate + "<br /><br />Net Amount Payable (within due date): " + (units * rate) + "<br />Late payment charges: 500 <br />Gross amount payable (after due date): " + cost );

//----------------------------------------------------------------------------------------------------------------------------

//END//