$(document).ready(function(){

	$('#second').hide();
    $('#third').hide();
	$('#forth').hide();
//________________________________
    $('#Liveshow').click(function(){
    	$('#first,#forth').slideToggle(1000); 
        $('#Liveshow').hide();  
    });
    $('#bck').click(function(){
    	$('#first,#forth').slideToggle(1000);
        $('#Liveshow').slideToggle(1000);
    });
//________________________________
    $('#aboutme').click(function(){
    	$('#second, #first').animate({width:'toggle'},1000);
        $('#Liveshow').hide();
    });	    	
     $('#bckk').click(function(){
    	$('#second, #first').animate({width:'toggle'},1000);
        $('#Liveshow').animate({width:'toggle'},1000);
    });
//_____________all third section___________________
     $('#mymusic').click(function(){
    	$('#third, #first').animate({width:'toggle'},1000);  
        $('#Liveshow').hide();  	
    });
     $('#bckkk').click(function(){
    	$('#third, #first').animate({width:'toggle'},1000);
        $('#Liveshow').animate({width:'toggle'},1000);
        $('#thirdd').hide();
        $('#thirddd').hide();
    });
//________________
    
     //____________pagination work_____________________________________
  $('#example').paginate();


//_________________________________________________
    var modal = document.getElementById('myModal');
    var modall = document.getElementById('myModall');
    var modalll = document.getElementById('myModalll');
    var modallll = document.getElementById('myModallll');

    var btn = document.getElementById('btn');
    var btnn = document.getElementById('btnn');
    var btnnn = document.getElementById('btnnn');
    var btnnnn = document.getElementById('btnnnn');

    var span = document.getElementsByClassName("cloose")[0];
    var spann = document.getElementsByClassName("closee")[0];
    var spannn = document.getElementsByClassName("closeee")[0];
    var spannnn = document.getElementsByClassName("closeeee")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    btnn.onclick = function() {
        modall.style.display = "block";
    }
    btnnn.onclick = function() {
        modalll.style.display = "block";
    }
    btnnnn.onclick = function() {
        modallll.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    spann.onclick = function() {
        modall.style.display = "none";
    }
    spannn.onclick = function() {
        modalll.style.display = "none";
    }
    spannnn.onclick = function() {
        modallll.style.display = "none";
    }

window.onclick = function(event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
    if (event.target == modall) {
         modall.style.display = "none";
     }
     if (event.target == modalll) {
         modalll.style.display = "none";
     }
     if (event.target == modallll) {
         modallll.style.display = "none";
     }
  }   
});

 
//_______slideShow_1__________
var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function curentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    } 

//_______slideShow_1.1__________
var slideIndexx = 1;
showSlidess(slideIndexx);

function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

function currentSlide(n) {
  showSlidess(slideIndexx = n);
}
function showSlidess(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlidess");
  var dotss = document.getElementsByClassName("demoo");
 
  if (n > slidess.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slidess.length}
  for (i = 0; i < slidess.length; i++) {
      slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
      dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slideIndexx-1].style.display = "block";
  dotss[slideIndexx-1].className += " active";
}
// _______________

// $(function(){

//   $("div.holder").jPages({
//     containerID : "itemContainer"
//   });

// });