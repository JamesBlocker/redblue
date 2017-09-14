$(document).ready(function() {
    $('form#sides').submit(function(event) {
        var i1 = parseInt($('input#side1').val());
        var i2 = parseInt($('input#side2').val());
        var i3 = parseInt($('input#side3').val());

        $('form').fadeOut(500);
        setTimeout(function() {
            $('.result').fadeIn();
        }, 700);
        setTimeout(function() {
            if (i1 + i2 <= i3 || i1 + i3 <= i2 || i2 + i3 <= i1) {
                $('.not').fadeIn();
            } else if (i1 === i2 && i1 === i3 && i2 === i3) {
                $('.equi').fadeIn();
            } else if (i1 === i2 || i1 == i3 || i2 === i3) {
                $('.isos').fadeIn();
            } else {
                $('.scale').fadeIn();
            }

        }, 2000);


        event.preventDefault();
    });
});




// $('#play').click(function(){
//     $('.jumbotron').fadeOut(1000);
//     setTimeout(function() {
//         $('.sides').fadeIn(1500);
//     }, 1000);
// });
