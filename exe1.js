// exe1 : guess the number
/*
let a = Math.floor((Math.random() * 100) + 1)
let chances = 0

for (; ;) {
    let num = prompt("enter number:")

    if (num == a) {
        console.log("you have guessed right")
        break
    }
    else if (num > a) {
        chances++;
        console.log("enter number is greater than actual number")
        continue
    }
    else if (num < a) {
        chances++;
        console.log("enter number is smaller than actual number")
        continue
    }
}
console.log("your score is : " + (100 - chances) + " and the number is : " + a)
*/
