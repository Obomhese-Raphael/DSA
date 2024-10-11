function reversedString(string) {
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return reversedString;
}

const reverseString = (string) => {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
};

console.log(reverseString("pneumonoultramicroscopicsilicovolcanoconiosis"));

console.log(reverseString("Good Morning!"));

console.log(reversedString("Hello world!"));

console.log(reversedString("Obomhese!"));
