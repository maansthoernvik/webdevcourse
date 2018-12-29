$(document).ready(function() {
  // Sätt alla element med en title-attribut att visa tooltip.
  $('[title]').tooltip();

  // Ändra content på var och en av textbitarna som ska visa en tooltip att hämta visningselementet från en template.
  $('#jsTooltipTarget').tooltip({
    content: $('#jsTooltipTemplate').html()
  });

  $('#htmlTooltipTarget').tooltip({
    content: $('#htmlTooltipTemplate').html()
  });

  $('#cssTooltipTarget').tooltip({
    content: $('#cssTooltipTemplate').html()
  });

  /*
  Tabbade paneler
   */
  // Välj diven med klassen 'tabbedPanels' och gör om den till tabbade paneler från jqeury UI.
  $('.tabbedPanels').tabs({
    collapsible: true,  // Så att alla paneler kan döljas
    heightStyle: 'fill' // Sätter höjden på panelerna efter containerns höjd.
  });
});
