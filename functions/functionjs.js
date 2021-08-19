function addnum() {

	var a = document.getElementById('num1');

	var b = document.getElementById('num2');

	console.log(a.value);

	console.log(b.value);

	var sm = parseInt(a.value) + parseInt(b.value);
	console.log("sum is" + sm);

	document.getElementById('ans').innerHTML = sm;
}


function greet() {
	console.log("Hello Gaurav!!!");
}

greet();

function add(a, b) {
	return (a + b);
}

let ans1 = add(14, 4);

console.log(ans1);




//Arrow functions

console.log(a => {
	return 100;
});


(a) => {
	return a + 100;
}

let hi = (a, b) => {
	return a + b;
}

console.log(hi(1, 5));


function ho(a, v) {
	return a + v;
}

console.log(ho(4, 5));


//12 Aug 2021

let arr = [1, 2, 4, 12, 31];

console.log("length of arrray : " + arr.length);
arr.push(90);
console.log("array is : " + arr);

//let temp = arr[4];
//console.log("temp : " + temp);

arr.shift();
console.log("shifted arr : " + arr);

arr.unshift(19);

console.log("unshifted arr :" + arr);

// find index of data
//let idx = arr.indexOf(90);
//console.log("index of 90 :" + idx);

//Splice function on array

let removedItems = arr.splice(2, 2);
console.log("spliced array :" + arr);

console.log("spliced removed Items : " + removedItems);

//Slice function

let copy = arr.slice();
console.log("Slice array or copy : " + copy);


// Callback functions

function greeting(name) {

	console.log("Hello :" + name);
}

function greetour(callback) {

	//let name = prompt("enter namae");
	let name = "gaurav";

	callback(name);
}

greetour(greeting);


//date 

let dt = new Date();
console.log(dt);

console.log(dt.getDay());
console.log(dt.getHours());
console.log(dt.getMinutes());