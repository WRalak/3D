const card =document.querySelector(".card");
const container=document.querySelector(".container");


const title = document.querySelector('.title');
const sneaker =document.querySelector('.sneaker img');
const purchase =document.querySelector('.purchase button');
const description =document.querySelector('.info h3');
const sizes =document.querySelector('.sizes');

container.addEventListener("mousemove",(e) => {
    let xAxis = (window.innerWidth /2 - e.pageX);
    let yAxis = (window.innerHeight /2 - e.pageY);
    card.style.transform = 'rotateY(${xAxis}deg) rotateX(${yAxis}deg)';
});
container.addEventListener("mouseenter", (e) =>{
    card.style.transition ="none";

    title.style.transform =" translateZ(150px)";
})
container.addEventListener("mouseleave",(e) =>{
    card.styel.transition ="all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    title.style.transform ="translateZ (0px)";
});