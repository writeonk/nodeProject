// PS - Chp 5 [array]

//que1
/*
let n = prompt("enter length of array")
let ary = [n]
for(let i=0;i<n;i++)
{
    ary[i] = prompt("enter value in array")
}
for(let j=0;j<n;j++)
{
    ary[j] = Number.parseInt(ary[j])
    console.log(ary[j])
    console.log(typeof ary[j])
}
let arr = [1,2,3,4,5]
let a = prompt("enter a number")
a = parseInt(a)
arr.push(a)
console.log(arr)
console.log(typeof arr)
*/

//array sort method
/*
let arr=[11,155,9,3,0,5,-5]
console.log(arr.sort())     //sort alphabettical order
let compare1 = (a,b) =>{
    return a-b            //sort assending order
} 

let compare2 = (a,b) =>{
    return b-a            //sort desendinf order
}
console.log(arr.sort(compare1))
console.log(arr.sort(compare2))
*/

//array map method
/*
let arr = [1,2,3]
let a = arr.map((value,index,array) => {
  console.log(value,index,array)
  return i+j
})
console.log(a)
*/

//array filter method
/*
let arr=[11,12,15,1,5,6]
let a = arr.filter((value) =>{
    return value>10
})
console.log(a)
*/

//array reduce method
/*
let arr=[1,3,4,5,4,6]
let add=(a1,a2) => {
    return a1+a2
}
let a = arr.reduce(add)
console.log(a)
*/









