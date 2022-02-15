export class Ingredient {
    public name: string;
    public amount: number;

    constructor (name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // Another way (nice and convenient shortcut)
    //constructor (puplic name: string, public amount: number) {}
}