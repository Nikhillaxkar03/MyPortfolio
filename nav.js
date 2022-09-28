const menu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");


menu.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector("#overlay").classList.toggle("active");
})

const listItems = document.querySelectorAll(".nav-items li a");

listItems.forEach(element=> {
element.addEventListener("click", ()=>{
    menu.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector("#overlay").classList.remove("active");
})
});

