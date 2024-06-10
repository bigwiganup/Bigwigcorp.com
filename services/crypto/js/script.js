var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
    loader.style.display="none";
  });


$(document).ready(function(){
    $("#Header_button").click(function(){
        $("#contact-usForm").toggle();
    });
  
    $(".ContactUsFormContainerCloseBtn").click(function(){
        $("#contact-usForm").toggle();
    });
  
    
  });