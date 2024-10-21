// 
// const car = {
//     make: 'Honda',
//     model: 'Civic',
//     color: 'Black',
//     drive(){
//         console.log('vroom vroom');
//     },
//     gps(location) {
//         console.log(`Driving tp ${location}`);
//     },
//     paint(NewColor) {
//         console.log(`Driving to ${location}`);
//     },
// }

// Class is a blueprint to create new objects
// Each class will have a constructor. A constructor is what sets up the class properties
// "this" will point to the specific named property (.blahblah) inside created object

// class Car {
//     constructor(model, color){
//     this.model = model;
//     this.color = color;
//     this.fuel = 100;
//     }
// drive() {
//     this.fuel--;
//     return 'Vroom!'
//     }
//     refuel() {
//         this.fuel = 100;
//     }

// }

// // creating a new object called civic using the class above
// const civic = new Car('Honda Civic', 'Black');
// console.log(civic)
// const corolla = new Car('Toyota Corolla', 'Silver');
// console.log(corolla);

// The 4 Pillars of OOP (This also applies to Java)
// Encapsulation - when you store all of the object's info inside
// Inheritance - an object inherits properties from another class. Even subclasses can inherit from the parent class
// Abstraction - information about an object that you need to know
// Polymorphism - more than one change

// class Animal {
//     constructor(name, breed) {
//         this.name = name; 
//         this.breed = breed;
//         this.diet = [];
//     }
//     eat(food) {
//         this.diet.push(food);
//     }
// }

// const dog = new Animal('Fido', 'German Shepherd');

// wants to create a class called Dog that inherits properties from Animal
// super class is the parent class
// class Dog extends Animal {
//  constructor(name, breed, tail) {
//     super(name, breed);
//     this.waggingTail = tail;
//     }
//     bark(){
//         return `Bark! Hello, this is dog. My name is ${this.name}`;
//     }
// }

// class Cat extends Animal {
//     constructor(name, breed, numLives) {
//         super(name, breed);
//         this.numLives = numLives;
//     }
//     meow() {
//         return `Meow! I am a cat! My name is ${this.name}`
//     }
// }

// const fido = new Dog('Fido', 'German Shepherd', true);
// console.log(fido)



// LAB

// Bank account exercise 
class BankAccount {
    constructor(type,money, backupAccount = null){
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
        this.backupAccount = backupAccount;
    }
    withdraw(amount) {
        // balance right before deduction
        const previousBalance = this.money
        this.money = this.money - amount;

    }

    this.transactionHistory.push({
        previousBalance: previousBalance,
        transactionType: 'withdrawal',
        transactionAmount: amount,
        endingBalance: this.money
    })

    if (this.money < 0) {
        const overdrawnAmount = this.money * -1;
        // withdraw from backup
        this.backupAccount.withdraw(overdrawnAmount)
        // deposit to account
        this.deposit(overdrawnAmount)
        console.log('overdraft')
    }

    deposit(depo){
        const previousBalance = this.money;
        this.money = this.money + depo;

        this.transactionHistory.push({
            previousBalance: previousBalance,
            transactionType: "deposit",
            transactionAmount: depo,
            endingBalance: this.money
        })
    }

    showBalance() {
        return this.money;
    }

}

const savingsAccount = new BankAccount('savings', 1000)
const checkingAccount = new BankAccount('checking', 1000, savingsAccount)

console.log(savingsAccount)
// console.log(checkingAccount)

console.log(checkingAccount.withdraw(1100));
console.log(checkingAccount.showBalance())
console.log(checkingAccount)

// const checkingAccount = new BankAccount('checking', 1000);
// console.log(checkingAccount)
// checkingAccount.withdraw(200)
// console.log(checkingAccount.showBalance());

