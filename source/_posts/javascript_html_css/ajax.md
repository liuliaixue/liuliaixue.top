---
title: ajax request
tags: ajax XMLHttpRequest
---



```
<script type="text/javascript">
    function loadXMLDoc() {
        var xmlhttp;
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ajax/demo_get.asp", true);
        xmlhttp.send();
    }



    var url = "https://www.alal.io/files/assets/token";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = state_Change;
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    var params = { "fileSize": "1000" };
    xmlhttp.send(JSON.stringify(params));
    var state_Change = function () {
        console.log(xmlhttp.readyState, xmlhttp.status)
        console.log(xmlhttp)
    }

</script>
```