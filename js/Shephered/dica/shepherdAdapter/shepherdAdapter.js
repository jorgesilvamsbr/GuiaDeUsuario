Shepherd.on('show', window.overlay.exibir);
Shepherd.on('cancel', window.overlay.esconder);
		
function ShepherAdapter() {
	var self = this;
	var _shepherdTour;

	self.criar = function() {
		_shepherdTour = new Shepherd.Tour({
			defaults : {
				classes : "shepherd-theme-arrows",
				scrollTo : false
			}
		});

		return self;
	};

	self.iniciar = function() {
		_shepherdTour.start();
	};

	self.proximaDica = function() {
		_shepherdTour.next();
	};

	self.dicaAnterior = function() {
		_shepherdTour.back();
	};

	self.cancelar = function() {
		_shepherdTour.cancel();
	};

	self.adicionarDica = function(dica) {
		var sheperdStep = window.conversorDePassoShepherd.converter(dica);

		_shepherdTour.addStep(dica.nome, sheperdStep);
	};

	self.exibirDica = function(nomeDaDica) {
		_shepherdTour.show(nomeDaDica);
	};

	self.destruirDicaAtual = function() {
		if (self.existeDicaAtual()) {
			_shepherdTour.getCurrentStep().destroy();
		}
	};

	self.aoCancelarDica = function(idDaPaginaParaLocalStorage) {
		_shepherdTour.on("cancel", function() {
			self.marcarParaNaoExibirNovamente(idDaPaginaParaLocalStorage);
		});
	};

	self.marcarParaNaoExibirNovamente = function(idDoLocalStorage) {
		localStorage.setItem(idDoLocalStorage, true);
	};

	self.marcarParaExibir = function(idDoLocalStorage) {
		localStorage.setItem(idDoLocalStorage, false);
	};

	self.existeDicaAtual = function() {
		return _shepherdTour.getCurrentStep() != undefined;
	};

	self.ajudaJaFoiUtilizada = function(idDoLocalStorage) {
		var valorGravado = localStorage.getItem(idDoLocalStorage) || "false";
		return JSON.parse(valorGravado);
	};
}