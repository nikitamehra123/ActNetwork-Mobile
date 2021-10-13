
var currentDate = new Date();
currentDate=currentDate.getHours();

    if(currentDate>=0 && currentDate<12){
        document.getElementById("greetings").innerHTML="Good Morning";
    }
    else if(currentDate>=12 && currentDate<19){
        document.getElementById("greetings").innerHTML="Good Afternoon"
    }
    else{
        document.getElementById("greetings").innerHTML="Good Night"
    }
  
var greetContainer=  document.getElementById("greet-container");
 greetContainer.addEventListener("click",hideContent);
function hideContent(){
    document.getElementById("greet-container").style.display="none"
}
setTimeout("hideContent()",10000)


   
 function scrollToContent(self) {
window.scroll({
    top:document.getElementById(self.classList.item(1)).offsetTop,
    behavior:"smooth"
})
if(innerWidth<innerHeight){
    document.getElementById("navbar-left").style.marginRight="-6rem";
}
 }
  function showNavbar() {
      document.getElementById("navbar-left").style.marginRight=0;
   
  }

function keyPress() {
   document.body.style.backgroundColor=document.getElementById('background-change').value
}


