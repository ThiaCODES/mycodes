const heading = document.getElementById('heading');
let dated = new Date()
let time = dated.getHours;
console.log(new Date())

let greetings;
if (time < 12) {
    greeting = "Good Morning";
    heading. innerHTML = greetings
}
else if (time > 18) {
    greeting = "Good Evening";
    heading. innerHTML = greetings
}
else {
    greetings = "Good Afternoon";
    heading. innerHTML = greetings;
}
let month;
switch (new Date (). getMonth() ) {
    case 0:
        month = "january"
        break;
    case 1:
            month = "february"
            break;
    case 2:
        month = "march"
        break;
    case 3:
        month = "april"
        break;
    case 4:
        month = "may"
        break;
    case 5:
        month = "june"
        break;
    case 6:
        month = "july"
        break;
    case 7:
        month = "august"
        break;
    case 8:
        month = "september"
        break;
    case 9:
        month = "october"
        break;
    case 10:
        month = " november"
        break;
    case 11:
        month = "december"
        break;
    default:
        month = "i dont know "
        break;
}
heading.innerHTML = `This is ${month}`

let car;
car = [
    "honda",
    "ferrari",
    "lambogini",
    "honda",
    "range rover"
];
let revCar = "";
for (let i = 0; i < car.length; i++) {
    const element = car[i];
    revCar += element 
    console.log (revCar)
}

