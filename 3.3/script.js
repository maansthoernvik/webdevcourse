$(document).ready(function() {
  // Binder alertknappen till alert-funktionen.
  $('#alertButton').click(function() {
    alert('Du tryckte på alert-knappen!');
  });
  // Binder promptknappen till att öppna en prompt
  $('#promptButton').click(function() {
    var answer = prompt('Vad heter du?');
    $('#promptAnswer').html("Hej " + answer + "!");
  });
  // Binder confirmknappen till att öppna en dialog för att bekräfta något.
  $('#confirmButton').click(function() {
    if (confirm('Tryck OK om du vill bekräfta.')) {
      $('#confirmAnswer').html('Bekräftat!');
    }
  });

  var newWindow;
  // Länkar google.se till en knapp som öppnar sidan i en ny flik.
  $('#googleButton').click(function() {
    newWindow = open('https://www.google.se');
  });
  // Bind en knapp för att kunna stänga det öppnade fönstret.
  $('#closeWindow').click(function() {
    newWindow.close();
  });

  // Två variabler som håller koll på om det finns ett aktivt intervall och en referens till intervallet så att det kan stoppas.
  var intervalSet = false;
  var intervalReference;
  $('#blinkButton').click(function() {
    // Om intervallet är satt
    if (intervalSet) {
      // Ta bort det
      clearInterval(intervalReference);
      // Sätt till false inför nästa knapptryck.
      intervalSet = false;
    } else {
      // spara en referens till intervallet.
      intervalReference = setInterval(function () {
        $('#blinkingDiv').toggleClass('blink');
      }, 1000);
      // indikera att ett intervall satts.
      intervalSet = true;
    }
  });

  // Referens till om timern startats samt referenser till varje intervall/timer så att de kan stängas av.
  var timerRunning = false;
  var refInterval;
  var refTimeout;
  $('#timeoutButton').click(function() {
    // Om timers inte är igång...
    if (!timerRunning) {
      // 3 sekunder innan timern går ut.
      var timerSeconds = 3;
      $('#timerText').html(timerSeconds);     // Sätt texten brevid knappen till antal sekunder kvar på timern.

      // Varje intervall tar bort en sekund och uppdaterar texten.
      refInterval = setInterval(function() {
        timerSeconds--;
        $('#timerText').html(timerSeconds);
      }, 1000);

      // Vid timeout så tas intervallet bort (så att det inte fortsätter in på -) och klassen timeout läggs till
      // för att ändra färgen på diven.
      refTimeout = setTimeout(function() {
        clearInterval(refInterval);
        $('#timeoutDiv').addClass('timeout');
      }, 3000);

      // Viktigt att sätta så att flera knapptryck inte får oväntade konsekvenser.
      timerRunning = true;
    } else {
      // Trycktes knappen ned när timern är igång så återställs den.
      $('#timerText').html('');
      $('#timeoutDiv').removeClass('timeout');
      clearInterval(refInterval);
      clearTimeout(refTimeout);
      timerRunning = false;
    }
  });
});
