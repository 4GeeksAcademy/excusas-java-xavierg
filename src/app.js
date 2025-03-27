import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() { 
 document.getElementById("excuse").innerHTML = excusas ();
};


function excusas () {

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whoR = who[Math.floor(Math.random() * who.length)];
let actionR = action[Math.floor(Math.random() * action.length)];
let whatR = what[Math.floor(Math.random() * what.length)];
let whenR = when[Math.floor(Math.random() * when.length)];

return whoR + "" + actionR + "" + whatR + "" + whenR;

};








 // console.log("Hello Rigo from the console!");


