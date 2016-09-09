function BootstrapTourAdapter() {
  var self = this;
  var comPlanoDeFundo = true;
  var _bootstrapTour = {};

  var constructor = (function() {
    _bootstrapTour = new Tour({
      backdrop: comPlanoDeFundo,
      storage: false
    });
    return self;
  })();

  self.adicionarDica = function(dica) {
    _bootstrapTour.addStep(dica.construir());
  };

  self.iniciar = function() {
    _bootstrapTour.init();
    _bootstrapTour.start();
  }
}
