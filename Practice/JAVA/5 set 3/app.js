// JAVA SCRIPT (set 3) - STRINGS METHODS

// Assignment 01;
// 1.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name

// var fullName = prompt("Enter your first name...");
// var lastName = prompt("Enter your last name...");
// var fullName = alert( "Hi, " + fullName + " " + lastName);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 02;
//2.  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser. 

// var inputModel = prompt("Enter your favourite mobile phone model...");
// document.write("My favorite mobile phone model is " + inputModel + ("<br />") + "Length of string is " + inputModel.length);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 03;
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser. 

// var a = "Pakistani";
// document.write("string: " + a + "<br />Index of 'n': " + a.indexOf("n"));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 04;
//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//  var a = "Hellow World";
// document.write("string: " + a + "<br />Last Index of 'l': " + a.lastIndexOf("l"));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 05;
//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.   

// var a = "Pakistani";
// var b = a.charAt(3);
// document.write("string: " + a + "<br />Chracters at Index '3': " + b) ;

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 06;
//6. Repeat Q1 using string concat() method. 

// var fullName = prompt("Enter your first name...");
// var lastName = prompt("Enter your last name...");
// var fullName = alert( "Hi, " + fullName + " " + lastName);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 07;
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

// var a = "Hyderabad";
// var b = a.slice(5);
// document.write("City: " + a + "<br />After replacement: Islam" + b);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 08;
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message + "<br />After replacement: " + message.replace(/and/g, "&"));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 09;
//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

// var num = "472";
// document.write("Value in string: " + num + "<br />Value in number: " + Number(num));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 10;
//10. Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ). Extract the domain name & show in your browser. 

// var userInput = prompt("Enter URL of website to find domin name...");
// document.write("URL: " + userInput + "<br />Domain: " + userInput.slice(4));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 11;
//11. Write a program that takes user input. Convert and show the input in capital letters.  

// var userInput = prompt("Enter any thing to see magic...");
// document.write("Userinput: " + userInput + "<br />Upper case: " + userInput.toUpperCase());

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 12;
//12. Write a program that takes user input. Convert and show the input in small letters.   

// var userInput = prompt("Enter any thing to see magic...");
// document.write("Userinput: " + userInput + "<br />Upper case: " + userInput.toLowerCase());

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 13;
//13. Write a program that takes user input. Convert and show the input in title case.   

// var userInput = prompt("Enter any thing to convert it in intial cap...");
// document.write("User Input: " + userInput + "<br />Intial cap: " + userInput.replace(userInput.charAt(0), userInput.charAt(0).toUpperCase()));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 14;
//14. Write a program that converts the variable num to string.var num = 35.36 ; Remove the dot to display “3536” display in your browser. 

// var num = 35.36;
// var numStr = num.toString();
// document.write("Number: " + num + "<br />String: " + numStr.replace(".", ""));

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 15;
//15. Write a program to display the value of x in your browser if a=”3” and b=”3”? 

// var a = 3;
// var b = 3;
// var x = a + b;
// document.write("a is " + a + "<br />b is " + b + "<br />a + b is " + x);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 16;
//16. Write a program to display the value of y in your browser if a=”3” and b=”3”?

// var a = 3;
// var b = 3;
// var y = a - b;
// document.write("a is " + a + "<br />b is " + b + "<br />a - b is " + y);

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 17;
//17.  Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of  [@ . , !], refer to ASCII table at the end of this document. 

// var userInput = prompt("Enter your name...");
// for (var i = 0; i < userInput.length; i++) {
// if (userInput.charAt(i) === "@" || userInput.charAt(i) === "." || userInput.charAt(i) === "," || userInput.charAt(i) === "!") {
//     alert("Invalid User name");
//     var userInput = prompt("Enter your name...");
// }
// }

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 18;
//19. Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they both are equal.

// var userInput1 = prompt("Enter any string for comparision...");
// var userInput2 = prompt("Enter any string for comparision...");
// if (userInput1.length >= userInput2.length) {
//     document.write(userInput1 + " is greater than " + userInput2);
// }
// else {
//     document.write(userInput2 + " is greater than " + userInput1);
// }

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 19;
//20. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to //enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

// var userInput = prompt("Enter password...");
// document.write("Enter password: " + userInput);
// if (userInput.length > 6) {
//     alert("Invalid password...");
//     var userInput = prompt("Enter password...");
// }
// if (userInput.charAt(0))
// for (var i = 0; i < userInput.length; i++) {
//     if (userInput.charAt(i) === "")
// }---

// ------------------------------------------------------------------------------------------------------------------------------

// Assignment 20;
//23.  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 

// var text = "the quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3)  === "the") {
//     count++;
//     }
// }
// document.write("Text: " + text + "<br />There are " + count + " occurance of word `the");

// ------------------------------------------------------------------------------------------------------------------------------

// END //