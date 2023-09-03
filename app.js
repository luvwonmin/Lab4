// DOM - document --> html deerh bvh kod
/* console.log(document);
// document, getElementsByTagName () -> tag nereer handah
var h1 = document. getElementsByTagName ('h1')[0];
console.log(h1);
// .innerText = "solih text bichne"-> tag dotorh text solino
h1.innerText="Sain bnu"; */
// .style.styleName = "style utga" --> tag-d style uguh
/* h1.style.color="brown";
var txt = document. getElementsByTagName ('h1')[1];
txt.innerText="Hi";
txt.style.color="blue";
var p = document.getElementsByTagName('p')[0];
console.log(p);
function click2(){
	p.innerText = "Click button daragdlaa";
}
p.style.color="green"; */
var ageInput = document.getElementsByTagName('input')[0];
var birthYear = document.getElementsByTagName('h4')[0];
var currentYear = 2023,myYear;
console.log(ageInput);
console.log(birthYear);
function age(){
	myYear = currentYear - ageInput.value;
	console.log(ageInput.value);
	birthYear.innerText = "Таны төрсөн он: " + myYear;
}