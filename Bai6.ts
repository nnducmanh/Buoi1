class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) { }

    display() : void{
        console.log(`Tiêu đề : ${this.title}, Tác Giả : ${this.author}, Năm xuất bản : ${this.year}`)
    }
}

const Book1 = new Book("Tiên nghịch", "Nhĩ Căn",2011)
Book1.display()
