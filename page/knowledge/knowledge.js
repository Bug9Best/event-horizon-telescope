window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }

    else {
      reveals[i].classList.remove('active');
    }
  }
}

function sound() {
  var sound = new Audio('/assets/sound/SingularityAnotherVersion.mp3')
  sound.volume = 0.2;
  sound.loop = true;
  sound.play();
}