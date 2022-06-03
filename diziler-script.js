function getData() {

    let table = "<table>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>isim</th>"
            + "<th>Yas Uygunlugu</th>"
            + "<th>Turu</th>"
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://127.0.0.1:3000/diziler", false);
    xhttp.send();

    const diziler = JSON.parse(xhttp.responseText);


    for(let x=0; x< diziler.length; x++){
                                        
        let dizi = diziler[x];

        console.log("dizi ismi: " + dizi.isim);

        table += "<tr>"
        + "<td><h3>" + dizi.id + "</h3></td>"
        + "<td>" + dizi.isim +"</td>"
        + "<td><h4>" + dizi.yasUygunlugu + "</h4></td>"
        + "<td>" + dizi.turu + "</td>"
        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
}