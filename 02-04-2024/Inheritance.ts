class ParentClass {
    displayParent(): void {
        console.log("Parent");
    }
}
class ChildClass extends ParentClass {
    displayChild(): void {
        console.log("Child");
    }
}

// single inheritance
console.log("Single level inheritance");
let singleInheritance = new ChildClass();
singleInheritance.displayParent();
singleInheritance.displayChild();
console.log();
//

class GrandChildClassOne extends ParentClass {
    displayGrandChild(): void {
        console.log("Grand Child 1");
    }
}

// multilevel inheritance
console.log("Multi level inheritance");
let multilevel = new GrandChildClassOne();
multilevel.displayParent();
multilevel.displayGrandChild();
console.log();
//

class GrandChildClassTwo extends ChildClass {
    displayGrandChild(): void {
        console.log("Grand child 2");
    }
}

// hierarchial inheritance
console.log("Hierarchial inheritance");
let hierarchial = new GrandChildClassTwo();
hierarchial.displayParent();
hierarchial.displayChild();
hierarchial.displayGrandChild();
console.log();
//

// multiple inheritance
console.log("Multiple inheritance is not possible");
