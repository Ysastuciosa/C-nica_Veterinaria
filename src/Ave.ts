import Animal from "./Animal"

export default class Ave extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Piu Piu Piu"); }
    cuidados(): void { console.log("ter uma gaiola"); }
}