const calculate = (a: number, b: number, operation: string): number | string => {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Error: Not Division by zero!";
        default:
            return "Error: Invalid operation!";
    }
};

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 0, "divide")); // Error: Not Division by zero!