console.log('newjsss');
var nameMy = 'gaurav';
console.log(nameMy);
var channel = 'pappa';
console.log(channel);

const c = 'const variable';
console.log(c);
let p = 'value of p';
console.log(p);

let p1 = 3;
console.log(p1);

console.log(2 * 9);

let a = 24;
let b = '24';

console.log(a == b);

let arr = [6, 27, 33, 477, 5, 246, 410];
console.log(arr);
for (let i in arr) {
	console.log(i);
}
a = 29;
b = '2421';

console.log(a + parseInt(b));

b = '122v5g';
b = parseInt(b);

console.log(b);
a = 2;
b = 2;
console.log(a ** b);

let a1 = {
	"age": 20,
	"name": "gaurav",
	"class": 10
}


for (i in a1) {
	console.log(a1[i]);
}



function multiply(value) {

	value = 10 + value;
}

//arr.forEach(multiply(10));







let gstr1 = "abcde";

let gstr2 = "bcade";

len =26;

//let l1 = a1.length;

//let l2 = a2.length;
var str1 = gstr1.split('').sort().join(''); 
var str2 = gstr2.split('').sort().join('');

if(str1 === str2)
{
	console.log("IS ANAGRAM:"+ true);
}else{
	console,log("NOT A ANAGRAM" + false);
}









function check(){
	let gstr1 = document.getElementById("st1");

let gstr2 = document.getElementById("st2");

 let x1 = gstr1.value;
 let x2 = gstr2.value;

len =26;

//let l1 = a1.length;

//let l2 = a2.length;


var str1 = x1.split('').sort().join(''); 
var str2 = x2.split('').sort().join('');

let as = document.getElementById("answer");



if(str1 === str2)
{	as.innerHTML = "true"
	console.log("IS  from htmlANAGRAM:"+ true);
}else{	
	as.innerHTML = "false";
	console.log("NOT A ANAGRAM  from html" + false);
}

}





//DOM PRACTICE  

let dom1 = document.getElementById('dom1');
console.log(dom1);
console.log(typeof(dom1));

dom1.style.color= 'red';

let sel1 = document.querySelector('.dom');
console.log(sel1);

sel1.style.background = 'grey';

let sel2 = document.querySelector('#dom1');

console.log(sel2.children);

let sel3 = document.querySelectorAll(".d1");
console.log(sel3);

let sel4  = document.getElementsByTagName('h1');
console.log(sel4);



