// Write a function that takes an array of numbers and returns a new array containing only the prime numbers.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getPrimeNumbers(arr) {
    let primeNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;

        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers;
}

console.log("Prime Numbers:", getPrimeNumbers(numbers));