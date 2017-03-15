(function($) {
    $(document).ready(function() {
        var pageName = $('.page-header').text().trim();
        $('#navbar li').each(function() {
            if ($(this).text().trim() == pageName) {
                return $(this).addClass('active');
            }
        });
    });
})(jQuery);
