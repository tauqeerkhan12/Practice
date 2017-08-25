var getMarks = document.getElementById("local");
var marks = localStorage.getItem("marks");
getMarks.innerHTML = marks;

var p10 = document.getElementById("p10");
if (marks >= 7) {
    p10.innerHTML = "Bravo";
}
else if (marks >= 5) {
    p10.innerHTML = "Intellegent";
}
else if (marks >= 2) {
    p10.innerHTML = "Just Good";
}
else {
    p10.innerHTML = "Poor";
}