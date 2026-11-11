import Animal from "./Animal"
import Veterinario from "./Veterinario"

export default class Consulta {
    constructor(
        public animal: Animal,
        public veterinario: Veterinario,
        public data: Date
    ) {}
    realizarConsulta(): void { console.log("Consulta realizada"); }
}

