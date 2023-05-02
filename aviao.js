let aviao = {
    modelo: "e-195",
    ano: 2002,
    preco: 47000000,
    velocidade: 0,
    velocidadeMax: 800,
    estado: false,

    ligar: function(){
        aviao.estado = true
        console.log("O avião está ligando")
    },

    desligar: function(){
        aviao.estado = false
        console.log("O avião está desligando")
    },
    acelerar : function(){
        console.log("a velocidade atual do avião é de : " + this.velocidade + "km/h");
        if(this.estado && this.velocidade <= this.velocidadeMax){
            this.velocidade += 10
            console.log("Acelerando")
            console.log("a velocidade atual do avião : " + this.velocidade + "km/h")
        }
    },
    desacelerar : function(){
        console.log("a velocidade atual do avião é de : " + this.velocidade + "km/h");
        if(this.estado && this.velocidade <= this.velocidadeMax){
            this.velocidade -= 10
            console.log("Freiando")
            console.log("a velocidade atual do avião : " + this.velocidade + "km/h")
        }
    },
}
aviao.ligar()

aviao.acelerar()


