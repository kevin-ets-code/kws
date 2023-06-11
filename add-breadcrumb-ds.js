document.addEventListener("DOMContentLoaded", function() {
// Recherche de l'élément avec la classe "breadcrumb-list"
  var breadcrumbList = document.querySelector(".breadcrumb-list");

  if (breadcrumbList) {
// Création de l'objet de données JSON-LD
    var breadcrumbData = {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": []
    };

// Recherche des éléments avec la classe "breadcrumb-item"
    var breadcrumbItems = breadcrumbList.querySelectorAll(".breadcrumb-item");

// Ajout des items au script JSON-LD
    breadcrumbItems.forEach(function(item, index) {
      var breadcrumbName = item.getAttribute("breadcrumb-name");
      var breadcrumbLink = item.getAttribute("href");

// Vérification si l'attribut href commence par "/"
      if (breadcrumbLink.startsWith("/")) {
        // Récupération de l'URL du domaine du site
        var domainURL = window.location.origin;
        // Formation du lien absolu
        breadcrumbLink = domainURL + breadcrumbLink;
      }

// Création de l'objet ListItem
      var listItem = {
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumbName,
        "item": breadcrumbLink
      };

// Ajout de l'item à la liste d'éléments
      breadcrumbData.itemListElement.push(listItem);
    });

// Formatage du script JSON-LD à l'aide de JSON.stringify avec indentation
    var formattedJSONLD = JSON.stringify(breadcrumbData, null, 2);

// Création de la balise script pour le script JSON-LD
    var scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.innerHTML = formattedJSONLD;

// Ajout du script à la balise <head> du document
    document.head.appendChild(scriptTag);
  }
});
