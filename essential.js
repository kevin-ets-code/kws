document.addEventListener('DOMContentLoaded', function() {
  var elementsToRemove = document.querySelectorAll('.w-condition-invisible');
  
  elementsToRemove.forEach(function(element) {
    element.remove();
  });
});