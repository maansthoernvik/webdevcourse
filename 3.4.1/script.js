$(document).ready(function() {

    /*
     Show, hide och toggle.
      */

    // Spara referens till targetDiv för att slippa göra en lookup för varje knappfunktion
    var targetDiv = $('.targetDiv');

    $('#show').click(function() {
        targetDiv.show();
    }); // end click

    $('#hide').click(function() {
        targetDiv.hide();
    }); // end click

    $('#toggle').click(function() {
        targetDiv.toggle();
    }); // end click

    $('#fadeIn').click(function() {
        targetDiv.fadeIn();
    }); // end click

    $('#fadeOut').click(function() {
        targetDiv.fadeOut();
    }); // end click

    $('#fadeToggle').click(function() {
        targetDiv.fadeToggle();
    }); // end click

    $('#fadeTo').click(function() {
        targetDiv.fadeTo('normal', .5);
    }); // end click

    /*
     Animations!
     */
    $('#startAnimation').click(animateDivs); // end click

    // Funktionen startar en kedjereaktion av animeringar med hjälp av callback-funktionen. Varje div har en callback
    // förutom den sista i kedjan. Animationstiden är satt längst på den första animeringen och blir sedan kortare
    // och kortare. Var tvungen att också använda mig av jquery color för att kunna manipulera background-color med
    // animationen, denna är satt som en extra import i HTML-dokumentet.
    function animateDivs() {
        var animatedDivs = $('.animationDiv');
        var numberOfDivs = animatedDivs.length;
        console.log(numberOfDivs);

        $('.divOne').animate({
            backgroundColor: 'black'
        }, 750, 'linear', function() {
            $('.divTwo').animate({
                backgroundColor: 'black'
            }, 600, 'linear', function() {
                $('.divThree').animate({
                    backgroundColor: 'black'
                }, 450, 'linear', function() {
                    $('.divFour').animate({
                        backgroundColor: 'black'
                    }, 300, 'linear', function() {
                        $('.divFive').animate({
                            backgroundColor: 'black'
                        }, 150, 'linear'); // end animate
                    }); // end animate
                }); // end animate
            }); // end animate
        }); // end animate
    }
}); // end ready