[![Build Status](https://travis-ci.org/AstR0x/best-library.svg?branch=master)](https://travis-ci.org/AstR0x/best-library)
# best-library
This library provides a set of functions that facilitate the work in Javascript. Library development continues.

### Available functions

+ randomNum
+ randomArray
+ createArray
+ arrayOperations
+ lastElem
+ sortArray
+ bubbleSort
+ selectionSort
+ insertionSort
+ binarySearch
+ interpolationSearch
+ factorial
+ fibonacci
+ RLE
+ upperFirst
+ measureTime

### Library connection.

```js
const bl = require('*/best-library.js');
```
*** *** ***

#### bl.randomNum([min = 0], max)

    The function returns a random number in the range from the first argument to the second argument

##### Arguments

    1. [min = 0] (number): The lower bound of an interval
    2. max (number): The upper bound of an interval 

##### Returns

    (number): Returns a random number
    
    
 ##### Examples
 
 ```js
 const number = bl.randNum(0, 10);
 console.log(number); // 7
 
 const number = bl.randNumb(10);
 console.log(number); // 5
 ```   
 
***

#### bl.randomArray(size, min, max, [unique = false])

    The function returns an array of random numbers
    
##### Arguments    

    1. size (number): The Size of an array
    2. min (number): The lower bound
    3. max (number): The upper bound
    4. unique = false (boolean): If the variable === true, the function will return an array of unique numbers
    
##### Returns

    (array): Returns an array of random numbers

##### Examples

```js
const array = bl.randArr(10, 0, 15, false);
console.log(array); // (10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

const array = bl.randArr(10, 0, 15, true);
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```

***

#### bl.createArray(length, element)
   
    Create an array filled with identical elements

##### Arguments

    1. length (number): Array length
    2. element (string|number|boolean|underfined|null|object): Array element
        
##### Returns
    
    (array): Returns array

##### Examples
```js
const array = bl.createArray(3, new String());
console.log(array); // (3) [String, String, String]
```

***

#### bl.arrayOperations(array1, array2, operation)

    The function performs mathematical operations on arrays. The result is written to the first array.
   
##### Arguments

    1. array1 (array): The first array to perform operation
    2. array2 (array): The second array to perform operation
    3. operation (string): The operation that is performed on arrays
    
##### Returns
     
    The function returns nothing

##### Examples
```js
const array1 = [4, 5, 0, 1, 7];
const array2 = [9, 4, 8, 1, 2];
bl.operArr(array1, array2, '*');
console.log(array1); // (5) [36, 20, 0, 1, 14]
```

***

#### bl.lastElem(array)

    Find last array element

##### Arguments

    1. array (array): The array to find last element
     
##### Returns
    
    (all types): Returns last array element
    
##### Examples    

```js
const array = [4, 5, 0, 1, 7];
const elem = bl.lastElem(array);
console.log(elem); // 7
```

***

#### bl.sortArray(array)

    Sort array

##### Arguments

    1. array (array): The array to sort
    
##### Examples

```js
const array = [5, 1, 3, 0, 3, 5, 9, 8, 1, 2];
bl.sortArr(array);
console.log(array); // (10) [0, 1, 1, 2, 3, 3, 5, 5, 8, 9]
```

***

#### bl.bubbleSort(array)

    Sort the array by bubble sort

##### Arguments

    1. array (array): The array to sort
    
##### Examples

```js
const array = [-1, 5, 8, 0, -6, -5, 3, 4, 1, 0];
bl.bubbleSort(array);
console.log(array); // (10) [ -6, -5, -1, 0, 0, 1, 3, 4, 5, 8 ]
````

***

#### bl.selectionSort(array)

    Sort the array by selection sort

##### Arguments

    1. array (array): The array to sort
    
##### Examples

```js
const array = [5, 1, -3, -3, 3, -5, 6, 8, 1, 0];
bl.selectionSort(array);
console.log(array); // (10) [ -5, -3, -3, 0, 1, 1, 3, 5, 6, 8 ]
```

***

#### bl.insertionSort(array)

    Sort the array by insertion sort

##### Arguments

    1. array (array): The array to sort 

##### Examples

```js
const array = [5, 1, -3, -3, 3, -5, 6, 8, 1, 0];
bl.insertionSort(array);
console.log(array); // (10) [ -5, -3, -3, 0, 1, 1, 3, 5, 6, 8 ]
```

***

#### bl.binarySearch(array, element)

    Find element index

##### Arguments

    1. element (number):  The element to find index
    2. array (array): The sorted array to find element index
    
##### Returns
    
    The function returns element index or -1

##### Examples

```js
const array = [-4, 0, 8, 9, 11];
const index = bl.binarySearch(array, 0);
console.log(index); // 1
```

***

#### bl.interpolationSearch(array, element)

    Find element index

##### Arguments

     1. element (number):  The element to find index
     2. array (array): The sorted array to find element index
    
##### Returns
    
    The function returns element index or -1

##### Examples

```js
const array = [3, 5, 9, 11, 15, 98, 505];
const index = bl.interpolationSearch(array, 9);
console.log(index); // 2
```

***

#### bl.factorial(number)

    Calculate the factorial of numbers
    
##### Arguments
    
    1. number (number): The number to calculate factorial

##### Returns
    
    (number): Returns the factorial of a number

##### Examples

```js
const num = bl.factorial(5);
console.log(num); // 120
```

***

#### bl.fibonacci(number)

    Calculate the fibonacci number
    
##### Arguments
    
    1. number (number): The number to calculate fibonacci number

##### Returns
    
    (number): Returns the nth fibonacci number

##### Examples

```js
const num = bl.fibonacci(18);
console.log(num); // 1597
```

***

#### bl.RLE(str)

    Compress string
    
##### Arguments
    
    1. str (string): The string to compress

##### Returns
    
    (string): Returns compressed string

##### Examples

```js
const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBB';
const compressedStr = RLE(str);
console.log(compressedStr); // A4B3C2X1Y1Z1D4E3F3A6B5
```

***

#### bl.upperFirst(string)

    Translate to upper case first string letter
    
##### Arguments

    1. string (string): The string to modify  
    
##### Returns

    (string): Returns the modify string

##### Examples

```js
const str = 'hello, world!'
console.log(bl.upperFirst(str)); // Hello, World!;
```

***

#### This function workable only in browser!
#### bl.measureTime(callback, [args1], [args2], ...) 

    Measure function execution time
    
##### Arguments

    1. callback (function): The function whose time is to be measured
    2. [args1], [args2], ... : Callback function arguments
    
##### Returns

    (object|number): If the callback function returns a value, 
                     the measureTime function returns object {time: number, answer: *}
                     else returns only function execuite time

##### Examples

```js
const answer = measureTime(bestLibrary.bubbleSort, [5, 9, 1, 2, -5]);
console.log(answer); // 0.14999999984866008;
```

```js
const answer = measureTime(bestLibrary.fibonacci, 40);
console.log(answer); // {time: 1181.5399999995861, answer: 63245986}
```