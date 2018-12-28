$(document).ready(function() {
  // Hämta referenser till både listan med todos och input-fältet för att slippa utföra det här steget mer än en gång.
  var todoName = $('#todoName');
  var todoList = $('#todoList');

  // Gemensam funktion för att kunna återanvända.
  function addTodo() {
    var newTodoName = todoName.val();

    if (newTodoName.length > 0) {
      todoList.append("<li>" + newTodoName + "</li>");
    } else {
      // Om input-fältet är tomt så visas en röd kant runt input-elementet.
      todoName.addClass('error');
    }
  };

  // Återställ klasserna för input-fältet när det får fokus.
  todoName.focus(function() {
    $(this).removeClass();
  });

  // Lägg till ett klick-event på knappen för att lägga till en todo, hämta då värdet från input-fältet och lägg till
  // en ny todo med den texten.
  $('#addTodoItem').click(addTodo);

  // Om return trycks ned när man skrivit klart så läggs också en todo till.
  todoName.keypress(function(event) {
    if (event.which === 13) {
      addTodo();
    }
  });

  // Använder event-delegering sedan jag inte vill att den oordnade listan i sin helhet ska reagera på klick, då skulle
  // alla list-element påverkas. Istället delegerar jag eventet till varje enskilt list-element och refererar till dem
  // med $(this). Har elementet klassen 'checked' så tas det bort.
  todoList.on('click', 'li', function() {
    if ($(this).hasClass('checked')) {
      $(this).remove();
    } else {
      $(this).addClass('checked');
    }
  });
});
