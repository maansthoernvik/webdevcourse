$(document).ready(function() {
  // När man skrollar inuti textboxen så ska "Scrolled..." läggas till i lådan inunder.
  var scrollBox = $('#textBox')

  function scrollOn() {
    scrollBox.scroll(function() {
      $('#scrollTarget').append("Scrolled...");
    });
  }

  var scrollStatus = true;
  scrollOn();

  // Du kan också ta bort scroll-funktionen med knappen brevid
  $('#disableScroll').click(function() {
    if (scrollStatus) {
      $('#textBox').off('scroll');
    } else {
      scrollOn();
    }
    // Invertera variabeln som håller koll på om scroll är på eller av.
    scrollStatus = !scrollStatus;
  });

  // Ändra beteendet hos formuläret
  $('#form').submit(function() {
    var name = $('#name').val();
    var age = $('#age').val();
    var food = $('#food').val();

    // Om värdena inte validerar så kommer formuläret inte att skickas in.
    if (!validateInputValues(name, age, food)) {
        return false;
    }
  });

  function validateInputValues(name, age, food) {
      return name.length > 1 && age > 0 && food.length > 0;
  }
});
