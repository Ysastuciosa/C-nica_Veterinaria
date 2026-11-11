import Funcionario from "./Funcionario"

export default class Veterinario extends Funcionario {
    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
    }
    calcularBonus(): number { return 100; }
    consultar(): void { console.log("consultando..."); }
}