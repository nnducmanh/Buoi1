class Person{
    public name: String;
    public age: number;

    constructor(name : String, age: number){
        this.name= name;
        this.age = age;
    }   
    displayInfo() : void{
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}`)
    }
}

const Person1 = new Person("Nguyen Ngo Duc Manh",21);
Person1.displayInfo();
