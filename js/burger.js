
const burger = document.querySelector('.burger')
const burger__menu = document.querySelector('.burger__menu');
const body = document.querySelector('.body');

burger.addEventListener('click', function(){
   burger.classList.toggle('active');
   burger__menu.classList.toggle('active');
   burger__menu.classList.toggle('none');
   body.classList.toggle('lock');
});

  