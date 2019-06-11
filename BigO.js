'use strict';

// 1. 
// A. O(1)
// B. O(n)

// 2. O(1) The function only takes in a single value, and only has one check

// 3. O(n^k) This function requires two levels of looping

// 4. O(n) this function iterates over each value in the array and doubles them, so it would take twice as long to complete the process if it had twice as many values

// 5.O(n) it would take twice as long to complete the process if it had twice as many values

// 6. O(n^k) for each value in the array, the function loops twice

// 7. O(n) one loop, fib sequence

// 8.O(log n) max run time is half the amount of values in the array

// 9. O(1)

// 10. O(n) prime number checker

//11.
function TOH(n, src, dest, temp) {
  if (n >= 1) {
    TOH(n - 1, src, temp, dest);
    console.log('Move disk from Tower ', src, ' to Tower ', dest);
    TOH(n - 1, temp, dest, src);
  }

  return;
}

TOH(5, "A", "C", "B");

// 3 discs on tower A, 2 discs on tower C

// with 3 disks:7 4:15 5:31

// (O(2 ^ n))



function countSheep(num){
    //stopping condition of base case
  var i;
  for (i = num; i > -1; i--) { 
    if (i===0)
    {
       console.log(`All sheep jumped over the fence`);
    } else
    {
       console.log(`${num}: Another sheep jump over the fence`);
    }
  }
}

// recursive O notation is O(n)
// iterative is also linear


/*===========================================================================
2. Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
* `powerCalculatorRec(10,2)`  should return `100`
* `powerCalculatorRec(10,-2)`  should return `exponent should be >= 0`
*/

const powerCalculatorRec = function(base, exponent){
    if(exponent < 0){
        return 'exponent should be >= 0';
    }
    else {
         var i;
          for (i = 1; i < exponent; i++) { 
            base=base*base;
          }
        }
    return base;
  
}

// recursive O notation is O(n)
// iterative is also linear


/*=================================================================================
Exercise 3 - Reverse String
Write a program that reverses a string. Take a string as input, 
reverse the string, and return the new string.
Input: 'tauhida'
Output: adihuat
*/

function reverseString(str) {
    var i;
    var newString='';
          for (i = 0; i < str.length; i++) { 
            newString = str.slice(i, i+1)+newString;
          }
    return newString;
}

reverseString('hello')

// recursive O notation is O(n)
// iterative is also linear

/*=================================================================================
Exercise 4 - Triangular Number
Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  
1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15
Input: 5
Output: 15
*/
//Should always return n*(n+1)/2
function triangle(n) {
  var i;
  let result =0;
          for (i = 1; i <=n; i++) { 
            result = result + i;
          }
  return result;
}

triangle(5)
// recursive O notation is O(n)
// iterative is also linear

/*=================================================================================
Exercise 5 - String Splitter
Split a string based upon a separator (similar to String.prototype.split).
Input: '1/21/2018'
Output: 1212018 OR ["1", "21", "2018"]
*/
function split(str, sep) {
    var i;
    var newString='';
          for (i = 0; i < str.length; i++) { 
            if (str[i] !== sep)
            {
              newString += str[i];
            }
          }
    return newString;
}

split('1/21/2018', '/')



function fib(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(1);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

fib(7)

// recursive O notation is O(n)
// iterative is also linear

/*=================================================================================
Exercise 7 - Factorial
Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
Input: 5
Output: 120
*/
function factorial(num){
let result = 1;

  for (let x = 1; x <= num; x++){
    result *= x;
  }
  return result;
}

factorial(4)

// recursive O notation is O(n)
// iterative is also linear
