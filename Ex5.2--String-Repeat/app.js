//? Write a function called repeat_str which repeats the given string src exactly count times.
//? repeatStr(6, "I") // "IIIIII"
//? repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr(count, str) {
  let result = str.repeat(count);
  return result;
}

repeatStr(3, "cry");