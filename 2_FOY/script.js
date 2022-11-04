
function load(number){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            fill(this, number);
         }
    }
    xhttp.open("GET", "data.xml",true);
    xhttp.send();
}

function fill(xmlObj, number){
    var i,humans,xmlDoc,data;
    xmlDoc = xmlObj.responseXML;
    data = "";
    humans = xmlDoc.getElementsByTagName("human");

    for(i = 0; i < humans.length; i++){
        if (i == number) {
            data += "<p>İsim: " + humans[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p>" +
            "<p>Numara: " + humans[i].getElementsByTagName("numara")[0].childNodes[0].nodeValue + "</p>"+
            "<p>Bölüm: " + humans[i].getElementsByTagName("bolum")[0].childNodes[0].nodeValue + "</p>"+
            "<p>Sınıf: " + humans[i].getElementsByTagName("sinif")[0].childNodes[0].nodeValue + "</p><br>"
        }
        document.querySelector("#alan").innerHTML = data;
    }
}


