document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.is-button');

  elements.forEach(function(element) {
    var button = document.createElement('button');
    button.innerHTML = element.innerHTML;
    button.className = element.className;
    button.type = 'button';
    element.replaceWith(button);
  });
}
}
