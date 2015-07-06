
//функция открытия меню
function nav_toggle(){
  $(".nav-menu").slideToggle();
}

$(document).ready(function(){


//Плавный скролл
   $("a.scroll").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 800,
         easing: "swing"
      });
      return false;
   });


//  открывание и закрывание меню
  if($(".sandwitch:visible").length>0){
    $(".nav-menu").removeClass("visible-md").removeClass("visible-lg").hide();
  }
  $("a.sandwitch").on("click",nav_toggle);


//активация слайдера
  $(".owl-my").owlCarousel({
  items:3,
  loop:true,
  center:true,
  margin:10,
  nav:true,
  autoplayHoverPause:true,
  navText:["<img src='pict/big/icons/arrow-l.png'>","<img src='pict/big/icons/arrow-r.png'>"],
  responsive:{
    0:{items:1,nav:true},
    992:{items:3,nav:true}
    }
  });


// TABS
  $("#wrapper span").click(function() {
    if ($(this).attr("class") != $("#wrapper").attr("class") ) {
      $("#wrapper").attr("class",$(this).attr("class"));
    }
    $("#wrapper span").click( function() {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

/*

$(document).ready(function() {
 
  $("#owl-reviews").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 600,
      singleItem:true
  });
 
});

*/


//Timer 70days


/*
  var newYear = new Date(); 
  newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
  $("#defaultCountdown").countdown({until: "+70d"});
   //$('#padZeroes').countdown({until: liftoffTime, padZeroes: true});
  $("#removeCountdown").click(function() { 
      var destroy = $(this).text() === "Remove"; 
      $(this).text(destroy ? "'Re-attach" : "Remove"); 
      $("#defaultCountdown").countdown(destroy ? "destroy" : {until: newYear}); 
  });

*/


//Timer
  var newYear = new Date(); 
  newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
  $('#defaultCountdown').countdown({until: newYear}); 

   
  $('#removeCountdown').click(function() { 
      var destroy = $(this).text() === 'Remove'; 
      $(this).text(destroy ? 'Re-attach' : 'Remove'); 
      $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear}); 
  });

});
