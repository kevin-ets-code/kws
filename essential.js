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


$(document).ready(function () {
    const functions = [
      setupShareLinks, 
      removeInvisibleElements,
      replaceWithButton
    ];
    const promises = functions.map(func => func());

    Promise.all(promises);
});
