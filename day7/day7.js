//closue is memory created when functions bundled together/functions nested each other
//it allows to access outer function scope from inner function scope
function x(){
    let a =10
    var b = 20
    console.log(a, b);
    function y (){
        let o = "jc";
        var t = " bob";
        console.log(o, t);
        function u(){
            let q =49;
            var m = " mani";
            console.log(q, m);
            console.log(m);
            console.log(b);
            console.log(t);
        }
        u();
    }
    y();

}
x();



//Arrays
//Array is collection of elements
//Array is object in javascript

// //map and forEach
// let userrs = ["sachin", "rajat", "mohit", "arjun"]
// // console.log(userrs);
// let u = userrs.map(item => (item))
// console.log(u); // ["sachin", "rajat", "mohit", "arjun"] because map returns new array

// let y = userrs.forEach((item) => {
//     return item
// })
// console.log(y); //undefined because forEach does not return anything


//push,pop,shift,unshift,reverse,sort,splice,slice,join,filter

let users = ["sachin", "rajat", "mohit", "arjun"]
console.log(users);
users.push("rohit") //add element at last    
console.log(users);
users.pop() //remove element from last
console.log(users);
users.shift() //remove element from first
console.log(users);
users.unshift("rohit") //add element at first
console.log(users);
users.reverse() //reverse the array
console.log(users);
console.log("-----");

users.splice(1, 0, "rohit") //add element at specific index
console.log(users);
users.splice(1, 1) //remove element at specific index
console.log(users);
let u = users.slice(1, 3) //slice the array
console.log(u);
let v = users.join(" ") //join the array
console.log(v);
let w = users.filter(item => item === "mohit") //filter the array
console.log(w);