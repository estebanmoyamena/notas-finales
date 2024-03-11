
let n1_html = document.getElementById("nota1-html");
let n2_html = document.getElementById("nota2-html");
let n3_html = document.getElementById("nota3-html");
let avg_html = document.getElementById("avg-html");

let nota1html = parseInt(prompt("Ingrese la Nota 1 de HTML"));
let nota2html = parseInt(prompt("Ingrese la Nota 2 de HTML"));
let nota3html = parseInt(prompt("Ingrese la Nota 3 de HTML"));

n1_html.innerHTML = nota1html;
n2_html.innerHTML = nota2html;
n3_html.innerHTML = nota3html;
avg_html.innerHTML = ((nota1html + nota2html + nota3html)/3).toFixed(2);

/*css*/

var n1_css = document.getElementById("nota1-css");
var n2_css = document.getElementById("nota2-css");
var n3_css = document.getElementById("nota3-css");
var avg_css = document.getElementById("avg-css");

var nota1css = parseInt(prompt("Ingrese la Nota 1 de css"));
var nota2css = parseInt(prompt("Ingrese la Nota 2 de css"));
var nota3css = parseInt(prompt("Ingrese la Nota 3 de css"));

n1_css.innerHTML = nota1css;
n2_css.innerHTML = nota2css;
n3_css.innerHTML = nota3css;
avg_css.innerHTML = ((nota1css + nota2css + nota3css)/3).toFixed(2);


/*js*/

var n1_js = document.getElementById("nota1-js");
var n2_js = document.getElementById("nota2-js");
var n3_js = document.getElementById("nota3-js");
var avg_js = document.getElementById("avg-js");

var nota1js = parseInt(prompt("Ingrese la Nota 1 de js"));
var nota2js = parseInt(prompt("Ingrese la Nota 2 de js"));
var nota3js = parseInt(prompt("Ingrese la Nota 3 de js"));

n1_js.innerHTML = nota1js;
n2_js.innerHTML = nota2js;
n3_js.innerHTML = nota3js;
avg_js.innerHTML = ((nota1js + nota2js + nota3js)/3).toFixed(2);
