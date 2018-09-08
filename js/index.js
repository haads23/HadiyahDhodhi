$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})

// get modal element 
var modal = document.getElementById('simpleModal');

// get open modal btn
var modalbtn = document.getElementById('modalbtn1');

// get close btn 
var closebtn = document.getElementsByClassName('closeBtn'){0};

// Listen for open click 
modalbtn.addEventListener('click', openModal);
var modalBtn:HTMLElement
closeBtn.addEventListener('click', closeModal);

// function to open modal 
function openModal(){
	modal.style.display ="block";
}

// function to close modal 
function closeModal(){
	modal.style.display ="none";
}