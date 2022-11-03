
let menu=document.querySelector(".menu");
document.getElementById("mySidebar").style.color="transparent";

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 

const form=document.querySelector(".bookingform");

form.addEventListener("submit",(e)=>
{
  e.preventDefault();
  const request = new XMLHttpRequest();
  request.open("POST",'../server/Cod.js');
  request.onload=function ()
  {
    console.log(request.responseText);
  }
  request.send(new FormData(form));
}
)

