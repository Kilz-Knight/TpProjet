window.onscroll = function() {scrollFunction()};

var btn = document.querySelector("#button");;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

btn.addEventListener("click",topFunction);