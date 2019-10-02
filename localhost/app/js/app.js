	var winc = 0;
	
	function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
	
	function getId() {
  var now = new Date();
  var result = ""+now.getHours()+now.getMinutes()+now.getSeconds()+now.getFullYear()+now.getDay()+now.getMonth()+getRandomInt(0, 9);

  return(result);
}

function cwindow(x,y,id) {
var ido = getId();

	$('app-windows').append('<app-dialog id="'+id+ido+'" style="position:absolute;background-color:ghostwhite;width:'+x+';height:'+y+';"></app-dialog>');
	
	$( "app-dialog#"+id+ido ).draggable({
      start: function() {
		  winc +=1;
      $(this).css({'z-index':winc});
      },
      drag: function() {
       
      },
      stop: function() {
      }
    });
	
	switch (id) {
  case 'd0':
    init_fm(id+ido);
    break;
  case 'd1':
    init_fmu(id+ido);
    break;
  case 'd2':
    alert( 'Окно не найдено' );
    break;
}

}
function dwindow(id) {
	$('app-dialog#'+id).remove();
}

function init_fm(id) {
$('app-dialog#'+id).append('<hd-line>Файловый менеджер<app-close onclick="dwindow(\''+id+'\');">X</app-close></hd-line>');

$.post( "app/php/scanfiles.php", function( data ) {
	$('app-dialog#'+id).append(data);
});

}
function init_fmu(id) {
$('app-dialog#'+id).append('<hd-line>Загрузить файлы<app-close onclick="dwindow(\''+id+'\');">X</app-close></hd-line>');
$('app-dialog#'+id).append('<div id="uploads"><p>Загруженные файлы:</p><ul></ul></div><div class="dropzone" id="dropzone">Перетащите файлы сюда</div><script src="app/js/upload.js"></script>');

}