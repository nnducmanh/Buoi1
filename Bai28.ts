class AnimalProtected {
    protected makeSound(): void {
        console.log("Tiếng kêu động vật");
    }
}

class DogOverride extends AnimalProtected {
    public overrideMakeSound(): void {
        this.makeSound();
    }

    protected override makeSound(): void {
        console.log("Gâu gâu");
    }
}

const DogOverride1 = new DogOverride();
DogOverride1.overrideMakeSound();
