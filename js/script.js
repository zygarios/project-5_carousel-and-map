  var flkty = new Flickity('.carousel', {
    hash: true,
  });

  var toggleButton = document.querySelector('.button--toggle');
  toggleButton.addEventListener('click', function() {
    flkty.select(0);
  });

  var progressBar = document.querySelector('.progress-bar');

  flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
  });

var templateSlide = document.querySelector('#template').innerHTML;

Mustache.parse(templateSlide);

var allSlides = '';

for (var i = 0; i <slides.length; i++) {
  allSlides += Mustache.render(templateSlide, slides[i]);
}

var carouselSlides = document.querySelector('.carousel');
carouselSlides.insertAdjacentHTML('beforeend', allSlides);
