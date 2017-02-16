var canvas = $('#canvas');
var botao = $('.botao');

botao.on('click', function(){
	canvas.fadeToggle();
	
	if(botao.text() =='Esconder'){
		botao.text('Mostrar');
	} else {
		botao.text('Esconder');
	}	
});



