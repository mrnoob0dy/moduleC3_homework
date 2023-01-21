//#4

function ElecticalAppliance(name, power) {
    this.name = name
    this.power = power
    this.isPlugged = false
}

ElecticalAppliance.prototype.plugin = function() {
    console.log(`${this.name} is plugged!`)
    this.isPlugged = true
}

ElecticalAppliance.prototype.unplug = function() {
    console.log(`${this.name} is unplugged!`)
    this.isPlugged = false
}


function Lamp(name, brand, power, cost) {
    this.name = name
    this.brand = brand
    this.power = power
    this.cost = cost
    this.isPlugged = true
}
Lamp.prototype = new ElecticalAppliance()

function Computer(name, brand, power, cost) {
    this.name = name
    this.brand = brand
    this.power = power
    this.cost = cost
    this.isPlugged = true
}
Computer.prototype = new ElecticalAppliance()

const tableLamp = new Lamp('Lamp', 'Xiaomi', 10, '30$')
const myPc = new Computer('My Computer', 'AMD', 300, '1000$')

tableLamp.unplug()
myPc.plugin()

console.table(myPc)
console.table(tableLamp)