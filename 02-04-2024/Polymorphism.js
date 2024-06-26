/* Function overloading is a mechanism or ability to create multiple methods with the same name
but different parameter types and return type */
// function add(val1: number, val2: number): number;
// function add(val1: string, val2: string): string;
function add(val1, val2) {
    return val1 + val2;
}
function multiply() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var product = 1;
    args.forEach(function (val) {
        product *= val;
    });
    return product;
}
console.log(add("hello ", "World"));
console.log(add(1, 2));
console.log("hello ", 2);
console.log(multiply(2, 3, 4, 5));
