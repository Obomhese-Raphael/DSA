const countDown = (number) => {
    if (number <= 0) {
        console.log("Countdown complete! 👍");
        return;
    }

    console.log(number);
    countDown(number - 1);
}

countDown(5);

// Using a for loop

const countDownForLoop = (number) => {
    for (let i = number; i >= 1; i--) {
        console.log(i);
    }

    console.log("Countdown complete! 👍");
}

countDownForLoop(5);

// Factorial Function

const factorial = (number) => {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(4));

// Refactored Code

const factorialRefactored = (number) => 
    number === 0 ? 1 : number * factorial(number - 1); 


console.log(factorialRefactored(4));