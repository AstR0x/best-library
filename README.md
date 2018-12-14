# best-library
This library provides a set of functions that facilitate the work in Javascript. Library development continues.

Available functions

+ randNum
+ randArr
+ sortArr
+ newArr
+ lastElem
+ arrOperations

Library connection.
```html
<script src="js/best-library.js"></script>
```
*** *** ***
Examples of using
+ randNum

```js
let number = randNum(0, 10);
console.log(number); // 7

let number = randNumb(10);
console.log(number); //5
```

+ randArr
```js
let array = randArr(10, 0, 15, false);
console.log(array); //(10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

let array = randArr(10, 0, 15, true); 
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```
