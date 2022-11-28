export default class Person {
    private name:string;
    private age:number;
    
    constructor(n:string, a:number) {
        this.name = n;
        this.age = a;
    }

    getName() :string {
        return this.name;
    }

    getAge() :number {
        return this.age;
    }
}


let p1:Person ; // "this" refers to "p1"

let p2:Person; // "this" refers to "p2"

// rahulAcc.deposit();

// deposit() { this.balance = 10000;} here this refers to rahulAcc

// swethaAcc.deposit();
// deposit() { this.balance = 10000;} here this refers to swethaAcc