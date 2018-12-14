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
console.log(number); // 5
```

+ randArr
```js
let array = randArr(10, 0, 15, false);
console.log(array); // (10) [7, 0, 9, 9, 3, 10, 4, 3, 6, 6]

let array = randArr(10, 0, 15, true); 
console.log(array) // (10) [14, 4, 1, 7, 11, 15, 12, 0, 9, 6]
```

+ sortArr
```js
let array = [5, 1, 3, 0, 3, 5, 9, 8, 1, 2];
sortArr(array);
console.log(array); // (10) [0, 1, 1, 2, 3, 3, 5, 5, 8, 9]
```

+ newArr
```js
let array = newArr(3, new String());
console.log(array); // (3) [String, String, String]
```
