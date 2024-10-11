// {hello: 1, my: 1, name: 3, is: 1, Raphael: 1}

const wordCounter = (text) => {
  const lowerTexts = text.toLowerCase();
  const words = lowerTexts.split(/\s+/);
  const wordMap = {};

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
};

// Test the function with a sample text
const text =
  "Fear leads to anger; anger leads to hatred; hatred leads to conflict; conflict leads to suffering";
console.log(wordCounter(text));
