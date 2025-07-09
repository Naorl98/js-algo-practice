function canPartition(arr) {
  let totalProduct = 1
  let zeroCount = 0
  if (arr.length < 2) return false
  for (let num of arr) {
    if (num === 0) {
      zeroCount++
    }
    else{
    totalProduct *= num
    }
  }

  for (let num of arr) {
    if (num === 0) {
      if (zeroCount > 1) return true
      else return false
    } else {
      if (totalProduct / num === num) return true
    }
  }

  return false
}

exports.solution = canPartition
