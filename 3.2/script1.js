$(document).ready(function() {
  // Välj knappen som ska ändra bilden.
  $('#changePicture').click(function() {
    // Kontrollera vilken bild som visas just nu.
    var currentPicture = $('#pictureToChange');

    // Beroende på vilken bild som visas, visa den andra. Hämta information om
    // vilken bild som just nu visas get att använda .attr() på jQuery-objektet.
    if (currentPicture.attr("src") === 'images/bild1.png') {
      currentPicture.attr('src', 'images/bild2.png');
      currentPicture.css({"border": "1px solid red"});
    } else {
      currentPicture.attr('src', 'images/bild1.png');
      currentPicture.css({"border": "none"});
    }
  })

  // Välj elementet som ska trigga att rutan ändrar färg.
  $('#hoverLink').hover(function() {
    $('#textTarget').css('background-color', 'red');
  }, function() {
    $('#textTarget').css('background-color', 'black');
  });
});
