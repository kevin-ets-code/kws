function attribuerAttributCopyClip() {
  var myElement = document.querySelectorAll('.item');
  myElement.forEach(function(element, index) {
    // Ajoute un attribut "fs-copyclip-element" avec la valeur "copy-this-X"
    element.setAttribute('fs-copyclip-element', 'copy-this-' + (index + 1));
    var target = document.querySelectorAll('.trigger-copy');
    if (target.length > index) {
      var firstTarget = textElements[index];

      // Ajoute un attribut "fs-copyclip-element" avec la valeur "click-X"
      firstTarget.setAttribute('fs-copyclip-element', 'click-' + (index + 1));
    }
  });
}
window.addEventListener('DOMContentLoaded', attribuerAttributCopyClip);