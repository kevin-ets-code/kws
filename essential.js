function setupShareLinks() {
    return new Promise(function(resolve, reject) {
        let title = document.title;
        let url = window.location.href;

        const shareLinks = {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + url + '%2F&title=' + title + '%3F',
            linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '%2F&title=' + title + '&summary=',
            twitter: 'https://twitter.com/share?url=' + url + '%2F&title=' + title + '&summary=',
            whatsapp: 'https://wa.me/?text=' + url
        };

        $('[shared-on]').each(function () {
            let sharedValue = $(this).attr('shared-on');
            let shareLink = shareLinks[sharedValue];

            if (shareLink) {
                $(this).attr('href', shareLink);
                $(this).attr('target', '_blank');
            }
        });

        resolve();
    });
}
function removeInvisibleElements() {
    return new Promise(function(resolve, reject) {
        var elementsToRemove = document.querySelectorAll('.w-condition-invisible');

        elementsToRemove.forEach(function(element) {
            element.remove();
        });

        resolve();
    });
}
function replaceWithButton() {
  var elements = document.querySelectorAll('.is-button');

  elements.forEach(function(element) {
    var button = document.createElement('button');
    button.innerHTML = element.innerHTML;
    button.className = element.className;
    button.type = 'button';
    element.replaceWith(button);
  });
}
function addBreadcrumbLDScript() {
  var breadcrumbList = document.querySelector(".breadcrumb-list");
  if (breadcrumbList) {
    var breadcrumbData = {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": []
    };
    var breadcrumbItems = breadcrumbList.querySelectorAll(".breadcrumb-item");
    breadcrumbItems.forEach(function(item, index) {
      var breadcrumbName = item.getAttribute("breadcrumb-name");
      var breadcrumbLink = item.getAttribute("href");
      if (breadcrumbLink.startsWith("/")) {
        var domainURL = window.location.origin;
        breadcrumbLink = domainURL + breadcrumbLink;
      }
      var listItem = {
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumbName,
        "item": breadcrumbLink
      };
      breadcrumbData.itemListElement.push(listItem);
    });
    var formattedJSONLD = JSON.stringify(breadcrumbData, null, 2);
    var scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.innerHTML = formattedJSONLD;
    document.head.appendChild(scriptTag);
  }
}

$(document).ready(function () {
    const functions = [
      setupShareLinks, 
      removeInvisibleElements,
      replaceWithButton,
      addBreadcrumbLDScript
    ];
    const promises = functions.map(func => func());

    Promise.all(promises);
});
