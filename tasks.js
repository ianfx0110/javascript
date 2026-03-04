// Q1: Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Q1:", sumArray1([1, 2, 3, 4])); // 10


// Q2: Write a function that takes an array and returns the largest number in the array.
function largestNumber2(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}
console.log("Q2:", largestNumber2([5, 9, 2, 15, 3])); // 15


// Q3: Write a function that counts how many even numbers are in an array.
function countEven3(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) count++;
    }
    return count;
}
console.log("Q3:", countEven3([1, 2, 4, 7, 8])); // 3


// Q4: Write a function that returns the index of the first negative number in an array, or -1 if there are none.
function firstNegativeIndex4(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return i;
    }
    return -1;
}
console.log("Q4:", firstNegativeIndex4([3, 5, -2, 7])); // 2


// Q5: Write a function that takes an array of numbers and returns a new array containing only the positive numbers from the original array.
function positiveNumbers5(arr) {
    let result = [];
    for (let num of arr) {
        if (num > 0) result.push(num);
    }
    return result;
}
console.log("Q5:", positiveNumbers5([-1, 4, -3, 6])); // [4, 6]


// Q6: Write a function that checks if a specific number exists in an array and returns true or false.
function numberExists6(arr, num) {
    for (let value of arr) {
        if (value === num) return true;
    }
    return false;
}
console.log("Q6:", numberExists6([1, 2, 3], 2)); // true


// Q7: Write a function that finds the smallest number in an array.
function smallestNumber7(arr) {
    let smallest = arr[0];
    for (let num of arr) {
        if (num < smallest) smallest = num;
    }
    return smallest;
}
console.log("Q7:", smallestNumber7([9, 4, 6, 2])); // 2


// Q8: Write a function that counts how many times a specific value appears in an array.
function countValue8(arr, value) {
    let count = 0;
    for (let num of arr) {
        if (num === value) count++;
    }
    return count;
}
console.log("Q8:", countValue8([1, 2, 2, 3, 2], 2)); // 3


// Q9: Write a function that checks if all numbers in an array are greater than 10.
function allGreaterThanTen9(arr) {
    for (let num of arr) {
        if (num <= 10) return false;
    }
    return true;
}
console.log("Q9:", allGreaterThanTen9([11, 15, 20])); // true


// Q10: Write a function that returns the sum of all odd numbers in an array.
function sumOdd10(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) sum += num;
    }
    return sum;
}
console.log("Q10:", sumOdd10([1, 2, 3, 4, 5])); // 9


// Q11: Write a function that returns the average of all numbers in an array.
function average11(arr) {
    let sum = 0;
    for (let num of arr) sum += num;
    return arr.length > 0 ? sum / arr.length : 0;
}
console.log("Q11:", average11([2, 4, 6, 8])); // 5


// Q12: Write a function that returns the difference between the largest and smallest numbers in an array.
function difference12(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    for (let num of arr) {
        if (num > largest) largest = num;
        if (num < smallest) smallest = num;
    }
    return largest - smallest;
}
console.log("Q12:", difference12([3, 10, 6, 1])); // 9


// Q13: Write a function that returns a new array with each number multiplied by 2.
function multiplyByTwo13(arr) {
    let result = [];
    for (let num of arr) result.push(num * 2);
    return result;
}
console.log("Q13:", multiplyByTwo13([1, 2, 3])); // [2, 4, 6]


// Q14: Write a function that returns the last element of an array.
function lastElement14(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
console.log("Q14:", lastElement14([7, 8, 9])); // 9


// Q15: Write a function that checks if a specific number exists at an even index in an array.
function foundAtEvenIndex15(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] === num) return true;
    }
    return false;
}
console.log("Q15:", foundAtEvenIndex15([5, 3, 8, 1], 8)); // true


// Q16: Write a function that counts how many numbers in an array are greater than a specific value.
function countGreaterThan16(arr, value) {
    let count = 0;
    for (let num of arr) {
        if (num > value) count++;
    }
    return count;
}
console.log("Q16:", countGreaterThan16([1, 5, 10, 15], 6)); // 2


// Q17: Write a function that returns the sum of all numbers at even indexes in an array.
function sumEvenIndexes17(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) sum += arr[i];
    return sum;
}
console.log("Q17:", sumEvenIndexes17([1, 2, 3, 4, 5])); // 9


// Q18: Write a function that checks if an array is sorted in ascending order.
function isAscending18(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
console.log("Q18:", isAscending18([1, 2, 3, 4])); // true


// Q19: Write a function that returns the second largest number in an array.
function secondLargest19(arr) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}
console.log("Q19:", secondLargest19([10, 20, 5, 8])); // 10


// Q20: Write a function that counts how many positive even numbers are in an array.
function countPositiveEven20(arr) {
    let count = 0;
    for (let num of arr) {
        if (num > 0 && num % 2 === 0) count++;
    }
    return count;
}
console.log("Q20:", countPositiveEven20([-2, 4, 6, -8, 3])); // 2


// Q21: Write a function that counts how many times a specific character appears in a string.
function countCharacter21(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log("Q21:", countCharacter21("hello", "l")); // 2


// Q22: Write a function that counts how many vowels are in a string.

function countVowels22(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let c of str) {
        if (vowels.includes(c)) count++;
    }
    return count;
}
console.log("Q22:", countVowels22("JavaScript")); // 3


// Q23: Write a function that reverses a string.
function reverseString23(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Q23:", reverseString23("hello")); // "olleh"


// Q24: Write a function that checks if a string is a palindrome (reads the same backward as forward).
function isPalindrome24(str) {
    let reversed = reverseString23(str);
    return str === reversed;
}
console.log("Q24:", isPalindrome24("madam")); // true


// Q25: Write a function that counts how many words are in a string.
function countWords25(str) {
    if (str.length === 0) return 0;
    return str.split(" ").length;
}
console.log("Q25:", countWords25("I love JavaScript")); // 3