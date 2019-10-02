(function() {
    var dropzone = document.getElementById("dropzone");

    dropzone.ondrop = function(e) {
     this.className = 'dropzone';
     this.innerHTML = 'Перетащите файлы сюда';
     e.preventDefault();
     upload(e.dataTransfer.files);
    };

    var displayUploads = function(data) {
     var uploads = document.getElementById("uploads"),
         anchor,
         x;

     for(x = 0; x < data.length; x++) {
      anchor = document.createElement('li');
      anchor.innerHTML = data[x].name;
      uploads.appendChild(anchor);
     }
    };

    var upload = function(files) {
     var formData = new FormData(),
      xhr = new XMLHttpRequest(),
      x;

     for(x = 0; x < files.length; x++) {
      formData.append('file[]', files[x]);
     }

     xhr.onload = function() {
      var data = JSON.parse(this.responseText);
      displayUploads(data);
     };

     xhr.open('post', 'app/php/upload.php');
     xhr.send(formData);
    };

    dropzone.ondragover = function() {
     this.className = 'dropzone dragover';
     this.innerHTML = 'Отпустите мышку';
     return false;
    };

    dropzone.ondragleave = function() {
     this.className = 'dropzone';
     this.innerHTML = 'Перетащите файлы сюда';
     return false;
    };

   }());