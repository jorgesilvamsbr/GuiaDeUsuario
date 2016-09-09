function Dica(elemento, titulo, descricao) {
  var self = this;
  var posicao = "right";

  var constructor = (function() {
    self.titulo = titulo;
    self.descricao = descricao;
    self.elemento = elemento;
  })();

  self.construir = function() {
    return {
      element: self.elemento,
      title: self.titulo,
      content: self.descricao,
      placement: self.posicao
    }
  };

  self.alinharParaDireita = function() {
    self.posicao = "right";
  };

  self.alinharParaEsquerda = function() {
    self.posicao = "left";
  };

  self.alinharParaCima = function() {
    self.posicao = "top";
  };

  self.alinharParaBaixo = function() {
    self.posicao = "bottom";
  };

  return self;
}
