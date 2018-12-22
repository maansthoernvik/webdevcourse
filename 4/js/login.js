$(function($) {
    var $form = $("form");
    $form.submit(submitForm);
    $form.validate({
        rules: {
            username: {
                required: true,
                equalTo: "#hidden_username"
            },
            password: {
                required: true,
                equalTo: "#hidden_password"
            }
        },
        messages: {
            username: {
                required: "You must supply a username",
                equalTo: "That username does not exist"
            },
            password: {
                required: "You must supply a password",
                equalTo: "Incorrect password"
            }
        }
    });
});

function submitForm(event) {
    if ($(this).valid()) {
        window.location.href = "landing.html";
        authentication.authenticate();
    }

    event.preventDefault();
}