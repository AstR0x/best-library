[![Build Status](https://travis-ci.org/AstR0x/best-library.svg?branch=master)](https://travis-ci.org/AstR0x/best-library)
# best-library
This library provides a set of functions that facilitate the work in Javascript. Library development continues.

### Available functions

+ randNum
+ randArr
+ sortArr
+ bubbleSort
+ selectionSort
+ newArr
+ lastElem
+ operArr
+ factorial
+ upperFirst

### Library connection.

```js
const bl = require('*/best-library.js');
```
*** *** ***

#### bl.randNum(min = 0, max)

    The function returns a random number in the range from the first argument to the second argument

##### Arguments

    1. min = 0 (number): Left border of interval
    2. max (number): Right border of interval 

##### Returns

    (number): Returns a random number
    
    
 ##### Examples
 
 ```js
 let number = bl.randNum(0, 10);
 console.log(number); // 7
 
 let number = bl.randNumb(10);
 console.log(number); // 5
 ```   
 
***

#### randArr(amount, min, max, unique = false)

    The function returns an array of random numbers
    
##### Arguments    

    1. amount (number): Amount amount of array elements
    2. min (number): Bottom border
    3. max (number): Upper border
    4. unique = false (boolean): If the variable === true, the function will return an array of unique numbers
    
##### Returns

    (array): Returns an array of random numbers

##### Examples

```js
let array = bl.randArr(10, 0, 15, false);
console.log(array); // (10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

let array = bl.randArr(10, 0, 15, true);
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```

***

#### sortArr(array)

    Sort array

##### Arguments

    1. array (array): The array to sort
    
##### Returns
    
    The function returns nothing

##### Examples

```js
let array = [5, 1, 3, 0, 3, 5, 9, 8, 1, 2];
bl.sortArr(array);
console.log(array); // (10) [0, 1, 1, 2, 3, 3, 5, 5, 8, 9]
```

***

#### bubbleSort(array)

    Sort the array by bubble sorting

##### Arguments

    1. array (array): The array to sort
    
##### Returns
    
    The function returns nothing

##### Examples

```js
let array = [-1, 5, 8, 0, -6, -5, 3, 4, 1, 0];
bl.bubbleSort(array);
console.log(array); // (10) [ -6, -5, -1, 0, 0, 1, 3, 4, 5, 8 ]
````

***

#### selectionSort(array)

    Sort the array by selection sorting

##### Arguments

    1. array (array): The array to sort
    
##### Returns
    
    The function returns nothing

##### Examples

```js
let array = [5, 1, -3, -3, 3, -5, 6, 8, 1, 0];
bl.selectionSort(array);
console.log(array); // (10) [ -5, -3, -3, 0, 1, 1, 3, 5, 6, 8 ]
```

***

#### newArr(length, element)
   
    Create an array filled with identical elements

##### Arguments

    1. length (number): Array length
    2. element (string|number|boolean|underfined|null|object): Array element
        
##### Returns
    
    (array): Returns array

##### Examples
```js
let array = bl.newArr(3, new String());
console.log(array); // (3) [String, String, String]
```

***

#### lastElem(array)

    Find last array element

##### Arguments

    1. array (array): The array to find last element
     
##### Returns
    
    (all types): Returns last array element
    
##### Examples    

```js
let array = [4, 5, 0, 1, 7];
let elem = bl.lastElem(array);
console.log(elem); // 7
```

***

#### operArr(array1, array2, operation)

    The function performs mathematical operations on arrays. The result is written to the first array.
   
##### Arguments

    1. array1 (array): First array to perform operation
    2. array2 (array): Second array to perform operation
    3. operation (string): The operation that is performed on arrays
    
##### Returns
     
    The function returns nothing

##### Examples
```js
let array1 = [4, 5, 0, 1, 7];
let array2 = [9, 4, 8, 1, 2];
bl.operArr(array1, array2, '*');
console.log(array1); // (5) [36, 20, 0, 1, 14]
```

***

#### factorial(number)

    Calculate the factorial of numbers
    
##### Arguments
    
    1. number (number): The number to calculate factorial

##### Returns
    
    (number): Returns factorial of a number

##### Examples

```js
let num = bl.factorial(5);
console.log(num); // 120
```

***

#### fibonacci(number)

    Calculate the fibonacci number
    
##### Arguments
    
    1. number (number): The number to calculate fibonacci number

##### Returns
    
    (number): Returns nth fibonacci number

##### Examples

```js
let num = bl.fibonacci(18);
console.log(num); // 1597
```

***

#### upperFirst(string)

    Translate to upper case first string letter
    
##### Arguments

    1. string (string): String to modify  
    
##### Returns

    (string): Returns modify string

##### Examples

```js
let str = 'hello, world!'
console.log(bl.upperFirst(str)); // Hello, World!;
```
