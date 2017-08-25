function ObjCreator(question, opt, correctopt) {
    this.question = question;
    this.opt = opt;
    this.correctopt = correctopt;
}
console.log([85, 17, 290, 7770, 39, 7183, 2401, 192, 257, -31])
var qs1 = new ObjCreator("What's 17 ✕ 5?", [85, 58, 80, 82], "85");
var qs2 = new ObjCreator("What about 68 ÷ 4?", [71, 13, 17, 16], "17");
var qs3 = new ObjCreator("How about 234 + 56?", [220, 260, 290, 295], "290");
var qs4 = new ObjCreator("What's 1476 + 6294?", [7780, 7689, 7778, 7770], "7770");
var qs5 = new ObjCreator("What's 78 – 39?", [39, 29, 19, 20], "39");
var qs6 = new ObjCreator("What's 7856 – 673?", [7183, 7189, 7389, 7170], "7183");
var qs7 = new ObjCreator("What is 7⁴?", [2400, 2409, 2439, 2401], "2401");
var qs8 = new ObjCreator("What is 3 ✕ 4³?", [200, 192, 182, 202], "192");
var qs9 = new ObjCreator("What is 89 + 78 + 90?", [250, 247, 257, 250], "257");
var qs10 = new ObjCreator("What is 30 - 5 + 34 - 90?", [-32, -31, -33, -34], "-31");

var objects = [qs1, qs2, qs3, qs4, qs5, qs6, qs7, qs8, qs9, qs10];

var question = document.getElementById("question");
var options = document.getElementsByClassName("opt1");
var num = document.getElementsByClassName("num");//number from 1 to 10

var optionSelectedGlobal;
function optClick(id) {
    
    var optionSelectedLocal = document.getElementById(id);
    optionSelectedLocal.parentNode.style.backgroundColor = "#cacb5c";

    optionSelectedGlobal = optionSelectedLocal;
    //console.log(optionSelectedGlobal.innerHTML,"gg")
    //console.log(optionSelectedGlobal,"global option",optionSelectedGlobal.innerHTML,typeof optionSelectedGlobal.innerHTML)

}


var marks = 0; //counter out of ten
var questionCounter = 1;//for questionChanger

function marksCounter() {
    console.log(questionCounter, "questionCounter");
    console.log(optionSelectedGlobal.innerHTML, "selected");
    console.log(objects[questionCounter-1].correctopt, "correct");
    if (optionSelectedGlobal.innerHTML === objects[questionCounter-1].correctopt){
        marks++;
    }
    else {
        console.log("wrong");
    }
    console.log(marks,"marks");
    
}


function questionChanger() {   //also option changer
    if (questionCounter === objects.length) {
        alert("no more question");
        localStorage.setItem("marks", marks);
        location = "result.html"
    }
    
    question.innerHTML = objects[questionCounter].question;
    //console.log(questionCounter,"count");
    //console.log(questionCounter , "questionCounter");
    
    //options
    
    for (var i = 0; i < 4; i++) {
        options[i].innerHTML = objects[questionCounter].opt[i]; 
    }
optionSelectedGlobal.parentNode.style.backgroundColor = "#f9d83c";//color changer

    questionCounter++;

    

    for(var i = 0; i < num.length; i++) {
        num[i].innerHTML = questionCounter;
    }
    optionSelectedGlobal = undefined;
}



// function marksCounter() {
//     console.log(optionSelectedGlobal, "selected");
// console.log(objects[questionCounter].correctopt, "correct");
// }


    // if (optionSelectedGlobal.innerHTML === objects[questionCounter-1].correctopt) {
    //      marks++;
    //      console.log(marks, "marks");
    //  }
    //  else{console.log("wrong")}












// alert(qs2.opt1);




// function correctAnswer() {

// }
// function wrongAnswer() {

// }


//console.log(optionSelectedGlobal,"gg")
//console.log(options,"opt")


//console.log(question)

//console.log(qs1, "qqq");

