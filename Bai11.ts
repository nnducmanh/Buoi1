class Animal{
    constructor(public name: string){}
}
class Dog extends Animal{
    bark() : void {
        console.log(`con chó ${this.name} sủa : gâu gâu`);
    }
}
class Cat extends Animal{
    meow() : void{
        console.log(`con mèo ${this.name} kêu : meo meo`)
    }
}

const dog1 = new Dog("Đen");
const cat1 = new Cat("Hoàng thượng")

dog1.bark();
cat1.meow();