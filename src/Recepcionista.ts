import Funcionario from "./Funcionario"

export default class Recepcionista extends Funcionario {
    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
    }
    calcularBonus(): number { return 50; }
    agendar(): void { console.log("Agendando..."); }
}