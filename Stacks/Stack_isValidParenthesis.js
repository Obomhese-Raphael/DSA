// isValidParenthesis("") should return true if string is a valid parenthesis

const isValidParenthesis = (string) => {
  const stack = []; // store the opening bracket during the iteration
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  }; // associating each opening brackets with their closing brackets

  // The function iterates through each character in the input string.
  for (let char of string) {
    // If the current character is an opening bracket (found in the brackets object), it's pushed onto the stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // If the current character is a closing bracket, the following steps are taken:
      // const topOfStack = stack.pop();: The top element is popped from the stack.
      const topOfStack = stack.pop();

      // if (!topOfStack || brackets[topOfStack] !== char) { ... }: If the stack is empty or the popped element doesn't match the current closing bracket, the function returns false, indicating invalid parentheses
      if (!topOfStack || brackets[topOfStack] !== char) {
        return false;
      }
    }
  }

  // After iterating through the entire string, the function checks if the stack is empty. If it's empty, it means all opening brackets were matched with their corresponding closing brackets, and the function returns true. Otherwise, it returns false.
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false
console.log(isValidParenthesis("([{}])")); // true
