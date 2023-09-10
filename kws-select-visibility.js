var Webflow = Webflow || [];
Webflow.push(function() {
  // Sélectionnez tous les éléments de déclenchement avec l'attribut select-trigger
  const triggerElements = document.querySelectorAll('[kws-select-trigger]');

  // Fonction de gestionnaire d'événement pour le changement de sélection
  function handleChange(event) {
    const selectElement = event.target; // L'élément <select> qui a déclenché l'événement
    const selectedValue = selectElement.value;

    // Trouvez tous les éléments de cible associés à cet élément de déclenchement
    const targetElements = document.querySelectorAll(`[kws-select-target="${selectElement.getAttribute('kws-select-trigger')}"]`);

    // Parcourir tous les éléments de cible
    targetElements.forEach(targetElement => {
      // Vérifiez si la valeur de l'attribut "target" correspond à la valeur sélectionnée
      if (targetElement.getAttribute('kws-value-target') === selectedValue) {
        // Afficher l'élément de cible s'il correspond
        targetElement.style.display = 'block';
      } else {
        // Masquer l'élément de cible sinon
        targetElement.style.display = 'none';
      }
    });
  }

  // Ajouter un gestionnaire d'événements à chaque élément de déclenchement
  triggerElements.forEach(triggerElement => {
    triggerElement.addEventListener('change', handleChange);
  });

  // Appeler la fonction handleChange une fois pour chaque élément de déclenchement (pour la configuration initiale)
  triggerElements.forEach(triggerElement => {
    handleChange({ target: triggerElement });
  });
});
