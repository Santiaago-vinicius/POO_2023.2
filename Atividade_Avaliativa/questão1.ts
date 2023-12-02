//Podemos instanciar classes abstratas? Justifique.
/* reposta: não é possivel instancia-las diretamente, pois classes abstradas 
são destinadas a serem herdadas por outras, não pode ser instanciada por sí só.


exemplo: */
abstract class Animal {
    abstract fazerBarulho(): void

    mover(): void {
        console.log("Movendo-se...")
    }
}

class Cachorro extends Animal {
    fazerBarulho(): void {
        console.log("Au au!")
    }
}

class Gato extends Animal {
    fazerBarulho(): void {
        console.log("Miau!")
    }
}

// Tentativa de instanciar a classe abstrata
const animal = new Animal() // Isso resultará em um erro

