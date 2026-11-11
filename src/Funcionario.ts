export default abstract class Funcionario {
    constructor(
        public nome: string,
        public matricula: string,
        private salario: number
    ) {}
    getSalario(): number { return this.salario; }
    setSalario(valor: number): void { if(valor > 0) this.salario = valor; }
    abstract calcularBonus(): number;
}
