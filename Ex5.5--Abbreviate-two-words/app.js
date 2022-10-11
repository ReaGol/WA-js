//? Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//? The output should be two capital letters with a dot separating them.
//? It should look like this:
//? Sam Harris => S.H
//? Patrick Feeney => P.F

// remove first letter from each word

// concat letters together, uppercased, with a dot in the middle

function initials(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase().slice(-1);
  }
  return str.join(".");
}

console.log(initials("joe rogan"));
