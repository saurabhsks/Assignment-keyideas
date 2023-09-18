prompt("what is your name");
prompt("what is their name");
var Lovescore=Math.random()*100;
Lovescore=Math.floor(Lovescore)+1;
if(Lovescore>70){
  alert("Your love score is "+Lovescore+"%" +" Your love is the best");
}
if(Lovescore>30 && Lovescore<=70){
  alert("Your love score is "+Lovescore+"%");
}
if(Lovescore<=30){
   alert("Your love score is "+Lovescore+"%"+" You go together like oil & Water");
}
