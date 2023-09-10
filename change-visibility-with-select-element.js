var Webflow = Webflow || [];
Webflow.push(function() {
const selectElement = document.querySelector('#selectElement');
const elements = document.querySelectorAll('[select]');
function handleChange() {
  const selectedValue = selectElement.value;
  elements.forEach(element => {
    const elementValue = this.getAttribute('select');
    if (elementValue === selectedValue) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}
handleChange();
selectElement.addEventListener('change', handleChange);
});
