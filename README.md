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
const number = randNum(5, 0);
console.log(number); // 3
```

+r andArr
```js
let array = randArr(10, 15, 0, false);
console.log(array); //(10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

array = randArr(10, 15, 0, true); 
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```
