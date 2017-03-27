$(document).ready(function () {
  $('.short-nav-item-inner').on('click', function () {
    var blockMenu = document.querySelector('#' + this.getAttribute('for'));
    var delay = 0;
    var showedMainMenu = document.querySelector('.main-menu.show');

    if(showedMainMenu){
      $(showedMainMenu).animate({
        opacity: 0
      }, 400, function () {
        $(showedMainMenu).removeClass('show');
        this.style.display = 'none';
      });

      delay = 400;
    }


    if(blockMenu != showedMainMenu){
      blockMenu.style.display = 'block';
      $(blockMenu).addClass('show');
      $('#banner').addClass('show-main-menu');
      $(blockMenu)
        .delay( delay )
        .animate({
        opacity: 1
      }, 400);
    } else {
      $(blockMenu).removeClass('show');
      $('#banner').removeClass('show-main-menu');
    }
  });


  $('#nav-icon').on('click', function () {
    $('#banner').toggleClass('show-left-menu');
    $('.wrap-left-nav').toggleClass('show');
  });

  $('.banner-circle').on('mouseenter mouseleave', function (event) {
    if(event.type == 'mouseenter') $(this).addClass('popup-show');
    if(event.type == 'mouseleave') $(this).removeClass('popup-show');
  });
});
