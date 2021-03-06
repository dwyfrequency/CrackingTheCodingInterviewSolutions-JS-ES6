// Time O(n log(n)) | Space O(n)
// n log(n) b/c of the sort -> merge sort/quick sort is average case n log(n)
var checkPermuteSlow = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne
      .split('')
      .sort()
      .join('');
    var sortedStringTwo = stringTwo
      .split('')
      .sort()
      .join('');
    return sortedStringOne === sortedStringTwo;
  }
};

/* Given two strings, write a method to decide if
 one is a permutation of the other. */
// Time O(n) | Space O(n)
const checkPermute = (str1, str2) => {
  // store counter of letters encountered
  if (str1.length !== str2.length) return false;
  const hashMap = {};
  for (const ch of str1) {
    // for each letter increment count by 1
    if (hashMap[ch]) hashMap[ch] += 1;
    // initialize to one
    else hashMap[ch] = 1;
  }
  for (const ch of str2) {
    // reduce count when found
    if (hashMap[ch]) hashMap[ch] -= 1;
    // if negative or zero, we've already run out of characters in orig return F
    else if (hashMap[ch] <= 0) return false;
    else return false;
  }
  return true;
};

module.exports = {
  checkPermute,
};
