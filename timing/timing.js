setTimeout(timer1, 3000);

function timer1() {

	let target = document.getElementById("demo1a");

	target.style.color = 'red';
}


let starting = 10;
let time = starting * 60;

let clk = document.getElementById("clock");

setInterval(watch, 1000);

function watch() {

	const minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	clk.innerHTML = `
				${minutes}:${seconds}

			`
	time--;
}


// function runTimer() {
// 	console.log("inside runtimer--");

// 	setTimeout(timeSet, 3000);

// 	function timeSet() {

// 		var el = document.getElementById("sett");

// 		el.style.backgroundColor = "brown";

// 		console.log("last in timeset");

// 	}

// 	console.log("out of timeset---");

// }



function runTimer() {
	console.log("inside runtimer--");

	var timer = setInterval(timeSet, 3000);

	var flag = 0;

	function timeSet() {

		var el = document.getElementById("sett");

		if (flag == 0) {
			el.style.backgroundColor = "brown";
			flag = 1;
			console.log("last in timeset");
		} else {
			el.style.backgroundColor = "cyan";
			flag = 0;
			console.log("last in timeset else");
		}

	}

	console.log("out of timeset---");

}


// for (var i = 0; i < 10; i++) {

// }

// console.log(i);

// var x = 3;
// var y = "3";
// console.log(x - y);


// const a = 5;
// if (a == 5) {
// 	const a = 20;
// 	console.log(a);
// }

// console.log(a);



// (function () {
// 	var a = b = 30;

// })();

// console.log(b);

let a = new String("abc");
//let b = new Object("abc");
let b = "abc";

if (a == b) {
	console.log("yes");
} else {
	console.log("no");
}

console.log(a);
console.log(b);