const capitalizeFirstLetter = (string) => {
  const words = string.split(" ");
  const capitalizedWords = words.map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedWords.join(" ");
};
 
// ["hello", "world"]


console.log(capitalizeFirstLetter("hello world!"));
console.log(capitalizeFirstLetter(""));