export default abstract class Animal {
    constructor(
        public nome: string,
        public idade: number,
        public tutor: string
    ) {}
    abstract som(): void;
    abstract cuidados(): void;
}