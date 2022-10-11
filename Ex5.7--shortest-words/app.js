//? Simple, given a string of words, return the length of the shortest word(s).
//? String will never be empty and you do not need to account for different data types.

let string = "abcd efg hijk lmnop"
let words = string.split(" ");
const shortestWord = words.sort((a, b) => {
  return b.length - a.length;
});

shortWord = shortestWord.pop().length;
console.log(shortWord)