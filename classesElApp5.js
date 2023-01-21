//#5

class ElecticalAppliance {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.isPlugged = false
    }

    plugIn() {
        console.log(`${this.name} is plugged!`)
        this.isPlugged = true
    }

    unplug() {
        console.log(`${this.name} is unplugged!`)
        this.isPlugged = false
    }
}


class Lamp extends ElecticalAppliance {
    constructor(name, brand, power, cost) {
        super(name, power)
        this.brand = brand
        this.cost = cost
        this.isPlugged = true
    }
}

class Computer extends ElecticalAppliance {
    constructor(name, brand, power, cost) {
        super(name, power)
        this.brand = brand
        this.cost = cost
        this.isPlugged = false
    }
}

const tableLamp = new Lamp('Lamp', 'Xiaomi', 10, '30$')
const myPc = new Computer('My Computer', 'AMD', 300, '1000$')

tableLamp.plugIn()
myPc.plugIn()

console.table(myPc)
console.table(tableLamp)