window.Dica = function(nome, titulo, texto, anexarEm, posicao, botoes) {
	var self = {};

	self.nome = nome;
	self.titulo = titulo;
	self.texto = texto;
	self.anexarEm = anexarEm;
	self.posicao = posicao;
	self.botoes = botoes;

	return self;
};