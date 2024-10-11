 
const reverseString = (string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  let reversedString = "";
  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const reversedString = reverseString("ObomheseR");
console.log(reversedString);
