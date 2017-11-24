$(document).ready(function() {
    // Preloading av bilder.
    var images = [
        'images/jslogo.png',
        'images/bild2.png',
        'images/squirrel.png'
    ];
    for (var i = 0; i < images.length; i++) {
        new Image().src = images[i];
    }

    // Skapa en hover-funktion för bilden så att den byts ut när man håller musen över den.
    var imageToSwap = $('#image');
    imageToSwap.hover(function() {
        imageToSwap.attr('src', images[1]);
    }, function() {
        imageToSwap.attr('src', images[0]);
    }); // end hover

    /*
    Dynamisk grafik med HTML5 canvas
     */
    $('#lineButton').click(function() {
        var canvas = document.getElementById('lineCanvas');
        var context = canvas.getContext('2d');
        context.moveTo(0, 50);
        context.lineTo(250, 50);
        context.stroke();

        context.beginPath();
        context.arc(125, 200, 125, Math.PI, 0);
        context.stroke();
    }); // end click

    $('#bezierButton').click(function() {
        var canvas = document.getElementById('bezierCanvas');
        var context = canvas.getContext('2d');

        // Längst ned i vänstra hörnet
        context.moveTo(0, 250);
        context.bezierCurveTo(50, 0, 200, 250, 250, 0);
        context.closePath();
        context.fillStyle = "blue";
        context.fill();
        context.stroke();

        context.beginPath();
        context.moveTo(0, 0);
        context.bezierCurveTo(0, 250, 250, 0, 250, 250);
        context.closePath();
        context.fillStyle = "red";
        context.fill();
        context.stroke();
    }); //end click

    $('#shapeButton').click(function() {
        var canvas = document.getElementById('shapeCanvas');
        var context = canvas.getContext('2d');

        // En gradient som bakgrund.
        var gradient = context.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(1, 'white');
        context.fillStyle = gradient;
        context.fillRect(10, 10, 100, 100);

        // Viktigt att lägga fill i bildens onload så att den laddat färdigt innan den kan läggas in som mönster.
        context.beginPath();
        context.moveTo(10, 120);
        var image = new Image();
        // Skapa callback för bildens laddning.
        image.onload = function() {
            context.fillStyle = context.createPattern(image, 'repeat');
            context.lineTo(240, 120);
            context.lineTo(240, 240);
            context.lineTo(10, 240);
            context.closePath();

            // Så att ekorrarna ritas ut på rätt sätt, annars är startpunkten fortfarande 0, 0
            context.translate(10, 120);

            context.fill();
            context.stroke();
        };
        // Ladda bilden.
        image.src = images[2];
    }); // end click

    $('#textButton').click(function() {
        var canvas = document.getElementById('textCanvas');
        var context = canvas.getContext('2d');

        context.font = '20px Verdana,sans-serif';
        context.textBaseline = 'top';
        context.fillStyle = 'black';
        context.fillText("Canvas-text!.", 10, 100);
    }); // end click

    $('#transparentButton').click(function() {
        var canvas = document.getElementById('transparentCanvas');
        var context = canvas.getContext('2d');

        // lägg till en skugga för ritade objekt.
        context.shadowBlur = 10;
        context.shadowColor = 'black';
        context.fillStyle = 'blue';
        context.fillRect(10, 10, 100, 230);

        // Sätt färgen till något genomskinlig
        context.fillStyle = "rgba(0, 120, 0, 0.5)";
        context.fillRect(60, 100, 100, 100);
    }); //end click

    $('#bitmapButton').click(function() {
        var canvas = document.getElementById('bitmapCanvas');
        var context = canvas.getContext('2d');

        var img = new Image();
        img.onload = function() {
            context.drawImage(img, 10, 10);
            $('#imageToSave').attr('src', canvas.toDataURL());
        };
        img.src = 'images/squirrel.png';
    }); // end ready
}); // end ready