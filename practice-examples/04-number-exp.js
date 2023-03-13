// let a = prompt("what's your age?")
// // console.log(typeof a)
// a = Number.parseInt(a)

// if(a>0){
//     alert("This is valid age")
// }else{
//     alert("This is not valid age")
// }



// let age = prompt("what's your age?")

// if (age <= 0) {
//     alert("This is not valid age")
// }
// else if (age >= 1 && age <= 15) {
//     alert("Kid")
// }
// else if (age >= 16 && age <= 25) {
//     alert("Young")
// }
// else if (age >= 26 && age < 75) {
//     alert("Adult")
// }
// else {
//     alert("Aged")
// }


// const expr = 'papayas'

// switch (expr) {

//     case 'banana':
//         console.log('papayas')
//         break

//     case 'oranges':
//         console.log('papayas')
//         break

//     case 'mangoes':
//         console.log('papayas')
//         break
         
//     case 'papayas':
//         console.log('papayas')
//         break

//     default:
//         console.log('Sorry !! we are out of ${expr}')
// }


let day_no = prompt("Enter day-no");
day_no = Number.parseInt(day_no);

switch(day_no){

    case 1:
        alert('Monday')
        break;
    
    case 2:
        alert('Tuesday')
        break;

    case 3:
        alert('Wednesday')
        break;    

    case 4:
        alert('Thursday')
        break;

    case 5:
        alert('Friday')
        break;

    case 6:
        alert('Saturday')
        break;

    case 7:
        alert('Sunday')
        break;

    default:
        alert('Weekoff')

}