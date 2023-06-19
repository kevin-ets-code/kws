function replaceWithButton() {
  var elements = document.querySelectorAll('.is-button');

  elements.forEach(function(element) {
    element.setAttribute('role', 'button');
  });
}
document.addEventListener('DOMContentLoaded', replaceWithButton);
