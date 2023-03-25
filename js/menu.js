const mimenu = document.querySelector('.mimenu');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(mimenu)

mimenu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

