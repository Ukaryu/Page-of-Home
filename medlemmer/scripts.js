/* Bruker loadXMLDoc funksjon til å laste inn XML filen */
var xml = loadXMLDoc("fav-books.xml");
title = xml.getElementsByTagName("title");
author = xml.getElementsByTagName("author");

/* Definerer en variabel som holder hele HTML-koden til table-elementet */
var booksTable;
booksTable = "<table><tr><th>Tittel</th><th>Forfatter</th></tr>";

for (i = 0; i < title.length; i++) {
    booksTable += "<tr>";
    booksTable += "<td>" + title[i].childNodes[0].nodeValue + "</td>";
    booksTable += "<td>" + author[i].childNodes[0].nodeValue + "</td>";
    booksTable += "</tr>";
}

booksTable += "</table>";

/* Gir HTML-elmentet med IDen 'bok-liste' table markup'en */
document.getElementById("bok-liste").innerHTML = booksTable;

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
