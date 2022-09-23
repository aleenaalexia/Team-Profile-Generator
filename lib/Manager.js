const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
   // calls parent constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNum () {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;