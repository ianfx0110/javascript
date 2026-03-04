// JavaScript questions

// 1. Sum of all numbers in an array
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2. Largest number in an array
function maxInArray(arr) {
  if (arr.length === 0) return null;
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// 3. Count how many even numbers are in an array
function countEvens(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) count++;
  }
  return count;
}

// 4. Index of the first negative number, or -1 if none
function firstNegativeIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;
  }
  return -1;
}

// 5. Return a new array with only the positive numbers
function positivesOnly(arr) {
  var res = [];
  var resLen = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res[resLen] = arr[i];
      resLen++;
    }
  }
  return res;
}

// 6. Check if a given number exists in an array
function containsNumber(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

// 7. Smallest number in the array
function minInArray(arr) {
  if (arr.length === 0) return null;
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// 8. Count how many times a specific value appears in an array
function countOccurrences(arr, val) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) count++;
  }
  return count;
}

// 9. Return true if all numbers are greater than 10
function allGreaterThan10(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] > 10)) return false;
  }
  return true;
}

// 10. Sum of all odd numbers in an array
function sumOddNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) % 2 === 1) sum += arr[i];
  }
  return sum;
}

// 11. Average of the numbers in an array
function averageArray(arr) {
  if (arr.length === 0) return null;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}

// 12. Difference between largest and smallest numbers
function rangeDifference(arr) {
  if (arr.length === 0) return null;
  var min = arr[0];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return max - min;
}

// 13. Return a new array with all numbers multiplied by 2
function multiplyByTwo(arr) {
  var res = [];
  var resLen = 0;
  for (var i = 0; i < arr.length; i++) {
    res[resLen] = arr[i] * 2;
    resLen++;
  }
  return res;
}

// 14. Return the last element of an array
function lastElement(arr) {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

// 15. Given an array and a number, return true if the number is found at an even index
function foundAtEvenIndex(arr, num) {
  for (var i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0 && arr[i] === num) return true;
  }
  return false;
}

// 16. Count how many numbers in an array are greater than a given value
function countGreaterThan(arr, threshold) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > threshold) count++;
  }
  return count;
}

// 17. Sum of numbers at even indexes in an array
function sumAtEvenIndexes(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) sum += arr[i];
  }
  return sum;
}

// 18. Return true if the array is sorted in ascending order
function isSortedAscending(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

// 19. Return the second largest number (distinct). If not present, return null.
function secondLargest(arr) {
  if (arr.length < 2) return null;
  var largest = -Infinity;
  var second = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val > largest) {
      second = largest;
      largest = val;
    } else if (val > second && val < largest) {
      second = val;
    }
  }
  return (second === -Infinity) ? null : second;
}

// 20. Number of elements that are both positive and even
function countPositiveEven(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) count++;
  }
  return count;
}

// 21. Count how many times a specific character appears in a string
function countChar(str, ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ch) count++;
  }
  return count;
}

// 22. Return number of vowels in a string (both lowercase and uppercase counted)
function countVowels(str) {
  var vowels = { a: true, e: true, i: true, o: true, u: true,
                 A: true, E: true, I: true, O: true, U: true };
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels[str[i]]) count++;
  }
  return count;
}

// 23. Reverse a string and return the reversed version
function reverseString(str) {
  var res = '';
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// 24. Check if a string is a palindrome (case-sensitive)
function isPalindrome(str) {
  var len = str.length;
  for (var i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

// 25. Count the number of words in a string, assuming words are separated by a single space
function countWordsSingleSpace(str) {
  if (str.length === 0) return 0;
  // If string starts or ends with space, and user promised single-space separation,
  // those would imply empty "words"; here we assume clean input with no leading/trailing spaces.
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') count++;
  }
  return count;