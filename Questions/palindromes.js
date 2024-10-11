function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

const isAPalindrome = (string) => {
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return string === reversedString;
};

console.log(isPalindrome("radar"));
console.log(isAPalindrome("peter"));
