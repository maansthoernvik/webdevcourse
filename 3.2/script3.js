$(document).ready(function() {

    // När man skrollar inuti textboxen så ska "Scrolled..." läggas till i lådan inunder.
    $('#textBox').scroll(function() {
        $('#scrollTarget').append("Scrolled...");
    });

    // Du kan också ta bort scroll-funktionen med knappen brevid
    $('#disableScroll').click(function() {
        $('#textBox').off('scroll');
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
