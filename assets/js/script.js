
window.addEventListener('load', function() {

   // Remove Widows
   var p = document.getElementsByTagName('p');
   Array.from(p).forEach(element => {
      element.innerHTML = element.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;")
   });

   // Track slide position
   function checkSlide(){
      var slides = document.querySelectorAll(".slides > section");
      var position = 0;
      Array.from(slides).forEach(element => {
         position++;
         if (element.classList.contains('present')){
            document.querySelectorAll("html")[0].setAttribute("slide", position);
            return false;
         }
      });
   }
   checkSlide();
   document.querySelectorAll(".controls")[0].addEventListener("click", function(){
      setTimeout(function(){ checkSlide(); }, 10);
   });
   document.querySelectorAll(".controls")[0].addEventListener("touchstart", function(){
      setTimeout(function(){ checkSlide(); }, 10);
   });
   window.addEventListener("keydown", function(){
      setTimeout(function(){ checkSlide(); }, 10);
   });

});