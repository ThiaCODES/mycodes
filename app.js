//alert('Hello world')
/*console.log('hello')
console.table({name:'fat', sex: 2})
console.error('its dangerous')
console.warn(stop)
console.log(2,3,4,5)
console.time('ola')
console.table({name:'fat', sex: 2})
console.error('its dangerous')
console.warn(stop)
console.log(2,3,4,5)
console.timeEnd('ola')
console.clear()
console.info('i love you')
let arr=[ 1,2,3,4,5,6]
 let bim= arr.slice(-5);
 alert(bim)
 console.log ('hello world')
 let z = "fahhy";
 console.log (z);
 console.log(typeof z)
 console.log(z.length)*/
 let car = 23;
   
 console.log(car);
 console.log(car.toFixed() )
 console.log(typeof car)
 console.log(car.length)
 let bee = String([1,2,3])
 console.log(bee.length)
 console.log(typeof bee)
 let book = Number("ola");
console.log(typeof book)
let bi= parseInt('100.60');
console.log(bi);
let head = String (4);
let eye = 3;
let body = head + eye
console. log(body);
//console.log(body.toFixed (4))
console.log(typeof head)
console.log(eye.toFixed(1))

//concatenation string
let m= "i don't know";
let y = "you";
let w = m + " both of "+ y
console.log(w);
console. log(Array.isArray(w))
console. log(typeof w)
console.log(w.length)
//two
/*
const name = "fathiat";
const school = "uniosun";
const age = 22
const course = "physiology";
const skill = "web developer";
function na() {
    return "hello";
}
 var html;
 html = `<ul>
    <li>Name : ${name}</li>
    <li>School:${school}</li>
    <li> Age: ${age}</li>
    <li> Course:${course}</li>
    <li> Skill: ${skill}</li>
    <li> ${age > 30 ? 'matured' : 'young'} </li>
    <li> ${na()}</li>
 </ul>`
document.body.innerHTML = html
//findig index of a value
const mixed = ['hello', 23, 6,76, {name:"bola", age: 2}, [2,5,6,7]];
but = mixed.indexOf(76)
let zee =[2, 1, 12, 47,56,4,5]
//Array mutation
//Add method --push
mixed.push({name: undefined, school:"uniosun"})
//remove last element method, pop
mixed.pop()
//remove first element shift
mixed.shift()
// add and displace the first element, unshift
mixed. unshift(90)
// remove from point a to b
mixed.splice(4,5);
//return a reverse value
mixed.reverse()
// concat arrays join
val = mixed. concat(zee)
//sorting method using 

function to sort out perfectly
zee.sort(function (x,y,) {
    return x-y
})
console.log(but)
//console.log(mixed[4].name)
console.log(mixed)
console.log(val)
console.log(zee)

//date and time 
let today;
day = new Date()
today= day. getMonth()
today= day.getHours()
today = day.getMilliseconds()
today= day.getMinutes()
today = day.getDay()
today = day.getDate()
today= day.setFullYear(2002)

console.log(day);*/

let be;
be = 30
if(be===100){
    console.log("correct");
    document.body.innerHTML= "correct"
}else{
    console.log ("incorrect");
    document.body.innerHTML= `This is incorrect`
}
if (be < 18 && be > 60){
    console.log ('not qualify')
} else if ( be < 5) {
    console.log('now')
}else{
    console.log("before")
}
let colour = 'red';
switch (colour) {
    case "red":
    console.log('colour is red')
        break;
    case "blue":
     console.log('colour is blue')
            break;
    
    default:
        break;
}
let day;
switch(new Date(). getDay()){
    case 0: 
    day= "sunday";
    break;
    case 1: 
    day= "monday";
    break;
    case 2: 
    day= "tuesday";
    break;
    case 3: 
    day= "wednesday";
    break;
    case 4: 
    day= "thursday";
    break;
    case 5: 
    day= "friday";
    break;
    case 6: 
    day= "saturday";
    break;
    default: "No day"
break;
}
document.body.innerHTML= ` Today's date is ${day}`;
console.log(day);


//function statement, a block of declaration
function value (a,b){
    return a-b;
    
}
console.log(value(2,5));

function calc (hello){
hello = 5
//console.log(typeof hello)
if (typeof hello === Number) {
    console.log('is true')
}else{
    console.log("wrong");
}
}
calc()
//immediately invoked function expression (iife)
/*let object= (function (hello) {
     hello = "Hi"
    return`${hello} ma`
})
console.log (object())

let ob = {
    ola: function (a,b) {
        return a % b
    }
}
console.log (ob.ola(11,10))




let obe = { ike : function (he) {
    return 'ola'
}}
console.log(obe.ike())
*/


//loops for loops
const names = ['faizah', 'fathiat', 'faridah', 'faruq', 'idayat', 'kazeem']
/*for (i =0; i < names.length; i++) {
    console.log( `${i} ${names[i]}`)
}*/

//using for each method
/*names.forEach(function(name,index,array){
    console.log(`${index} ${name}`)
        console.log (`${array}`)

}
)*/
//using map method
let ink = [
    {id: 3, be : 2},
    {id: 35, be : 20},
    {id: 30, be : 29}
]
const c = ink.map(function (biro){
return biro.id
})
console.log(c)
