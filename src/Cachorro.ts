import Animal from "./Animal"

export default class Cachorro extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Au Au (latir"); }
    cuidados(): void { console.log("Passear"); }
}
