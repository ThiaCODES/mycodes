const heading= document.getElementById("heading")
let today = new Date()
let time = today.getHours()
console.log(new Date ())

let greeting;
if(time < 12) {
    greeting ="Good morning"
    heading.innerHTML= greeting;
}
 else if (time < 18) {
    greeting= "Good afternoon"
    heading.innerHTML= greeting;
} 
else {
    greeting= "Good evening"
    heading.innerHTML= greeting;
}
let day;
switch(new Date() . getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday"
        break;
    case 2 :
        day= "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4 :
        day= "Thursday";
        break;
    case 5:
        day = "Friday"
        break;
    case 6 :
        day= "Saturday";
        break;
    default:
        day= " What is today's date"
}
heading.innerHTML= `Today is ${day}`;
