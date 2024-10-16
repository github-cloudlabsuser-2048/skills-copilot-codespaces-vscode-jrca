class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    calculate(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation.");
        }
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.calculate('add', 5, 3));       // Output: 8
console.log(calculator.calculate('subtract', 5, 3));  // Output: 2
console.log(calculator.calculate('multiply', 5, 3));  // Output: 15
console.log(calculator.calculate('divide', 6, 3));    // Output: 2