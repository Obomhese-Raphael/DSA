const reverseNumber = (number) => {
    const reversedNumber = number.toString().split('').reverse().join('');
    return parseInt(reversedNumber);
}

console.log(reverseNumber(12345)); // Output: 54321
