function BootstrapTourAdapter() {
  var self = this;
  var comPlanoDeFundo = true;
  var _bootstrapTour = {};

  var constructor = (function() {
    _bootstrapTour = new Tour({
      backdrop: comPlanoDeFundo,
      template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-default" data-role="prev">&laquo; Anterior</button> <button class="btn btn-sm btn-default" data-role="next">Próximo &raquo;</button> <button class="btn btn-sm btn-default" data-role="pause-resume" data-pause-text="Pausar" data-resume-text="Continuar">Pausar</button> </div> <button class="btn btn-sm btn-default" data-role="end">Encerrar</button> </div> </div>'
    });
  })();

  self.adicionarDica = function(dica) {
    _bootstrapTour.addStep(dica.construir());
  };

  self.adicionarDicas = function(dicas){
    dicas.forEach(function(dica){
        _bootstrapTour.addStep(dica.construir());
    });
  }

  self.iniciar = function() {
    console.log(_bootstrapTour);
    _bootstrapTour.init();
    _bootstrapTour.start();
  };

  self.reiniciar = function() {
    _bootstrapTour.restart();
  };

  self.definirTemplate = function(template) {
    _bootstrapTour._options.template = template;
  };
}
