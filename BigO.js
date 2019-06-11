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
