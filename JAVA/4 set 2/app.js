// JAVA SCRIPT (SET 2) FOR	LOOPS
// Assignment 01;
//1.  Write a program to display the message “Hello World” 5 times in your browser using for loop. 


//for (var i = 0; i <= 4; i++) {
//    document.write("Hello World </br>");
//}

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 02;
//2.  Write a program to print numeric counting from 1 to 10. 

//for (var i = 1; i <= 10; i++) {
//    document.write(i + "<br />")
//}

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 03;
//3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  

// var inputNum = prompt("Enter number of which you want to print table...", "5");
// var inputLength = prompt("Enter the length of table", "10");
// for (var i = 1; i <= inputLength; i++) {
//     document.write(inputNum + " X " + i + " = " + inputNum * i + "<br />");
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 04;
//4. You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop. 

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br />")
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 05;
//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;
// for (var i = 0; i < fruits.length; i++) {
//      document.write(fruits[i] + "<br />");
//      document.write("Element at index " + i + " is " + fruits[i] + "<br />")
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 06;
//6. Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user. 

// var N = [];
// var inputItems = prompt("Enter number of Items...");
// var value;
// document.write("Number of items " + inputItems + "<br />");
// for (var i = 0; i < inputItems; i++) {
//     value = prompt("Enter value of index " + i + "...");
//     document.write(value + "<br />")
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 07;
//7. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// document.write("<b>Counting:</b><br />");
// for (var i = 0; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br /><b>Reverse counting:</b><br />");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br /><b>Even:</b><br />");
// for (var i = 20; i >= 0; i-2) {
//     document.write(i + ", ");
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 08;
//8. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: 

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Shahzaib bakers.What do you want to order Sir/Ma'am?");
// var flag = false;
// for (var i = 0; i < items.length; i++) {
//     if (items[i] === userInput) {
//         document.write(items[i] + " is <b>avaliable</b> at counter " + i + " in our bakery");
//         flag = true;
//     }   
// }
// if (flag === false) {
//         document.write("We are sorry. " + userInput + " is <b>not  avaliable</b> in our bakery.");
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 09;
//9. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12] 

// var num = [24, 53, 78, 91, 12];
// document.write("Array items: " + num + "</br>");

// for (var i = 0; i < num.length; i++) {
// if (num[i] >= num[0] && num[i] >= num[1] && num[i] >= num[2] && num[i] >= num[3] && num[i] >= num[4]) {
//             document.write("The largest number is " + num[i]);
//     }
// }                   

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 10;
//10. Write a program to identify the smallest number in the given array.  A = [24, 53, 78, 91, 12] 

// var num = [24, 53, 78, 91, 12];
// document.write("Array items: " + num + "</br>");

// for (var i = 0; i < num.length; i++) {
// if (num[i] <= num[0] && num[i] <= num[1] && num[i] <= num[2] && num[i] <= num[3] && num[i] <= num[4]) {
//             document.write("The smallest number is " + num[i]);
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 11;
//11. Write a program to identify the largest & the smallest number in the given array.  A = [24, 53, 78, 91, 12]   

// var num = [24, 53, 78, 91, 12];
// document.write("Array items: " + num + "</br>");

// for (var i = 0; i < num.length; i++) {
// if (num[i] <= num[0] && num[i] <= num[1] && num[i] <= num[2] && num[i] <= num[3] && num[i] <= num[4]) {
//             document.write("The smallest number is " + num[i] + ".<br />");
//     }
// }

// for (var i = 0; i < num.length; i++) {
// if (num[i] >= num[0] && num[i] >= num[1] && num[i] >= num[2] && num[i] >= num[3] && num[i] >= num[4]) {
//             document.write("The largest number is " + num[i] + ".");
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 12;
//12. Write a program to print multiples of 5 ranging 1 to 100 

// var i = 5;
// while (i <= 100) {
//     document.write(i);
//     5 * i;
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 13;
//13. You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; var scores  = [58, 73, 89, 90]; FOR	Loops	JAVASCRIPTP age 9	of 12 Write a program to generate the following HTML table in your browser using JS.   

// var names = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// for (var i = 0; i < names.length; i++) {
//     document.write
//     (
//     <tr>
//     <th>STUDENTS</th>
//     <th>SCORES</th>
//     </tr>
//     <tr>
//     <th>names[i]</th>
//     <th>scores[i]</th>
//     </tr>)
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 14;
//14. Write a program that prints number from start of the array to desired stop value. Given array: var scores  = [12, 45, 3, 22, 34, 50]; (Hint: take stop value from user) E.g. if user gives 3 as input value print 12, 45, 3 if user gives 34 as input value print 12, 45, 3, 22, 34 

// var num = ["12", "45", "3", "22", "34", "50"];
// var userInput = prompt("Enter number where you want to stop...");
// var place = num.indexOf(userInput);
// for (var i = 0; i <= place; i++) {
//     document.write(num[i] + ",");
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 15;
//15. You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ] Write each element on new line with the help of nested for loops. 

// var array = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br />")
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 16;
//16. Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.   

// var userInput = prompt("Enter the value you want to decrease...");
// for (var i = userInput; i > 0; i-0.5) {
//     document.write(i + ", ");
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 17;
//17. The even/odd reporter Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). 

// for (var i = 0; i <= 20; i++) {
//     var check = i % 2;
//     if (check === 0) {
//         document.write(i + " is <b>Even</b>.<br />")
//     }
//     else {
//         document.write(i + " is <b>Odd</b>.<br />")
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 18;
//19. Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7 

// var userInput = prompt("Enter number of stars you want to print...")
// for (var i = userInput; i >= 1; i--) {
//     for (var j = i; j >= 1; j--) {
//         document.write("*");
//     }
//     document.write("<br />")
// }

//-----------------------------------------------------------------------------------------------------------------------


// Assignment 19;
//20. Write a program to create the following patterns in your browser. Take number of lines as an input.  

// var userInput = prompt("Enter number of lines of stars you want to print...");
// document.write("(a.)<br />");
// for (var i = 0; i < userInput; i++) {
//     for (var j = 0; j < userInput; j++) {
//          document.write("*");
//     }
//     document.write("<br />")
// }


// document.write("(b.)<br />");
// // var userInput = prompt("Enter number of stars you want to print...")
// for (var i = 1; i <= userInput; i++) {
//     for (var j = i; j >= 1; j--) {
//         document.write("*");
//     }
//     document.write("<br />")
// }


// document.write("(c.)<br />");
// // var userInput = prompt("Enter number of stars you want to print...")
// for (var i = userInput; i >= 1; i--) {
//     for (var j = i; j >= 1; j--) {
//         document.write("*");
//     }
//     document.write("<br />")
// }
// //-----------//------------------//-------------------------//---------------------------//----------------------------//----------
//                                                 // THE END