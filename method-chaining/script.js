class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
        return this; 
    }

    despedirse() {
        console.log(`Adiós de ${this.nombre}`);
        return this; 
    }
}

const persona = new Persona("Juan");
persona.saludar().despedirse(); // Encadena métodos
