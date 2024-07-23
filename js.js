


$(document).ready(function(){
  $(".nav-link").on("click", function(){
    $(".nav-link.active").removeClass(".active");
    $(this).addClass("active");
  });
  
  $(".booknow-btn").click(function(){
    window.location = "book.html";
  });

  $(".contactus-btn").click(function(){
    window.location = "contact.html";
  });
});
