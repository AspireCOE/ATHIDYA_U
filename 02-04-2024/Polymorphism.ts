/* Function overloading is a mechanism or ability to create multiple methods with the same name 
but different parameter types and return type */

// function add(val1: number, val2: number): number;
// function add(val1: string, val2: string): string;
function add(val1: any, val2: any): any {
    return val1 + val2;
}
function multiply(...args: number[]): number {
    let product: number = 1;
    args.forEach((val) => {
        product *= val;
    });
    return product;
}

console.log(add("hello ", "World"));
console.log(add(1, 2));
console.log("hello ", 2);
console.log(multiply(2, 3, 4, 5));
