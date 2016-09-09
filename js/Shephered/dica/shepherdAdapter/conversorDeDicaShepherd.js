window.conversorDePassoShepherd = (function() {
	var self = {};

	self.converter = function (passo) {
		var passoSheperd = {
			title: passo.titulo,
			text: passo.texto,
			attachTo: passo.anexarEm + " " + passo.posicao,
			classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
			buttons: [],
			showCancelLink: true,
			tetherOptions: {
				target: passo.anexarEm,
				constraints: [{
                    to: passo.anexarEm,
                    pin: true
                }]
			}
		};
		
		passo.botoes.map(function(botaoDeAcao) {
			var acaoDoSheperd = conversorDeAcaoShepherd.converter(botaoDeAcao);
			passoSheperd.buttons.push(acaoDoSheperd);
		});

		return passoSheperd;
	};

	return self;
})();