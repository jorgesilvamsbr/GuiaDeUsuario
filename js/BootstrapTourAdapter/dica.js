function Dica(elemento, titulo, descricao) {
  var self = this;

  var constructor = (function() {
    self.titulo = titulo;
    self.descricao = descricao;
    self.elemento = elemento;
  })();

  self.construir = function() {
    return {
      element: self.elemento,
      title: self.titulo,
      content: self.descricao
    }
  }

  return self;
}
