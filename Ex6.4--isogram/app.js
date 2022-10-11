//? An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//? Implement a function that determines whether a string that contains only letters is an isogram.
//? Assume the empty string is an isogram.
//? Ignore letter case.
//? isIsogram("Dermatoglyphics") == true
//? isIsogram("aba") == false
//? isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  let word = str.toLowerCase();
  let obj = {};
  result = 0;
  for (let i = 0; i < word.length; i++) {
    if (!obj[word[i]]) {
      obj[word[i]] = 1;
      console.log(obj);
    } else {
      if (obj[word[i]] === 1) {
        result += 1;
        console.log(obj);
      }
      obj[word[i]] += 1;
      console.log(obj[word[i]]);
    }
   
    }
     if (result == 0) {
       return true;
     } else {
       return false;
     }
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
