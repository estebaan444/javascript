var s = "Hoy es dia 31 y mañana dia 1";
var num = s.replace(/[^0-9]/ig,"");

var n =0;
for(i=0;i<num.length;i++){
    n+=Number(num.charAt(i));
}

console.log(n);

