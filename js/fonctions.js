window.onscroll = function() {scrollFunction()};

var btn = document.querySelector("#button");;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {
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

btn.addEventListener("click",topFunction);

$(document).ready(function(){
  $('#Jeu1').fadeIn(1400);
  
  setTimeout(
    function() 
    {
      $('#Jeu2').fadeIn(1400);
    }, 350);

    setTimeout(
      function() 
      {
        $('#Jeu3').fadeIn(1400);
      }, 700);

      setTimeout(
        function() 
        {
          $('#Jeu4').fadeIn(1400);
        }, 1050);

  });