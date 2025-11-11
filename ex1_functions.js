
/**
 * TODO 1: Create a function called 'multiply' that takes in 3 parameters 
 * and multiplies all 3 numbers together.
 * Note: The argument passed must NOT be the same number.
 */
function multiply(num1, num2, num3) {
    // Check if all three numbers are the same
    if (num1 === num2 && num2 === num3) {
        return "Error: All three numbers must not be the same!";
    }
    // Multiply all three numbers and return the result
    return num1 * num2 * num3;
}

/**
 * TODO 2: Create a function expression called 'convertToSeconds' 
 * that takes in a number of minutes and returns the amount in seconds.
 */
const convertToSeconds = function(minutes) {
    // 1 minute = 60 seconds
    return minutes * 60;
};

/**
 * TODO 3: Create a function called fahrenheitToCelsius 
 * that takes temperature in Fahrenheit and returns the equivalent in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    // Formula: (F - 32) * 5/9
    return (fahrenheit - 32) * 5/9;
}

/**
 * TODO 4: Create a function that takes a string as a parameter 
 * and returns the reverse of the string.
 */
function reverseString(str) {
    // Method 1: Using built-in methods
    // return str.split('').reverse().join('');
    
    // Method 2: Using a loop (more educational)
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

/**
 * TODO 5: Create a function that takes in a string 
 * and returns the number of vowels in the sentence.
 */
function countVowels(str) {
    // Convert string to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    let vowelCount = 0;
    
    // Define what characters are vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Loop through each character and count vowels
    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

/**
 * TODO 6: Create an "isPrime" function that takes a number as a parameter 
 * and returns true if the number is prime, and false otherwise.
 */
function isPrime(number) {
    // Prime numbers are greater than 1
    if (number <= 1) {
        return false;
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Found a divisor, not prime
        }
    }
    
    return true; // No divisors found, it's prime
}

