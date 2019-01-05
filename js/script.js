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
