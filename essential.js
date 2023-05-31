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

function addCurrentClassToChildren() {
  const currentElements = document.querySelectorAll('.w--current');
  
  currentElements.forEach(element => {
    const children = element.children;
    
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add('w--current');
    }
  });
}


$(document).ready(function () {
    const functions = [
      setupShareLinks, 
      removeInvisibleElements,
      addCurrentClassToChildren
    ];
    const promises = functions.map(func => func());

    Promise.all(promises);
});
