$(document).ready(function(){

// menu

  const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
     links = document.querySelectorAll('.menu__link'),
      over = document.querySelector('.overlay'),
      first = document.querySelector('.line_first'),
      second = document.querySelector('.line_second'),
      third = document.querySelector('.line_third');

  hamburger.addEventListener('click', () => {
    over.classList.toggle('overlay_active'),
    hamburger.classList.toggle('hamburger_active'),
    menu.classList.toggle('menu_active'),
    first.classList.toggle('top'),
    second.classList.toggle('off'),
    third.classList.toggle('bottom');
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => { 
    over.classList.remove('overlay_active'),
    menu.classList.remove('menu_active'),
    hamburger.classList.remove('hamburger_active'),
    first.classList.remove('top'),
    second.classList.remove('off'),
    third.classList.remove('bottom');
    })
  })

// modals

  const overlay = document.querySelector('.overlay'); 
  const formButtons = document.querySelectorAll('.form__button');
  const successButton = document.querySelector('.main__button');
  const form = document.querySelector('.modal__form');
  const success = document.querySelector('.modal__succesfull'); 
  const closeButtons = document.querySelectorAll('.modal__close');
  const inputs = document.querySelectorAll('input');  

  successButton.addEventListener('click', (e) => { 
    e.preventDefault(); 
    overlay.classList.add('overlay_active');
    form.classList.add('modal__form_active');
    success.classList.remove('modal__succesfull_active');
     
  })

  formButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
    overlay.classList.add('overlay_active'); 
    form.classList.remove('modal__form_active');
    success.classList.add('modal__succesfull_active');
    })
  })

  closeButtons.forEach((close) =>{
    close.addEventListener('click', (e) => { 
    e.preventDefault(); 
    overlay.classList.remove('overlay_active'); 
    form.classList.remove('modal__form_active');
    success.classList.remove('modal__succesfull_active');
    })
  })
  

// slider

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false, 
    prevArrow: '<button type="button" class="slick-prev"><img class="prev" src="icons/arrow-left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="next" src="icons/arrow-right.svg"></img></button>',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          dots: true
        }
      }]
  });

  // mailer

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
       type:"POST",
       url: "mailer/smart.php",
       data: $(this).serialize()
    }).done(function(){
       $(this).find("input").val("");

       $('form').trigger('reset');
    });
    return false;
  });

});