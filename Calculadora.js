class Calculadora {
a;
b;

    constructor(a,b){
    this.a = a
    this.b = b
}
    soma(){
        return parseInt(this.a) + parseInt(this.b)
    }
    subtracao (){
        return parseInt(this.a) - parseInt(this.b)
    }
    multiplicacao (){
        return parseInt(this.a) * parseInt(this.b)
    }
    divisao (){
        return parseInt(this.a)/ parseInt(this.b)
    }
}

