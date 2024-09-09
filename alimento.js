class Alimento extends ObjetoJogo {
    static tiposDeAlimento = [
        { arqImagem: 'alimento1.png', valor: 10 },
        { arqImagem: 'alimento2.png', valor: 20 },
        { arqImagem: 'alimento3.png', valor: 30 }
    ];

    #imagem;
    valor;

    constructor(...args) {
        super(...args);
        const tipoAleatorio = Alimento.tiposDeAlimento[
            Math.floor(Math.random() * Alimento.tiposDeAlimento.length)
        ];
        this.arqImagem = tipoAleatorio.arqImagem;
        this.valor = tipoAleatorio.valor;
        this.#imagem = new Image();
        this.#imagem.src = this.arqImagem;
    }

    desenhar() {
        canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}





