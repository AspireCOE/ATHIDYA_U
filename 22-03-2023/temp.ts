type myName = {
    id: number;
    name: string;
    city: string;
};

function valueCheck(value) {
    if (typeof value === "string") {
        console.log("String");
    } else if (typeof value === "number") {
        console.log("number");
    } else {
        console.log("others");
    }
}
valueCheck(NaN);

console.log(typeof NaN);
