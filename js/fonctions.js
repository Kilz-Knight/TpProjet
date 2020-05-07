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
    if (leJeuSelect.getAttribute("id") == "JM"){
      document.querySelector("#Jeu1").classList.add("animBorder");
      setTimeout(
        function() 
        {
          document.querySelector("#Jeu1").classList.remove("animBorder");
        }, 3250);

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu5").classList.add("animBorder");
        }, 400);
      setTimeout(
        function() 
        {
          document.querySelector("#Jeu5").classList.remove("animBorder");
        }, 3650);


    }else if(leJeuSelect.getAttribute("id") == "JPC"){
      

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu2").classList.add("animBorder");
        }, 200);

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu2").classList.remove("animBorder");
        }, 3450);

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu3").classList.add("animBorder");
        }, 600);
      setTimeout(
        function() 
        {
          document.querySelector("#Jeu3").classList.remove("animBorder");
        }, 3850);

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu6").classList.add("animBorder");
        }, 1000);
      setTimeout(
        function() 
        {
          document.querySelector("#Jeu6").classList.remove("animBorder");
        }, 4250);

      setTimeout(
        function() 
        {
          document.querySelector("#Jeu4").classList.add("animBorder");
        }, 1400);
      setTimeout(
        function() 
        {
          document.querySelector("#Jeu4").classList.remove("animBorder");
        }, 4650);


    }else if (leJeuSelect.getAttribute("id") == "YTB"){

      setTimeout(
        function() 
        {
          document.querySelector("#youtubeVid").classList.add("animBorder");
        }, 550);

      setTimeout(
        function() 
        {
          document.querySelector("#youtubeVid").classList.remove("animBorder");
        }, 3800);


    }else{
      setTimeout(
        function() 
        {
          document.querySelector("#footer").classList.add("animBorder");
        }, 600);

      setTimeout(
        function() 
        {
          document.querySelector("#footer").classList.remove("animBorder");
        }, 3850);
    }
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
          $('#Jeu6').fadeIn(1400);
        }, 1550);

        setTimeout(
          function() 
          {
            $('#Jeu4').fadeIn(1400);
          }, 1950);

        setTimeout(
          function() 
          {
            $('#youtubeVid').fadeIn(1400);
          }, 2350);

          setTimeout(
            function() 
            {
              $('footer').fadeIn(1400);
            }, 2800);

  });