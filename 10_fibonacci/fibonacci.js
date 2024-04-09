function fibonacci(n) {
    // Convert string input to number
    if (typeof n === 'string') {
        n = parseInt(n);
    }

    // Check for negative input
    if (n < 0) {
        return "OOPS";
    }

    // Initialize Fibonacci sequence
    let fib = [0, 1];

    // Calculate Fibonacci numbers
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

// Do not edit below this line
module.exports = fibonacci;
