$(document).ready(function() {
    /*
    Test för arrays och nummervariabler
     */
    var array = ["Hej,", "den", "här", "texten", "kommer", "från", "ett", "array"];
    var index = 0;

    // Skriv ut allt som finns i arrayet i en paragraf
    document.write("<h2>Här testar vi ett array</h2>");
    document.write("<p>");
    while (index < array.length) {
        document.write(array[index] + " ");
        index++;
    }
    document.write("</p>");

    /*
    Test for datumobjekt och boolean
     */
    // den 15:e november
    var today = new Date(2017, 11, 15);
    var isWarm = today.getMonth() <= 7 && today.getMonth() >= 4;

    // isWarm är sann om den nuvarande månaden är mellan maj och augusti.
    document.write("<h2>Här testar vi Date och Boolean</h2>");
    isWarm ? document.write("<p>Eftersom att vi är mellan maj och augusti så är det inte kallt ännu!</p>") :
        document.write("<p>Eftersom att vi INTE är mellan maj och augusti så är det antagligen kallt nu!</p>");

    /*
    Math test
     */
    document.write("<h2>Här testar vi Math</h2>");
    document.write("<p>Pi är: " + Math.PI + "</p>");
    document.write("<p>5.5 avrundat är lika med: " + Math.round(5.5) + "</p>");
    document.write("<p>10 upphöjt till 10 är lika med: " + Math.pow(10, 10) + "</p>");

    /*
    Number test
     */
    document.write("<h2>Här testar vi Number</h2>");
    document.write("<p>Här använder vi Number-objektet för att konvertera två strängar till siffror och adderar dem:</p>");
    document.write("<p>123 + 123 = " + (Number('123') + Number('123')) + "</p>");

    /*
    String test
     */
    document.write("<h2>Här testar vi String</h2>");
    document.write("<p>Här använder vi istället String-objektet för att konvertera två nummer till strängar:</p>");
    document.write("<p>" + String(123) + " + " + String(123) + " = 246" + "</p>");

    /*
    RegExp test
     */
    var testString = "En lång text med siffror i slutet: 41480809";
    document.write("<h2>Här testar vi RegExp</h2>");
    document.write("<p>RegExp kan användas för att söka efter en specifik term i en sträng, exempelvis ett namn i en bok ");
    document.write("för at hitta författaren. Här är ett enkelt exempel på där vi vill hitta siffror i en text:</p>");
    document.write("<p>Strängen som ska letas igenom efter siffror är: " + testString + " </p>");
    document.write("<p>Här är vad RegExp hittade: " + new RegExp('\\d+').exec(testString) + "</p>");

    /*
    Global test
     */
    var globalText = "Testar globala variabler."
    document.write("<h2>Här testar vi Global</h2>");
    document.write("<p>Variabler och objekt kan definieras i olika sk. \"scopes\" i javascript. Variabler som definieras ");
    document.write("utanför alla funktioner är globala och kan därmed hämtas från vilken funktion som helst.</p>");
    document.write("<p>Här är en bit text som sparats i en global variabel: " + globalText + "</p>");
    document.write("<p>Variabler som istället definieras inuti en funktion kan inte användas på andra ställen än just i den funktionen.</p>");
    document.write("<h3>Global-objektet</h3>");
    document.write("<p>Global-objektet finns alltid i webbläsaren och när globala variabler skapas så skapas de som");
    document.write("delar av det globala objektet \"Global\"</p>");
});
