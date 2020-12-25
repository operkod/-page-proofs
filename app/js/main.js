

$(function(){
  var marquee = $(".string_img"); 
  marquee.wrapInner("<span>");
  marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
  marquee.append(marquee.find("span").clone());
  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "200%");
  var reset = function() {
  if ($(window).width() <= '400'){
  $(this).stop();
  } else {
  $(this).css("margin-left", "0%");
  $(this).animate({ "margin-left": "-100%" }, 5000, 'linear', reset);
  }
  };
  reset.call(marquee.find("div"));

  $( ".person_item" ).hover(function() {
      $( this ).addClass("person_item-active");
    }, function() {
      $( this ).removeClass("person_item-active");
    }
  );

  $( ".nav_item" ).hover(function() {
    $( this ).addClass("nav_item-active");
    }, function() {
      $( this ).removeClass("nav_item-active");
    }
  );

  $('body').on('click', function(){
    $('.nav_menu, body').removeClass("menu__active");
  });

  $(".menu").on('click', function (e) {
    e.stopPropagation();
    $(".nav_menu, body").toggleClass("menu__active");
  });

  $( ".person_item" ).hover(function() {
    $( this ).addClass("person_item-active");
  }, function() {
    $( this ).removeClass("person_item-active");
  }
);
  
  
  // зделать через массивы
  $(".music_gorillaz").on('mouseover', function () {
    $('.music_img-1').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-1').css('opacity', '0');
  });

  $(".music_demon").on('mouseover', function () {
    $('.music_img-2').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-2').css('opacity', '0');
  });
  $(".music_plastic").on('mouseover', function () {
    $('.music_img-3').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-3').css('opacity', '0');
  });
  $(".music_faill").on('mouseover', function () {
    $('.music_img-4').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-4').css('opacity', '0');
  });
  $(".music_humanz").on('mouseover', function () {
    $('.music_img-5').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-5').css('opacity', '0');
  });
  $(".music_now").on('mouseover', function () {
    $('.music_img-6').css('opacity', '1');
  }).on('mouseout', function () {
    $('.music_img-6').css('opacity', '0');
  });


});


new WOW().init();
