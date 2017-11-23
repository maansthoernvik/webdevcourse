$(document).ready(function() {
    // Välj knappen som ska ändra bilden.
    $('#changePicture').click(function() {
        // Kontrollera vilken bild som visas just nu.
        var currentPicture = $('#pictureToChange').attr('src');

        // Beroende på vilken bild som visas, visa den andra.
        if (currentPicture === 'bild1.png') {
            $('#pictureToChange').attr('src', 'bild2.png');
        } else {
            $('#pictureToChange').attr('src', 'bild1.png');
        }
    })

    // Välj elementet som ska trigga att text läggs till i rutan.
    $('#hoverLink').hover(function() {
        $('#textTarget').css('background-color', 'red');
    }, function() {
        $('#textTarget').css('background-color', 'black');
    });
});