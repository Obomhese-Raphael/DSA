// The rules are simple:
// Iterate through a range of numbers (often from 1 to 100).
// For numbers divisible by 3, print "Fizz".
// For numbers divisible by 5, print "Buzz".
// For numbers divisible by both 3 and 5, print "FizzBuzz".
// For other numbers, print the number itself.

const fizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(`Where i is ${i}`)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(10);
