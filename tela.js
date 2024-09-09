const tela = {
    largura: 800,
    altura: 400,
    imagemFundo: new Image(),
    desenhar: function() {
        this.imagemFundo.src = 'fundo.jpg'; 
        this.imagemFundo.onload = () => {
            canvasCtx.drawImage(this.imagemFundo, 0, 60, this.largura, this.altura);
        };
    }
};

tela.desenhar();
