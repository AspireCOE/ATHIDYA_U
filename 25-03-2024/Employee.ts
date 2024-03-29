class Employee {
    constructor(empId: number, empName: string) {}
}
class Manager extends Employee {
    constructor(empId: number, empName: string) {
        super(empId, empName);
    }
}

let manager = new Manager(1, "manager");

class Parent {
    name: string;
    constructor(name) {
        this.name = name;
        console.log("Parent name is : " + this.name);
    }
}
class Child extends Parent {
    displayChild(): void {
        console.log("Child name is : " + this.name);
    }
}

let child = new Child("hello");
console.log(child.name);

var a = [1, null, NaN, "abc", true];
