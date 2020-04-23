window.onscroll = function() {scrollFunction()};

var btn = document.querySelector("#button");
var footer = document.querySelector("footer");
var navBtn = document.querySelectorAll(".navigation ul li a");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
    btn.classList.add('show');
    document.querySelector(".progress-container").style.display = "block";
  } else {
    btn.classList.remove('show');
    document.querySelector(".progress-container").style.display = "none";
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function highlightElem(){
  var leJeuSelect = document.querySelector(this.getAttribute("href"));
  leJeuSelect.classList.add("animBorder");
    setTimeout(
      function() 
      {
        leJeuSelect.classList.remove("animBorder");
      }, 3250);
}

btn.addEventListener("click",topFunction);

for (i = 0; i<navBtn.length; i++){
  navBtn[i].addEventListener("click", highlightElem);
}

$(document).ready(function(){
  $('#Jeu1').fadeIn(1400);
  
  setTimeout(
    function() 
    {
      $('#Jeu5').fadeIn(1400);
    }, 350);

    setTimeout(
      function() 
      {
        $('#Jeu2').fadeIn(1400);
      }, 750);

    setTimeout(
      function() 
      {
        $('#Jeu3').fadeIn(1400);
      }, 1150);

      setTimeout(
        function() 
        {
          $('#Jeu4').fadeIn(1400);
        }, 1550);

        setTimeout(
          function() 
          {
            $('#Jeu6').fadeIn(1400);
          }, 1950);

        setTimeout(
          function() 
          {
            $('footer').fadeIn(1400);
          }, 2350);

  });