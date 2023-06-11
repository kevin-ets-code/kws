document.addEventListener("DOMContentLoaded", function() {
// Recherche de l'élément avec la classe "w-faq"
  var wrapperFaq = document.querySelector(".faq-list");

  if (wrapperFaq) {
// Création de l'objet de données JSON-LD
    var faqData = {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": []
    };

// Recherche des éléments avec la classe "faq-item"
    var faqItems = wrapperFaq.querySelectorAll(".faq-item");

// Ajout des items au script JSON-LD
    faqItems.forEach(function(item, index) {
// Récupération du texte de l'élément avec l'attribut "faq"="question"
        var faqQuestionElement = item.querySelector('[faq="question"]');
        var faqQuestion = faqQuestionElement ? faqQuestionElement.textContent : ""
        
 // Récupération du texte de l'élément avec l'attribut "faq"="reponse"
        var faqReponseElement = item.querySelector('[faq="reponse"]');
        var faqReponse = faqReponseElement ? faqReponseElement.textContent : "";
        
// Création de l'objet ListItem
        var listItem = {
        "@type": "Question",
        "name": faqQuestion,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faqReponse
        }
      };

// Ajout de l'item à la liste d'éléments
      faqData.mainEntity.push(listItem);
    });

// Formatage du script JSON-LD à l'aide de JSON.stringify avec indentation
    var formattedJSONLD = JSON.stringify(faqData, null, 2);

// Création de la balise script pour le script JSON-LD
    var scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.innerHTML = formattedJSONLD;

// Ajout du script à la balise <head> du document
    document.head.appendChild(scriptTag);
  }
});