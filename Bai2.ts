import {Person} from './Bai1';

export class Student extends Person{
    public grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade=grade;
    }

    displayInfo(): void {
        // super.displayInfo();
        console.log(`Lớp : ${this.grade}`);
    }
}

const Student1 = new Student("Nguyen Ngo Duc Manh",21,"DHKTPM19BTT");
Student1.displayInfo();