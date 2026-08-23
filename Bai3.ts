class Car{
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ){}
    show(): void{
        console.log(`xe : ${this.brand} ${this.model} (${this.year})`)
    }
}

const car1 = new Car("Honda","Z1000",2026)
car1.show();