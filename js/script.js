'use strict';


//Template for carousel
var templateSlide = document.querySelector('#template').innerHTML;
Mustache.parse(templateSlide);

var allSlides = '';

for (var i = 0; i < slides.length; i++) {
  allSlides += Mustache.render(templateSlide, slides[i]);
}

//carousel
var carouselSlides = document.querySelector('.carousel');

carouselSlides.insertAdjacentHTML('beforeend', allSlides);

var flkty = new Flickity('.carousel', {
  hash: true,
});

var toggleButton = document.querySelector('.button--toggle');
var allSingleSlide = document.querySelectorAll('.carousel-cell');
toggleButton.addEventListener('click', function() {
  flkty.select(0);
});

var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});




//Google maps
window.initMap = function() {

  var city = slides[0].coords;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: city
  });
  var marker = [];
  for (var i = 0; i < slides.length; i++) {
    marker[i] = new google.maps.Marker({
      position: slides[i].coords,
      map: map
    });
  }
  //
  // for (var i = 0; i < marker.length; i++) {
  //   console.log(i)
  //   marker[i].addListener('click', function() {
  //     flkty.select(i);
  //   })
  // }
  //Wciąż nie rozumiem dlaczego nawet poza tamtym forem to wciąż nie działa a each for poniżej tak...


  marker.forEach((singleMarker, index) => {
    singleMarker.addListener('click', function() {
      flkty.select(index);
    });
  });


 flkty.on('change', function(index) {
    map.panTo(slides[index].coords);
    map.setZoom(12);
  });
  var zoomOutButton = document.querySelector('.zoom-out');
  zoomOutButton.addEventListener('click', ()=> {
    map.setZoom(2);
  });
}
