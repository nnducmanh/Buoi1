class Employee {
    constructor(public id: number, public name: string) { }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} đang quản lý dự án.`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} đang viết mã nguồn.`);
    }
}

const Manager1 = new Manager(12,"Nguyen Ngo Duc Manh");
const Developer1 = new Developer(14,"Nguyen Trung Kien");

Manager1.manage();
Developer1.code();
