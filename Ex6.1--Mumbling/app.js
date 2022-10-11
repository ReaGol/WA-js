//? This time no story, no theory. The examples below show you how to write function <accum>​:
//? Examples:
//? accum("abcd") -> "A-Bb-Ccc-Dddd"
//? accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
//? accum("cwAt") -> "C-Ww-Aaa-Tttt"
//? The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.
function accum(str) {
  // receive string. make each letter uppercase and then repeat the letter its own index number of times in lowercase
  // with a '-' between each letter
  lettersArray = str.split("");
  let newString = [];
  lettersArray.forEach((letter, i) => {
    letter = letter.toUpperCase();

    newString.push(letter + lettersArray[i].repeat(i).toLowerCase());
  });

  //   console.log(lettersArray);

  return newString.join("-");
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
