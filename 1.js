const ary = ["A","B","C","D"];

document.write( "current array : " + ary);

let n_ary = ary.splice(2,0,"E","F");
document.write( "<br>New array : " + ary);

let nary = ary.slice(1);
document.write("<br>New array after slice :" +nary);
