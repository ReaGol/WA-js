//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

let answer;
function isBoolean(bool) {
  if (bool === true) {
    answer = "Yes";
  } else {
    answer = "No";
  }
  return answer;
} 

isBoolean(1===1)