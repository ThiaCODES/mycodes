function array() {
    let arr=[{name:"ola",
    isMarried:true,
     age:45,
        },
        {},
        "bola",
         ]
        return arr;
    }
    array();
    console.log(array())
    //function with parameters
    function ame(a, b,c) {
        return a*b/c;
    }
    console.log(ame(2,4,5))
function product(a,b) {
    return a*b
}
console.log(product(4,5))

function LowerCase(string) {
    return string.toLowerCase();
}
console.log(LowerCase("BOLA"))
//july 12 2024
function name() {
    let name=["akin","tife","ike"];
    name.push("ola");
    console.log(name)
    name.pop()
   console.log(name);
    name.shift()
    console.log(name)
    name.unshift({name: "bola"}, {beauty: Boolean(true)})
    console.log(name)
    let nam=["akin","tife","ike"];
    let sum=["merlin","kenny","yashodra"];
    let p= nam.concat(sum)
    console.log(p)
}
name()
//july 16 High order function
let numbers=[ 2,3,4,5];
const returnArray =()=> {
    return numbers;
}
console.log(returnArray());


let number=[1,2,3,4,5];
const double = number.map((num) => {
   return num*2;
})
console.log(double) 

let ray=[ 1,2,3,4,5,7,8,];
const filtered= ray.filter((num)=>{
    return num %2===0;
})
console.log(filtered);

let ar=[ 1,2,3,4,5,7,8,];
const reduced= ar.reduce((sum, current)=> sum + current,0)
console.log(reduced);

//july17
const heading= document.getElementById("headings");
let today = newDate();
let time = today.getHours()
console.log(time)






