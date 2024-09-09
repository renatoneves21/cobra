const cobra = {
    x: [100],
    y: [100],
    tamanho: 10,
    comprimento: 10,
    taxaCrescimento: 100,
    cor: "black",
    corSecundaria: "yellow",
    direcao: 0,
    vida: 3,
    comeuPrimeiroAlimento: false,
    desenhar() {
        for (let i = 0; i < this.x.length; ++i) {
            if (this.comeuPrimeiroAlimento && i > 0) {
                
                canvasCtx.fillStyle = (i % 2 === 0) ? this.cor : this.corSecundaria;
            } else {
                canvasCtx.fillStyle = this.cor;
            }
            canvasCtx.fillRect(this.x[i], this.y[i], this.tamanho, this.tamanho);
        }
    },

    mover() {
        if (this.direcao == 0) {
            this.x.unshift(this.x[0] + 1);
            this.y.unshift(this.y[0]);
            this.x.pop();
            this.y.pop();
        }
        if (this.direcao == 90) {
            this.x.unshift(this.x[0]);
            this.y.unshift(this.y[0] + 1);
            this.x.pop();
            this.y.pop();
        }
        if (this.direcao == 180) {
            this.x.unshift(this.x[0] - 1);
            this.y.unshift(this.y[0]);
            this.x.pop();
            this.y.pop();
        }
        if (this.direcao == 270) {
            this.x.unshift(this.x[0]);
            this.y.unshift(this.y[0] - 1);
            this.x.pop();
            this.y.pop();
        }
        if ((this.x[0] > tela.largura - this.tamanho) ||
            (this.x[0] < 0) ||
            (this.y[0] < placar.altura) ||
            (this.y[0] > placar.altura + tela.altura - this.tamanho) ||
            (this.seComeu())) {
            this.morrer();
        }
    },

    morrer() {
        this.vida--;
        this.x = [400];
        this.y = [260];
        if (this.vida == 2) this.cor = "orange";
        if (this.vida == 1) this.cor = "red";
    },

    crescer() {
        for (let i = 0; i < this.taxaCrescimento; ++i) {
            this.x.unshift(this.x[0]);
            this.y.unshift(this.y[0]);
        }
        this.comprimento += this.taxaCrescimento;
        this.comeuPrimeiroAlimento = true;
    },

    seComeu() {
        if (this.x.length > 1) {
            if ((this.x[this.tamanho] != this.x[this.tamanho + 1]) || (this.y[this.tamanho] != this.y[this.tamanho + 1]))
                for (let i = 3 * this.tamanho; i < this.x.length; ++i) {
                    const distX = this.x[i] - this.x[0];
                    const distY = this.y[i] - this.y[0];
                    if ((Math.abs(distX) < (this.tamanho - 5)) &&
                        (Math.abs(distY) < (this.tamanho - 5)))
                        return true;
                }
        }
        return false;
    }
};

