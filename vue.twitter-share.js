/* Globals Vue */
Vue.directive('twitter-share', function(message) {
    this.el.addEventListener('click', function () {
        var width = 818,
            height = 400,
            left = (document.documentElement.clientWidth - width) / 2,
            top = (document.documentElement.clientHeight - height) / 2,
            domain = window.location.href
            url = 'https://twitter.com/intent/tweet?text=' + message + '&url=' + domain,
            opts = 'status=1' +
                ',width=' + width +
                ',height=' + height +
                ',top=' + top +
                ',left=' + left;

        window.open(url, 'twitter', opts);
        return false;
    });
});