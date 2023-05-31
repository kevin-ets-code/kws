$(document).ready(function () {
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
});
