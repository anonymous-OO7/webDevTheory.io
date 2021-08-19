console.log("classes and objects");

function Gaurav(name) {
    this.name = name;

    this.printName = function () {
        console.log("name is : " + this.name);
    }
}

let obj1 = new Gaurav("gaurav");

console.log(obj1.name);

obj1.printName();

//code to disable button and fill the progress bar

// setInterval(check, 100);

// function check() {

//     let total = 0;
//     let username = document.getElementById("username-input");
//     let email1 = document.getElementById("email-handler-input");
//     let email2 = document.getElementById("server-input");
//     let image = document.getElementById("image-input");
//     let cname = document.getElementById("college-input");
//     let terms = document.getElementById("conditions-input");

//     let probar = document.getElementById("progress-bar-new");


//     let uname = 0;
//     let email = 0;
//     let img = 0;
//     let coll = 0;
//     let tc = 0;

//     if (username.value !== "") {
//         uname = 1;

//     } else {
//         uname = 0;
//     }

//     if (email1.value !== "" && email2.value !== "") {
//         email = 1;
//     } else {
//         email = 0;
//     }

//     if (image.value == undefined) {
//         img = 1;
//     } else {
//         img = 0;
//     }


//     if (cname.value !== "") {
//         coll = 1;
//     } else {
//         coll = 0;
//     }


//     if (terms.checked === true) {
//         tc = 1;
//     } else {
//         tc = 0;
//     }

//     console.log(image.files);
//     console.log("innertext : " + image.innerText);
//     console.log("file value: " + image.value);
//     console.log(uname + " " + email + " " + img + " " + coll + " " + tc);

//     total = uname + email + img + coll + tc;

//     if (total === 5) {
//         document.getElementById("submit-button").disabled = false;
//     } else {
//         document.getElementById("submit-button").disabled = true;

//     }

//     let fin = (total / 5) * 100;
//     console.log(fin);
//     probar.style.width = `${fin}%`

// }

//document.getElementById('progress-bar-new').style.width=(x/6)*100+"%";


//<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="progress-bar-new"> </div>




// class and object practice


var arr = [{
    "test": 1,
    "test1": 12,
    "test12": 13
}, {
    "test": 1,
    "test1": 12,
    "test12": 13
}];


var l1 = arr.length;
console.log(l1);

for (var i = 0; i < l1; i++) {

    var temp = arr[i];
    console.log(temp);
    // var l = temp.length;
    //console.log(temp[0]);

    console.log(this.test + " " + this.test1 + " " + this.test12);
}




//promises

let promise = new Promise(function (resolve, reject) {

    var pr1 = 10;
    var pr2 = 10;

    if (pr1 === pr2) {
        resolve("Successfully executed");
    } else {
        reject();
    }
});


promise.then(
    function (message) {
        console.log(message + " Promise learnt");
    },
    function (error) {
        console.log("Error Occured");
    }

);




function greet(name) {
    console.log("heyy " + name);
}

function mygreet(callback) {

    var name1 = "gaurav";

    callback(name1);
}

mygreet(greet);