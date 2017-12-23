$(document).ready(function() {
    /*
    Initiella inställningar, fält som ska visas/gömmas samt fokus.
     */
    // Lägger till funktioner för att kunna validera med RegEx.
    var nameRE = /^[A-ZÅÄÖ][a-zåäö ,.'-]+ [A-ZÅÄÖ][a-zåäö ,.'-]+$/;
    var socialSecRE = /^\d{10}$/;

    $.validator.addMethod("nameRegEx", function(value, element, regex) {
        return regex.test(value);
    }, "Du måste ange både för- och efternamn");

    $.validator.addMethod("socialSecurityRegEx", function(value, element, regex) {
        return regex.test(value);
    }, "Skriv in personnummer med 10 siffror");
    // Alla inputfields
    var inputFields = $('input');

    /* För highlight av nuvarande fönster */
    inputFields.focus(function() {
        $(this).toggleClass('focus');
    });
    inputFields.blur(function() {
        $(this).toggleClass('focus');
    });
    /* För highlight av nuvarande fönster */

    $('#partnerInfo').hide();
    $('#name').focus();

    /*
    Fältreaktioner, visa/göm fält beroende på tidigare val.
     */
    $(':radio').click(function(event) {
        var partnerInfo = $('#partnerInfo');

        switch (event.target.id) {
            case 'single':
                partnerInfo.slideUp(200);
                break;
            case 'sambo':
                partnerInfo.slideDown(200);
                break;
            case 'married':
                partnerInfo.slideDown(200);
                break;
        }
    }); // end click

    $('#noInheritage').click(function() {
        var inheritage = $('#inheritanceContainer');
        if (this.checked) {
            inheritage.slideUp(200);
        } else {
            inheritage.slideDown(200);
        }
    }); // end click

    $('#noWinnings').click(function() {
        var winnings = $('#winningsContainer');
        if (this.checked) {
            winnings.slideUp(200);
        } else {
            winnings.slideDown(200);
        }
    }); // end click

    /*
    Formulärsvalidering
     */
    var standardAmountValidation = {
        required: true,
        min: 0
    };
    var formRef = $('form');

    formRef.validate({
        rules: {
            name: {
                required: true,
                nameRegEx: nameRE // Använder customfunktioner definierade i början av JS-filen
            },
            socialSecurity: {
                required: true,
                socialSecurityRegEx: socialSecRE // Använder customfunktioner definierade i början av JS-filen
            },
            partnerName: {
                nameRegEx: nameRE
            },
            partnerSocialSecurity: {
                socialSecurityRegEx: socialSecRE
            },
            relationshipStatus: 'required',
            inheritance: standardAmountValidation,
            winnings: standardAmountValidation,
            earnings: standardAmountValidation
        },
        messages: {
            socialSecurity: 'Ange ditt personnummer med 10 siffor',
            inheritance: 'Du måste fylla i om du ärvt några pengar',
            winnings: 'Du måste fylla i om du vunnit några pengar'
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());

            } else if (element.id === "inheritance" || element.id === "winnings") {
                error.appendTo(element.parent());

            } else {
                error.insertAfter(element);
            }
        } // end error placement
    }); // end validate

    formRef.submit(function() {
        // Visar en alert-ruta om summan understiger 1 kr för att låta användaren bekräfta att uppgifterna är korrekta.
        if (formRef.valid()) {
            if ($('#deductibles').val() < 1) {
                return confirm("Är du säkert på att du inte har några skatteavdrag att göra?");
            }
        }
    }); // end submit
});