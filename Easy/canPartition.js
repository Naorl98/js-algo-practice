//O(n) solution 
function canPartition(arr) {
  let totalProduct = 1
  let zeroCount = 0
  if (arr.length < 2) return false
  for (let num of arr) {
    if (num === 0) {
      zeroCount++
      if (zeroCount > 1) return true
    }
    totalProduct *= num
  }
  if (zeroCount === 1 ) return false
  else{
  for (let num of arr) {
    if (totalProduct / num === num) return true
    }
  }
  return false
}
//O(n^2) solution 
// function canPartition(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i]
//     let product = 1
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== i) product *= arr[j]
//     }
//     if (num === product) return true
//   }
//   return false
// }

exports.solution = canPartition
