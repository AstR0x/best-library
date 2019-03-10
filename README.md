[![Build Status](https://travis-ci.org/AstR0x/best-library.svg?branch=master)](https://travis-ci.org/AstR0x/best-library)
# best-library
This library provides a set of functions that facilitate the work in Javascript. Library development continues.

### Available functions

+ randNum
+ randArr
+ sortArr
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
## Examples of using
+ randNum

```js
let number = bl.randNum(0, 10);
console.log(number); // 7

let number = bl.randNumb(10);
console.log(number); // 5
```

+ randArr
```js
let array = bl.randArr(10, 0, 15, false);
console.log(array); // (10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

let array = bl.randArr(10, 0, 15, true);
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```

+ sortArr
```js
let array = [5, 1, 3, 0, 3, 5, 9, 8, 1, 2];
bl.sortArr(array);
console.log(array); // (10) [0, 1, 1, 2, 3, 3, 5, 5, 8, 9]
```

+ bubbleSort
```js
let array = [-1, 5, 8, 0, -6, -5, 3, 4, 1, 0];
bl.bubbleSort(array);
console.log(array); // (10) [ -6, -5, -1, 0, 0, 1, 3, 4, 5, 8 ]
````

+ selectionSort
```js
let array = [5, 1, -3, -3, 3, -5, 6, 8, 1, 0];
bl.selectionSort(array);
console.log(array); // (10) [ -5, -3, -3, 0, 1, 1, 3, 5, 6, 8 ]
```

+ newArr
```js
let array = bl.newArr(3, new String());
console.log(array); // (3) [String, String, String]
```

+ lastElem
```js
let array = [4, 5, 0, 1, 7];
let elem = bl.lastElem(array);
console.log(elem); // 7
```

+ operArr
```js
let array1 = [4, 5, 0, 1, 7];
let array2 = [9, 4, 8, 1, 2];
bl.operArr(array1, array2, '*');
console.log(array1); // (5) [36, 20, 0, 1, 14]
```

+ factorial
```js
let num = bl.factorial(5);
console.log(num); // 120
```
+ upperFirst
```js
let str = 'hello, world!'
console.log(bl.upperFirst(str)); // Hello, World!;
```
