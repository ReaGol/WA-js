//? There is an array with some numbers. 
// All numbers are equal except for one. Try to find it! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//? findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//? It’s guaranteed that array contains at least 3 numbers.

let arr = [2, 1, 1, 1, 1, 1];

// function findUniqueNum(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] != arr[j]) {
//                 return arr[j]
//             }
//         }
//     }
// }
let arr1 = [1, 1, 1, 5, 1];

function findUniqueNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
      return arr[i];
    } else if (arr[0] !== arr[arr.length - 1]) {
      return arr[arr.length - 1];
    }
  }
}

console.log(findUniqueNum(arr1))


