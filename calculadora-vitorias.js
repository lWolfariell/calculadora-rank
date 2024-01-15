class calculadoraPartidasRankeadas {
    constructor(jogador, vitorias, derrotas) {
        this.jogador = jogador
        this.vitorias = vitorias
        this.derrotas = derrotas
    }

    determinarMedalha(saldoVitorias) {
       
        if (saldoVitorias < 0) {
            return 'Está Desclassificado!';
        } else if (saldoVitorias <= 10) {
            return 'Ferro!';
        } else if (saldoVitorias <= 20) {
            return 'Bronze!';
        } else if (saldoVitorias <= 50) {
            return 'Prata!';
        } else if (saldoVitorias <= 80) {
            return 'Ouro!';
        } else if (saldoVitorias <= 90) {
            return 'Diamante!';
        } else if (saldoVitorias <= 100) {
            return 'Lendário!';
        } else {
            return 'Imortal!';
        }

    }

    calcularVitorias() {
        const saldoVitorias = this.vitorias-this.derrotas
        const medalhaAtual = this.determinarMedalha(saldoVitorias)
        
        console.log(`O jogador ${this.jogador} com saldo de vitórias ${saldoVitorias} está no nível de ${medalhaAtual}`)        
    }
    

}

const jogador1 = new calculadoraPartidasRankeadas ('Vitor', 5, 6);

jogador1.calcularVitorias()








