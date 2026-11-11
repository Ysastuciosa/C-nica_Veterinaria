abstract class Animal {
    constructor(
        public nome: string,
        public idade: number,
        public tutor: string
    ) {}
    abstract som(): void;
    abstract cuidados(): void;
}

class Cachorro extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Au Au (latir"); }
    cuidados(): void { console.log("Passear"); }
}

class Gato extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Miau mewu"); }
    cuidados(): void { console.log(" Precisa de um arranhador"); }
}

class Ave extends Animal {
    constructor(nome: string, idade: number, tutor: string) {
        super(nome, idade, tutor);
    }
    som(): void { console.log("Piu Piu Piu"); }
    cuidados(): void { console.log("ter uma gaiola"); }
}

abstract class Funcionario {
    constructor(
        public nome: string,
        public matricula: string,
        private salario: number
    ) {}
    getSalario(): number { return this.salario; }
    setSalario(valor: number): void { if(valor > 0) this.salario = valor; }
    abstract calcularBonus(): number;
}

class Veterinario extends Funcionario {
    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
    }
    calcularBonus(): number { return 100; }
    consultar(): void { console.log("consultando..."); }
}

class Recepcionista extends Funcionario {
    constructor(nome: string, matricula: string, salario: number) {
        super(nome, matricula, salario);
    }
    calcularBonus(): number { return 50; }
    agendar(): void { console.log("Agendando..."); }
}

class Consulta {
    constructor(
        public animal: Animal,
        public veterinario: Veterinario,
        public data: Date
    ) {}
    realizarConsulta(): void { console.log("Consulta realizada"); }
}

class Clinica {
    constructor(public nome: string) {}
    private animal: Animal[] = [];
    private funcionario: Funcionario[] = [];
    private consulta: Consulta[] = [];
    
    adicionarAnimal(animal: Animal): void { this.animal.push(animal); }
    adicionarFuncionario(funcionario: Funcionario): void { this.funcionario.push(funcionario); }
    marcarConsulta(consulta: Consulta): void { this.consulta.push(consulta); }
};
