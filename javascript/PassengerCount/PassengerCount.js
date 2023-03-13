let countt =0;
function count()
{    
    countt+=1;
    document.getElementById("click").innerHTML=countt;
}
function save()
{
    let countstr = countt + " - ";
    document.getElementById("save").innerHTML += countstr;
    countt=0;
    document.getElementById("click").innerHTML=countt;
}