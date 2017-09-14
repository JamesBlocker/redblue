$(document).ready(function() {
    $('#play').click(function(){
        $('.jumbotron').fadeOut(1000);
        setTimeout(function() {
            $('.sides').fadeIn(1500);
        }, 1000);
    });

    $('#doIt').click(function(event) {
        $('.sides').fadeOut();
        setTimeout(function() {
            $('.result').fadeIn(1500);
        }, 1000);
        $('.jumbotron').hide();
        event.preventDefault();
    });
});
