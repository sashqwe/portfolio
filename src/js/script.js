$(document).ready(function(){
    $(function() {
      
      $('ul.tabs__list').on('click', 'li:not(.tabs__link_active)', function() {
        $(this)
          .addClass('tabs__link_active').siblings().removeClass('tabs__link_active')
          .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
      });
      
    });

    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3, 
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false, 
      prevArrow: '<button type="button" class="slick-prev"><img class="prev" src="src/icons/arrow-left.svg"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="next" src="src/icons/arrow-right.svg"></img></button>',
      responsive: [
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
});