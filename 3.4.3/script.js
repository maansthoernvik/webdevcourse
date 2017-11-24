$(document).ready(function() {
    // Alla länkar som pekar utanför den lokala sidan (med antingen http eller https) får target=_blank
    $('a[href^=http]').each(function() {
        $(this).attr('target', '_blank');
    }); // end each

    // Göm menyn initiellt.
    $('nav ul li ul').hide();
    $('nav ul li ul li ul').hide();

    // För första 'nivån' av menyn nav > ul > li, välj endast underliggande listan och öppna den. Vi vill inte
    // ha med undermenyer vilket är varför selektorn enbart väljer ul-taggen som är ett direkt barn till li-taggen.
    $('nav ul li').hover(function() {
        $(this).children('ul').stop().slideDown(100);
    }, function() {
        $(this).children('ul').stop().slideUp(100);
    }); // end hover

    // För andra nivån i menyn nav > ul > li > ul > li, välj undermenyn och öppna den.
    $('nav ul li ul li').hover(function() {
        $(this).children('ul').stop().slideDown(100);
    }, function() {
        $(this).children('ul').stop().slideUp(100);
    }); // end hover

    // Toggla klassen som ändrar färg på listelementet.
    $('nav li').hover(function() {
        $(this).toggleClass('hover');
    }, function() {
        $(this).toggleClass('hover');
    });


}); // end ready