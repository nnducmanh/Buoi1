import {Person} from './Bai1';

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): void {
        console.log(`Xin chào, tôi là giáo viên ${this.name}, dạy môn ${this.subject}.`);
    }
}

const Teacher1 = new Teacher("Nguyễn Ngô Đức Mạnh",20,"WWW")

Teacher1.introduce()