
window.addEventListener('load', function() {

   // Remove Widows
   var p = document.getElementsByTagName('p');
   Array.from(p).forEach(element => {
      element.innerHTML = element.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;")
   });

});