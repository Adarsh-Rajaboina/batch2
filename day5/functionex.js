// without parameter
// function demo(){
//     console.log("function is working...");
// }
// demo();

// with parameter
// let a = 10; a= parameter,10=argument

// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a);
//     console.log(b);
// }
// add(5,6);
// add(8,9);
// add(3,4);
// named function
// function text(){
//     console.log("Hello World... is exectued");
// }
// text();

// anonymous function
// function(){

// }
// ();
// function expression
// let b=10;
// let a= function (){
//     console.log("anonymous is not executing....");
// }
// // console.log(x);
// ();

// IIFE
// (
//     function (){
//         console.log("IIFE is not executing....");
//     }
// )()

//  ! arrow function
// function demo(){

// }
// demo();

// let x = a => console.log(a);
// x(9);

//  | implicit returns and explicit returns.

// function test1(a,b){
//     return a+b;
//     console.log("implicit.....");
    
// }
// console.log(test1(6,3));

// // let x= (a,b)=> {return a+b;};
// // console.log(x(5,5));

// // let y = (a,b) => a+b;
// // console.log(y(7,7));
// function hof(a){ //higher order function
//     return a();
// }
// let x = hof(function(){return "callback function"}); //callback function
// console.log(x);

// let users = ["a", "b", "c", "d"];
// console.log(users);
// users.map((users)=>{
//     console.log(users);
// })

var a=10;
let b=45;
function x(){
    var user = "sai";
    let company = "Amazon";
    const salary = 450000;
    console.log(user);
    console.log(company);
    console.log(salary);
    console.log(a,b);
}
x();













