class Rectangle {
    constructor(private width: number, private height: number) { }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }
}

const Rectangle1 = new Rectangle(3,5);

console.log(`Diện tích là : ${Rectangle1.getArea()}`);
console.log(`Chu vi là : ${Rectangle1.getPerimeter()}`);