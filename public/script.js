const btnMenu = document.querySelector('.btnMenu');
const btnExit = document.querySelector('.btnExit');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link-content');

console.log(menuLink);

btnMenu.addEventListener('click', ()=> {
  menu.style.display = 'block';
  btnMenu.style.display = 'none';
  btnExit.style.display = 'block';
});

btnExit.addEventListener('click', ()=> {
  menu.style.display = 'none';
  btnMenu.style.display = 'block';
  btnExit.style.display = 'none';
});

menuLink.forEach((l)=>{
  l.addEventListener('click', ()=>{
    menu.style.display = 'none';
    btnMenu.style.display = 'block';
    btnExit.style.display = 'none';
  });
});