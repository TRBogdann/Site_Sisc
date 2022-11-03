
let menu=document.querySelector(".menu");
document.getElementById("mySidebar").style.color="transparent";

function openNav() {
    document.getElementById("mySidebar").style.width = "25rem";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
 
  } 

  const box=document.querySelector(".cinfo");
const image=document.querySelector(".cpoza");
const nume=document.querySelector(".cnume");
const email=document.querySelector(".cemail");
const telefon=document.querySelector(".ctel");
const content=document.querySelector(".cinfotext");
const input=document.querySelectorAll("input");

function update(person)
{
 image.src=person.image;
 nume.innerHTML=person.nume;
 email.innerHTML=person.email;
 telefon.innerHTML=person.telefon;
 content.innerHTML=person.content;
}

let index=1;
let pressed=false;

let text1= "Informatii despre completarea formularului de inscriere si despre programul de desfasurare al activitatilor";
let text2= "Raportarea problemelor ce apar la completarea formularului";
let text3= "Informatii legate de organizarea petrecerii si despre regulile pe care participantii trebuie sa le respecte ";

let p1=
{
    nume:"Bogdan",
    image:"/public/media/me.jpg",
    content:text1,
    telefon:"Telefon: 0773955175",
    email:"E-mail: tr.bogdan50@gmail.com"
}

let p2=
{
  nume:"Andrei",
  image:"/public/media/andrei.jpeg",
  content:text2,
  telefon:"Telefon: 0725475319",
  email:"E-mail: Andrewforreal21@gmail.com"
}

let p3=
{
  nume:"Diana",
  image:"/public/media/diana.jpg",
  content:text3,
  telefon:"Telefon: 0727837923",
  email:"E-mail: dianastancu393@gmail.com"
}

function reset()
{
    for(let i=0;i<input.length();i++)
    {
       input[i].value="";
    }
   
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function left()
{
if(!pressed){
pressed=true;

box.classList.add("animated");

if(index==1)index=3;
else index--;

if(index==1)update(p1);
if(index==2)update(p2);
if(index==3)update(p3);

await sleep(1200);
box.classList.remove("animated");

pressed=false;
}

}

async function right()
{
if(!pressed){
pressed=true;

box.classList.add("animated");

if(index==3)index=1;
else index++;

if(index==1)update(p1);
if(index==2)update(p2);
if(index==3)update(p3);

await sleep(1200);
box.classList.remove("animated");

pressed=false;
    }
}