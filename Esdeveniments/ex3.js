document.onkeydown=function(r){
    document.getElementById("letra").innerHTML=r.key;
}

document.onkeyup=function(r){
    document.getElementById("letra").innerHTML=" ";
}
