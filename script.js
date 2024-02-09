
function love(){
var x= document.getElementById("x").value;
var y= document.getElementById("y").value;

alert("Calculating the love thats between " + x + " and " + y  );

if(x=="Prabesh" && y=="Muskan"){
 alert("Sorry to say but.. ");
 alert("It's a 100% love-match between " + x + " and Muskan.");
 alert("Your love is spread across heaven. Don't let your counterpart slip away");
 alert("Chase her and marry her.");
}
else if(x== "" || y=="" ){
    alert("Arey! Arey! Naam toh likhle");
}
else{
   var a= Math.ceil( Math.random() * 100 );
  alert("The love that exists between " +x +" and "+ y + " is "+ a +"%.");
   if(a>=80){
   alert("Jao propose maardo");
  }
  else if (a <80 && a>=60 ) {
 alert("Efforts lagao, kuchh toh pakka hoga");
  } 
  else if (a <60 && a>=40 ) {
 alert("Chance kam hai, par hai, So aage badoh");
  } 
  else{
 alert("Sorry bhai, tumhari level se bahot bahar hai");
     }

}
};

