//JAVASCRIPT

//Burgermenuen. Tester om siden er klar og starter funktionen: ved klik
//på burgermenu skal mobilemenu toggle frem som slid.. Langsomt
//rammes med # eller . efter om det er class eller ID
$(document).ready(function() {
  $("#burgermenu").click(function() {
    $(".mobileMenu").slideToggle("slow");
  });
});

//Samme som ovenstående - en slider der åbner prislisten.
$(document).ready(function() {
  $("#skubud").click(function() {
    $("#priser").slideToggle("slow");
  });
});

//faq - samme som priser benyttes her
$(document).ready(function() {
  $("#faqgardin").click(function() {
    $("#faqinfo").slideToggle("slow");
  });
});

$(document).ready(function() {
$("#faqgardin2").click(function() {
$("#faqinfo2").slideToggle("slow");
});
});

$(document).ready(function() {
$("#faqgardin3").click(function() {
$("#faqinfo3").slideToggle("slow");
});

});
$(document).ready(function() {
$("#faqgardin4").click(function() {
$("#faqinfo4").slideToggle("slow");
});

});


//mapbox api
//Her indsættes selv kortet med vores egen token og style. Derudover tilpasses zoom og kordinator til startskærm
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYTU1MDgiLCJhIjoiY2syMDZ5bXBtMDBuZTNlcXpvbnozYzJuZSJ9.Wo5gS17JDQ8hYPQ82hQlgA';
var map = new mapboxgl.Map({
  style: 'mapbox://styles/jona5508/ck3zpq0h31vuk1cn74wbe32ug',
  center: [10.1540, 56.14355],
  zoom: 15.5,
  container: 'map',
});


map.on("load", function() {

  //loader her billedet der benyttes som pointer. MapBox egen pointer funktion benyttet.
  map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
    if (error) throw error;
    map.addImage("custom-marker", image);
    /* Style layer: sammensætter kilden til billede, og hvordan det skal vises. */
    map.addLayer({
      id: "markers",
      type: "symbol",
      /* Kilden.. specificerer de geografiske koordinater, hvor billedmarkøren skal placeres.*/
      source: {
        type: "geojson",
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.1545, 56.143]
            }
          }]
        }
      },
      layout: {
        "icon-image": "custom-marker",
      }
    });
  });
});



//SLIDER TIL 'KUNDERNE SIGER'
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}




//---------------------HER STARTER BACK TO ToP BOTTON.--------------------

//få knappen frem ved scroll (starter funktioner)
window.onscroll = function() {scrollFunction()};

//Funktionen gør at når der scrolles længere ned en 20 px skal knappen vises som block
//slettes igen, hvis man kommer retur til toppen (under 20)
function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}

// // Når der klikkes på knappen flyttes synsfeltet til toppen
function topFunction() {
  document.documentElement.scrollTop = 0;
}
$('.cd-testimonials-wrapper').flexslider({
   //declare the slider items
   selector: ".cd-testimonials > li",
   animation: "slide",
   //do not add navigation for paging control of each slide
   controlNav: false,
   slideshow: false,
   //Allow height of the slider to animate smoothly in horizontal mode
   smoothHeight: true,
   start: function(){
      $('.cd-testimonials').children('li').css({
         'opacity': 1,
         'position': 'relative'
      });
   }
});

//------------------COOKIES---------------
