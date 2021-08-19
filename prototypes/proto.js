console.log("hello Proto");

class Mobile {
	constructor() {
		this.name = 'samsung';
		this.show = function () {
			return "instance member";
		};
	}
	display() {
		return "prototype member";
	}

}

//console.log("Mobile Prototype:" + Mobile.prototype);

console.log(Mobile.prototype);
console.log(Object.prototype);

var samsung = new Mobile();

console.log(samsung);

console.log("name : " + samsung.name);
console.log("show : " + samsung.show());
console.log("prototype : " + samsung.display());

console.log(typeof (Mobile));
class Person {
	constructor(first, last, age, eye) {
		this.firstname = first;
		this.lastname = last;
		this.age = age;
		this.eye = eye;
	}
	getDetails() {
		console.log(this.firstname + " " + this.lastname);
	}


}
var p1 = new Person('gaurav', 'yadav', 22, 'blue');

console.log(p1);




//function borrowing

var name1 = {
	firstname: "gaurav",
	lastname: "yadav",
}
let printfullName = function () {
	console.log(this.firstname + " " + this.lastname);
}


printfullName.call(name1);




console.log("Prototypes start");

var arr = [1, 2, 3, 4, 6, 7];

console.log(typeof (arr));
console.log(arr);
let a = arr.__proto__;
console.log(a);



console.log(Object.prototype);
console.log(Object.__proto__.__proto__.__proto__);
console.log(Array.prototype);







//proto assignment

Array.prototype.includesOneOf = function (list) {

	for (let i = 0; i < this.length; i++) {
		if (this.length === 0) {
			return false;
		}

		if (list.length === 0) {
			return false;
		}


		if (Array.isArray(this[0]) && Array.isArray(list[0])) {

			for (let j = 0; j < list.length; j++) {
				let x = this[i];
				let y = list[j];

				//console.log("x :" +x);
				//console.log("y: "+y);

				if (x.length === y.length && x.every(function (value, index) {
						return value === y[index];
					})) {
					//console.log("inlist true");
					return true;
				}

			}
			//console.log("in list false");
			//return false;
		} else if ((list[0].constructor === Object) && (this[0].constructor === Object)) {

			for (let j = 0; j < Object.keys(list).length; j++) {
				let x = this[i];
				let y = list[j];

				if (Object.keys(x).length === Object.keys(y).length &&
					Object.entries(x).every(function (value) {
						return value[1] == y[value[0]]
					})
				) {
					//	console.log("in object treu\\");
					return true;
				}
			}

		} else if (list[0].constructor === Number && this[0].constructor === Number) {


			for (let j = 0; j < list.length; j++) {

				let x = this[i];
				let y = list[j];
				if (x === y) {
					return true;
				}
			}
		} else if (list[0].constructor === String && this[0].constructor === String) {

			for (let j = 0; j < list.length; j++) {
				let x = this[i];
				let y = list[j];

				if (x === y) {
					return true;
				}
			}

		}

	}
	return false;
}


//let arr1 = [1,2,3,4,5,6];
console.log("here");
//arr1.includesOneOf([2]);


//let arr2 = [[1,2],[3,4],[5,6]];

//arr2.includesOneOf([[2,3]]);
//arr2.includesOneOf([[5,6]]);

var a4 = [5];
console.log(a4[0].constructor);

//var arr3 = [1,2,3,4,5,6];
//arr3.includesOneOf([4]);

let obj1 = [{
	name1: "newton",
	roll: 24
}, {
	name2: "gaurav",
	roll: 23
}];
console.log(obj1);

//questions


function test() {
	return {
		see: "hello"
	};
}


console.log(test());