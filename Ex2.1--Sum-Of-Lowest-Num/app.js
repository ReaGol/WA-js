//? Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//? For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//? [10, 343445353, 3453445, 3453545353453] should return 3453455.
arr = [19, 5, 42, 2, 77];

function sumOfLowestNums(arr) {
  let lowestNum;
  let secondLowestNum;
  let sum = 0;
  if (arr[0] < arr[1]) {
    lowestNum = arr[0];
    secondLowestNum = arr[1];
  } else {
    lowestNum = arr[1];
    secondLowestNum = arr[0];
  }
  for (let i = 2; i <= arr.length; i++) {
    if (lowestNum > arr[i]) {
      secondLowestNum = lowestNum;
      lowestNum = arr[i];
    }
    if (lowestNum < arr[i]) {
      if (secondLowestNum > arr[i]) {
        secondLowestNum = arr[i];
      }
    }
  }
  sum = secondLowestNum + lowestNum;
  return sum;
}
sumOfLowestNums(arr);
