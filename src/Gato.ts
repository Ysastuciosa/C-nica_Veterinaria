import Animal from "./Animal"

export default class Gato extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Miau mewu"); }
    cuidados(): void { console.log(" Precisa de um arranhador"); }
}
