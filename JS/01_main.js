
// alert("Hello from Java Script!!")
// document.getElementById("message").innerHTML="This is from javaSricpt!";

// function greet(){
//     document.getElementById('message').innerHTML="Happy Ganesh Chaturti!!"
// }


//  a = 10;
//  b = 20;
//  c = a+b;
// // alert(c);
// document.getElementById("message").innerHTML = "Addition of  " + a + " and " +b+ " is " + c;

// var x =10;

// console.log("value of x = "+x);
// {
//     var x = 20;
//     console.log("value of x = "+x);
// }

// console.log("value of x = "+x);

// var x =10;
// let y = 10;
// console.log("value of x = "+x);
// console.log("value of y = "+y);
// {
//     var x = 20;
//     let y = 20;
//     console.log("value of x = "+x);
//     console.log("value of y = "+y);
// }

// console.log("value of x = "+x);
// console.log("value of y = "+y);





// function Plus(){
//     let Number1 = parseInt( document.getElementById("num1").value);
//     let Number2 = parseInt(document.getElementById("num2").value);
//     let add =parseInt(Number1+ Number2);
//     document.getElementById("message").innerHTML = "sum " + add;
// }

// function Sub(){
//     let Number1 = parseInt(document.getElementById("num1").value);
//     let Number2 = parseInt( document.getElementById("num2").value);
//     document.getElementById("message").innerHTML = "Difference " + parseInt(Number1 - Number2);
// }
// function Product(){
//     let Number1 = parseInt(document.getElementById("num1").value);
//     let Number2 = document.getElementById("num2").value;
//     document.getElementById("message").innerHTML = "Product " + parseInt(Number1 * Number2);
// }
// function Div(){
//     let Number1 = parseInt(document.getElementById("num1").value);
//     let Number2 = parseInt(document.getElementById("num2").value);   
//     document.getElementById("message").innerHTML = "Divivsion" + parseInt(Number1 / Number2);
// }


// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// document.getElementById('message').innerHTML = cars;


// var date = new Date();
// document.getElementById('fulldate').innerHTML = date;

// // document.getElementById('month').innerHTML = date.getMonth() + 1;
// switch (date.getMonth() + 1) {
//     case 1:
//         document.getElementById('month').innerHTML = 'January';
//         break;
//     case 2:
//         document.getElementById('month').innerHTML = 'Feb';
//         break;
//     case 3:
//         document.getElementById('month').innerHTML = 'March';
//         break;

//     case 4:
//         document.getElementById('month').innerHTML = 'April';
//         break;
//     case 5:
//         document.getElementById('month').innerHTML = 'May';
//         break;
//     case 6:
//         document.getElementById('month').innerHTML = 'June';
//         break;
//     case 7:
//         document.getElementById('month').innerHTML = 'July';
//         break;
//     case 8:
//         document.getElementById('month').innerHTML = 'August';
//         break;
//     case 9:
//         document.getElementById('month').innerHTML = 'Sept';
//         break;


//     default:
//         break;
// }
// // document.getElementById('day').innerHTML = date.getDate();
// switch (date.getDay()) {
//     case 1:
//         document.getElementById('day').innerHTML = 'Monday';
//         break;
//     case 2:
//         document.getElementById('day').innerHTML = 'Tuesday';
//         break;
//     case 3:
//         document.getElementById('day').innerHTML = 'Wed';
//         break;
//     case 1:
//         document.getElementById('day').innerHTML = 'Thursday';
//         break;
//     case 4:
//         document.getElementById('day').innerHTML = 'Friday';
//         break;
//     case 5:
//         document.getElementById('day').innerHTML = 'Saturday';
//         break;
//     case 6:
//         document.getElementById('day').innerHTML = 'Sunday';
//         break;


//     default:
//         break;
// }



// document.getElementById('year').innerHTML = date.getFullYear();
// document.getElementById('hours').innerHTML = date.getHours();
// document.getElementById('mintues').innerHTML = date.getMinutes();
// document.getElementById('seconds').innerHTML = date.getSeconds();



// let text = '';
// for (let i = 0; i<10 ; i++){
//     text = text +"Number is " + i +"<br>";
// }
// document.getElementById('message').innerHTML = text;



// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let text = "";
// let length = cars.length
// for(let i = 0; i<length ; i++){
//     text = text +"cars is " + Cars[i] +"<br>";
// }
// document.getElementById('message').innerHTML = text;


// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let  text = "";
// for (let i in cars)
// {
//     text = text + "car is "+ cars[i]+"<br>";

// }
// document.getElementById("message").innerHTML = text;




// const cars = ['Getz Prime' , 'Honda Amaze' , 'i20' , 'Breeza'];
// let text = "";
// for(let car of cars){
//     text = text + "car is " +car + "<br>"
// }
// document.getElementById("message").innerHTML = text;

// form validation


function validate(){
    alert("validate() is called");

    if(document.userDetails.username.value == ""){
        alert("Please provide user name!");
        document.userDetails.username.focus();
        return false;
    }
    if(document.userDetails.email.value == ""){
        alert("Please provide email!");
        document.userDetails.email.focus();
        return false;
    }

    if(document.userDetails.zipcode.value == ""){
        alert("Please provide zipcode!");
        document.userDetails.zipcode.focus();
        return false;
    }
    if(document.userDetails.country.value == -1){
        alert("PleaseSelect your country");
        document.userDetails.country.focus();
        return false;
    }



    return false;
}