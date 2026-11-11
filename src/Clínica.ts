import Cachorro from "./Cachorro"
import Gato from "./Gato"
import Ave from "./Ave"
import Veterinario from "./Veterinario"
import Recepcionista from "./Recepcionista"
import Animal from "./Animal"
import Funcionario from "./Funcionario"
import Consulta from "./Consulta"


class Clinica {
    constructor(public nome: string) {}
    private animal: Animal[] = [];
    private funcionario: Funcionario[] = [];
    private Consulta: Consulta[] = [];
    
    adicionarAnimal(animal: Animal): void { this.animal.push(animal); }
    adicionarFuncionario(funcionario: Funcionario): void { this.funcionario.push(funcionario); }
    marcarConsulta(consulta: Consulta): void { this.Consulta.push(consulta); }
};
