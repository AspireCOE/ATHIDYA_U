// Number declaration
// let empNo:number=20

// boolean
// string

// Array declaration
// let products:Array<string>=[]
// 1et products: string[]=[]

// enum
// enum Gender{M, F}
// let empGender:Gender = M
// using Gender as datatype it can value to M or F

// Class
class Employee {
    // specifier varriableName:datatype
    private empId: number;
    public empName: string;

    constructor(
        empId: number,
        empName: string,
        empDept?: string,
        empSalary = 2000
    ) {
        // constructor name is not defined as class name
        // just as constructor()
        // empDept is optional parameter
        // empSalary is default parameter
    }

    // specifier methodName():returnType(){}
    public display(): void {
        console.log(this.empId);
        console.log(this.empName);
    }

    total(...salary: number[]): number {
        // this is rist operator
        // reverse is spread operator
        // stores all parameter in salary array
        let total = 0;
        salary.forEach((sal) => {
            total += sal;
        });
        return total;
        // call as console.log(objectname.total(1000, 2000, 3000, 4000));
    }
}

// object
// let employee = new Employee();
