function medlemmer(i) {

  /* Bruker loadXMLDoc funksjon til å laste inn XML filen */
  var xml = loadXMLDoc("medlemmer.xml");

  var navn = xml.getElementsByTagName("navn");
  var bilde = xml.getElementsByTagName("bilde");
  var alder = xml.getElementsByTagName("alder");
  var hjemsted = xml.getElementsByTagName("hjemsted");
  var diverseInfo = xml.getElementsByTagName("diverseInfo");

  /* Definerer en variabel som holder hele HTML-koden om medlemmene i gruppa */
  var medlemInfo = "";

  medlemInfo += "<h2>" + navn[i].childNodes[0].nodeValue + "</h2>";
  medlemInfo += "<img " + bilde[i].childNodes[0].nodeValue + ">";
  medlemInfo += "<p>" + navn[i].childNodes[0].nodeValue + " kommer fra ";
  medlemInfo += hjemsted[i].childNodes[0].nodeValue + " og er ";
  medlemInfo += alder[i].childNodes[0].nodeValue + " gammel. ";
  medlemInfo += diverseInfo[i].childNodes[0].nodeValue + "</p>";

  /* Gir HTML-elmentet med IDen 'medlem-content' innholdet i medlemInfo var. */
  document.getElementById("medlem-content").innerHTML = medlemInfo;

  /* Funksjon for å laste inn XML filer */
  function loadXMLDoc(filename) {
      if (window.XMLHttpRequest) {
          xhttp = new XMLHttpRequest();
      } else {
          xhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhttp.open("GET", filename, false);
      xhttp.send();
      return xhttp.responseXML;
  }
}
