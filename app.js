var x=prompt("please enter your name:");
alert("Hi,"+x);

// Multiplication task

var mul=prompt("Enter a number for multiplication");
var val;
for(var i=1;i<=10;i++){
val=mul*i ;

document.write( mul+ "*" +i + " = "+val);
document.write("<br>");
}

// task 3
var city=prompt("Enter City:");
if(city=="karachi"){
alert("Welcome to city of lights!");
}
else{
    alert("Welcome not in the city of lights!");
}

// task 4
var gen=prompt("Enter your Gender? Male/Female:");
if(gen=="male"){
alert("Welcome Sir!");
}
else{
    alert("Welcome Ma'am!");
}

// task5
var signal=prompt("Signal Colour:");

if(signal=="red"){
alert("vehicles must stop");
}
else if(signal=="yellow"){
    alert("vehicles should get ready to move");
    }

    else if(signal=="green"){
        alert("vehicles can move now");
        }
        else{
            alert("unspecified colour");
        }

    // task6

    var max=40;
    var curr=prompt("Whats your current age?\n max age:"+max);

    if(curr<=max){

        alert("Youre Welcome Your age is less than or equal max age");
    }

    // task7
    var fuel=0.25;
    var curr_fuel=prompt("Your Current fuel in liters");

    if(curr_fuel<fuel){

        alert("Refuel Your car please!");
    }

// task8
// a
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
// c
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
// e

if (true){
    alert("True");
   }
   if (false){
    alert("False");
   }
// f
if("car" < "cat"){
    alert("car is smaller than cat");
   }

//task9 Percentages

const sub1=parseInt(prompt("Obtained Marks in first subject"));
const sub2=parseInt(prompt("Obtained Marks in second subject"));
const sub3=parseInt(prompt("Obtained Marks in third subject"));
const ob= (sub1+sub2+sub3);
let totalmarks=prompt("Total marks of all three subjects: ie(100+100+100=300)");

let perc=(ob/totalmarks)*100;

if(perc>=80){
    document.write("Grade A-one");
    document.write("<br>");
    document.write("Total Marks:"+totalmarks);
    document.write("<br>");
    document.write("Marks Obtained:"+ ob);
    document.write("<br>");
    document.write("Great Job!");
    document.write("<br>");
    document.write("Percentage:"+perc);
}
else if(perc>=70 && perc<80){
    document.write("Grade A");
    document.write("<br>");
    document.write("Total Marks:"+totalmarks);
    document.write("<br>");
    document.write("Marks Obtained:"+ ob);
    document.write("<br>");
    document.write("Nice Work...you can do better!");
    document.write("<br>");
    document.write("Percentage:"+perc);
}
else if(perc>=60 && perc<70){
    document.write("Grade B");
    document.write("<br>");
    document.write("Total Marks:"+totalmarks);
    document.write("<br>");
    document.write("Marks Obtained:"+ ob);
    document.write("<br>");
    document.write("Need Improvement!");

}
else{
    if(perc<60){
        document.write("Grade F, Fail")
    }
}