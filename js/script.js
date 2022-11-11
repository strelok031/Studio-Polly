
window.addEventListener('scroll', () => {
   const scrolled = window.scrollY;
   const header = document.querySelector('.header')

   if (scrolled >= 10){
      header.classList.add('scrol');
   }
   else if(scrolled < 10){
      header.classList.remove('scrol');
   }
});


const header__info = document.querySelector('.down');

header__info.addEventListener('click', function(){
   window.scrollTo(0,1282);
});
    