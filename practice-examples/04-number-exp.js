// let a = prompt("what's your age?")
// // console.log(typeof a)
// a = Number.parseInt(a)

// if(a>0){
//     alert("This is valid age")
// }else{
//     alert("This is not valid age")
// }



let age = prompt("what's your age?")

if (age <= 0) {
    alert("This is not valid age")
}
else if (age >= 1 && age <= 15) {
    alert("Kid")
}
else if (age >= 16 && age <= 25) {
    alert("Young")
}
else if (age >= 26 && age < 75) {
    alert("Adult")
}
else {
    alert("Aged")
}