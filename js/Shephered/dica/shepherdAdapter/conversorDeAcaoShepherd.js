window.conversorDeAcaoShepherd = (function (){
	var self = { };

	self.converter = function(botaoDeAcao) {
		return { text: botaoDeAcao.texto, action: botaoDeAcao.acao };
	};

	return self;
})();