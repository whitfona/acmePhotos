$('#view-work').on('click', function() {
    const images = $('#photos').position().top;

    $('html, body').animate({
        scrollTop:images
    }, 900);
});