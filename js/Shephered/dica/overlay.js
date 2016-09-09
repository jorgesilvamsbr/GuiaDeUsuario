window.overlay = (function() {
	
	var self = {};
	
	self.exibir = function() {
		destacarDica();
		destacarAlvoDaDica();
		exibirOverlay();
	};
	
	self.esconder = function(shepherTour) {
		var passoAtual = shepherTour.tour.getCurrentStep();
		
		console.log(shepherTour.tour);
		
		esconderDica(passoAtual);
		tirarAlvoDaDicaDoDestaque();
		esconderOverlay();
	};
	
	var destacarDica = function() {
		if($('.shepherd').length) { 
			$('.shepherd').css('z-index','100001');
			$('.shepherd').css('top','15px');
		} else {
			setTimeout(destacarDica, 50);
		}
	};
	
	var destacarAlvoDaDica = function() {
		if ($('.shepherd-target').length) {
			$('.shepherd-target').css('z-index', '99999');
			$('.shepherd-target').css('position', 'relative');
		} else {
			setTimeout(destacarAlvoDaDica, 50);
		}
	};
	
	var exibirOverlay = function() {
		$('#overlay').fadeIn(300);
		$('#protecao-de-links').fadeIn(300);
	};
	
	var esconderDica = function(passoAtual) {
		var elementoDaDica = $(passoAtual.el);
		elementoDaDica.remove();
	};
	
	var tirarAlvoDaDicaDoDestaque = function() {
		if (!algumaDicaEstaVisivel()) {
			$('.shepherd-target').css('z-index', '1');
		}
	};
	
	var esconderOverlay = function() {
		if (!algumaDicaEstaVisivel()) {
			$('#overlay').fadeOut(300);
			$('#protecao-de-links').fadeOut(300);
		}
	};
	
	var algumaDicaEstaVisivel = function() {
		return $(".shepherd-step:visible").length > 0;
	}
	
	return self;
})();