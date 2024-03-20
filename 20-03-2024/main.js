// traditional function
function normalFunction() {
    var inp = document.getElementById("input1").value;
    alert(inp);
}

// parameterized function
function parameterizedFunction(param) {
    alert(param);
}

// arrow function with no parameter
const arrowFunction = () => {
    var inp = document.getElementById("input3").value;
    alert(inp);
};

// arrow parameterized function
const arrowParameterFunction = (param) => {
    alert(param);
};

// default parameter in function
function defaultParameter(param1, param2 = 2) {
    alert("given parameter = " + param1 + " ; default parameter = " + param2);
}
