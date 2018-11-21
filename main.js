// UPLOAD COM PREVIEW
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem   = document.getElementById("fileElem"),
    fileList   = document.getElementById("fileList");

fileElem.addEventListener('change', handleFiles)

function handleFiles(event) {
    var files = this.files

    if (!files.length) {
        fileList.innerHTML = "<p></p>";
    } else {
        fileList.innerHTML = "";
        var div = document.createElement("div");
        fileList.appendChild(div);

        var img = new Image();
        img.src = window.URL.createObjectURL(files[0]);
        img.height = 60;
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        }
        div.appendChild(img);
    }
}

// FILTROS
//Filtro Sepia
function setSepia(e) {
    document.getElementById('fileList').style["webkitFilter"] = "sepia(" + e.value + ")";
}

//Filtro brightness
function setBrightness(e) {
    document.getElementById('fileList').style["webkitFilter"] = "brightness(" + e.value + ")";
}

//Filtro brightness
function setContrast(e) {
    document.getElementById('fileList').style["webkitFilter"] = "contrast(" + e.value + ")";
}

//Filtro Grayscale
function setGrayscale(e) {
    document.getElementById('fileList').style["webkitFilter"] = "grayscale(" + e.value + ")";
}

//Filtro Invert
function setInvert(e) {
    document.getElementById('fileList').style["webkitFilter"] = "invert(" + e.value + ")";
}

//Filtro Opacity
function setOpacity(e) {
    document.getElementById('fileList').style["webkitFilter"] = "opacity(" + e.value + ")";
}

//Filtro Saturate
function setSaturate(e) {
    document.getElementById('fileList').style["webkitFilter"] = "saturate(" + e.value + ")";
}

//MOSTRAR FILTROS / OCULTAR
function mudarEstado(el){
    var botoes = new Array('b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7')
    var b1 = document.getElementById('bt1').style.display;
    var b2 = document.getElementById('bt2').style.display;
    var b3 = document.getElementById('bt3').style.display;
    var b4 = document.getElementById('bt4').style.display;
    var b5 = document.getElementById('bt5').style.display;
    var b6 = document.getElementById('bt6').style.display;
    var b7 = document.getElementById('bt7').style.display;

    if (b1 == "none"){

    }


}