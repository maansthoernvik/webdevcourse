$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/api/datetime",
        success: function(result) {
            console.log("Success");
            console.log(result);
        }
    })
    .done(function() {
        console.log("Done");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("Always");
    });
}); // end ready