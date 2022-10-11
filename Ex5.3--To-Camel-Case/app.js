//? Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//? The first word within the output should be capitalized only if the original word was capitalized
//? (known as Upper Camel Case, also often referred to as Pascal case).
//? Examples
//? toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//? toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  wordsArray = str.split("");
  console.log(wordsArray);

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] == "_" || wordsArray[i] == "-") {
      wordsArray[i] = "";
      wordsArray[i+1] = wordsArray[i+1].toUpperCase();
    }
  }
  return wordsArray.join("");
}
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("this_was_fun"));
