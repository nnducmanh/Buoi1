class User {
    private _name: string = "";

    get name(): string { return this._name; }
    set name(value: string) {
        if (value.length > 0) this._name = value;
    }
}
