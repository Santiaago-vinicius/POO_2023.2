class Circulo {
    raio: number = 0;

    calcularArea(): number {
        return 3.14 * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

const circulo = new Circulo();
circulo.raio = 5; 

const area = circulo.calcularArea();
const perimetro = circulo.calcularPerimetro();

console.log(`area do circulo: ${area}`);
console.log(`Perimetro do circulo: ${perimetro}`);