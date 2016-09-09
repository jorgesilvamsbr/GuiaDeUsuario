function BootstrapTourAdapter() {
  var self = this;
  var comPlanoDeFundo = true;
  var _bootstrapTour = {};

  self.criar = function() {
    _bootstrapTour = new Tour({
      backdrop: comPlanoDeFundo
    });
    return self;
  };

  self.adicionarDica = function(dica) {
    _bootstrapTour.addStep(dica);
  };

  self.iniciar = function() {
    _bootstrapTour.init();
    _bootstrapTour.start();
  }
}
