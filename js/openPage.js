function openPage(pageName,element) {
  var i, tabcontent, tablinks;

  var color = assignColor(pageName);

  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.display = "flex";
  }
  element.style.display = "none";


  document.getElementById(pageName).style.display = "flex";
  element.style.backgroundColor = color;

  modifyContent(pageName,color);
  assignColor(pageName,element);

}
/*
  Funzione che modifica il testo e il colore della barra
  laterale del titolo
*/
function modifyContent(pageName,color){
  var testo, barretta, menu;

  testo = document.getElementById("title");
  testo.innerHTML = pageName;

  barretta = document.getElementById("title");
  barretta.style.borderColor = color;

  menu = document.getElementById("buttonRow");
  menu.style.backgroundColor = color;
}
/*
  Funzione che assegna i colori in base al nome della pagina
  ricavandoli dalle variabili css
*/
function assignColor(pageName) {
  var color;
  switch (pageName) {
    case 'About':
        color = getComputedStyle(document.documentElement).getPropertyValue('--rosso');
        return color;
      break;
    case 'Contact':
        color = getComputedStyle(document.documentElement).getPropertyValue('--viola');
        return color;
      break;
      case 'Gallery':
          color = getComputedStyle(document.documentElement).getPropertyValue('--giallo');
          return color;
        break;
    default:
  }
}
