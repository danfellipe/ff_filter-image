window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem   = document.getElementById("fileElem"),
    fileList   = document.getElementById("fileList");

fileElem.addEventListener('change', handleFiles)

function handleFiles(event) {
  var files = this.files

  if (!files.length) {
    fileList.innerHTML = "<p>Nenhuma Imagem Selecionada!</p>";
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
