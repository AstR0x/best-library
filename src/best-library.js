;(function () {
  /**
   * get random number
   *
   * @param {number} x bottom bound
   * @param {number} y  upper bound
   * @param {number} z a number that should not appear
   * @return {number} random number
   * */
  function randNum(x, y, z = undefined) {
    if (arguments.length === 1) {
      return Math.round(Math.random() * x);
    }
    let randomNumber = Math.round((Math.random() * (y - x) + x));
    if (y < x) {
      throw new Error('maximum less than minimum');
    }
    while (randomNumber === z) {
      randomNumber = Math.round((Math.random() * (y - x) + x));
    }
    return randomNumber;
  }

  /**
   * get array of random numbers
   *
   * @param {number} amount amount of array elements
   * @param {number} max upper bound
   * @param {number} min bottom bound
   * @param {boolean} unique unique numbers
   * @return {array} array of random numbers
   */
  function randArr(amount, min, max, unique = false) {
    if (amount > max - min && unique == true) {
      throw new Error('amount more than difference of maximum and minimum');
    }
    let arrOfRUN = [];
    let randomNumber;

    for (let i = 0; i < amount;) {
      randomNumber = randNum(min, max);
      if (arrOfRUN.indexOf(randomNumber) !== -1 && unique == true) {
        continue;
      }
      arrOfRUN[i] = randomNumber;
      i++;
    }
    return arrOfRUN;
  }

  /**
   * find element index
   *
   * @param {number} element
   * @param {array} arr
   * @returns {number}
   */
  function interpolationSearch(element, arr) {
    let diff;
    let left = 0;
    let right = arr.length - 1;

    while (arr[left] < element && arr[right] > element) {
      diff = left + Math.floor(((element - arr[left]) * (right - left)) / (arr[right] - arr[left]) );

      if (arr[diff] < element) {
        left = diff + 1;
      } else if (arr[diff] > element) {
        right = diff - 1;
      } else {
        return diff;
      }
    }

    if (arr[left] === element) {

      return left;
    } else if (arr[right] === element) {

      return right;
    }
    return -1;
  }

  /**
   * bubble sort
   * @param array
   */
  function bubbleSort(array) {
    let isSorted = false;
    let lastIndex = array.length - 1;
    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < lastIndex; i++) {
        let current = array[i];
        let next = array[i + 1];

        if (current > next) {
          isSorted = false;
          array[i] = next;
          array[i + 1] = current;
        }
      }
      lastIndex--;
    }
  }

  /**
   * selection sort
   * @param array
   */
  function selectionSort(array) {
    for (i = 0; i < array.length - 1; i++) {
      let lowestValueIndex = i;

      for (j = i + 1; j < array.length; j++) {
        if (array[j] < array[lowestValueIndex]) {
          lowestValueIndex = j;
        }
      }

      if (lowestValueIndex !== i) {
        let temp = array[i];
        array[i] = array[lowestValueIndex];
        array[lowestValueIndex] = temp;
      }
    }
  }

  /**
   * sort array of numbers
   * @param {Array} array array that need sort
   */
  function sortArr(array) {
    array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
    });
  }

  /**
   * create new array
   *
   * @param {number} amount amount of new array
   * @param {number} elem element that need to fill the array
   * @return {Array} new array
   */
  function newArr(amount, elem) {
    let array = [];
    for (var i = 0; i < amount; i++) {
      array.push(elem);
    }
    return array;
  }

  /**
   * get last element of array
   * @param {array} array
   * @return {*}
   */
  function lastElem(array) {
    return array[array.length - 1];
  }

  /**
   * perform an operation on two arrays
   *
   * @param {array} arr1 array that will change
   * @param {array} arr2 second array
   * @param {string} oper operation that will be performed
   */
  function operArr(arr1, arr2, oper) {
    switch (oper) {
      case "+":
        for (let i = 0; i < arr1.length; i++) {
          arr1[i] += arr2[i];
        }
        break;

      case "-":
        for (let i = 0; i < arr1.length; i++) {
          arr1[i] -= arr2[i];
        }
        break;

      case "*":
        for (let i = 0; i < arr1.length; i++) {
          arr1[i] *= arr2[i];
        }
        break;

      case "/":
        for (let i = 0; i < arr1.length; i++) {
          arr1[i] /= arr2[i];
        }
        break;

      default:
        throw new Error('wrong operation');
    }
  }

  /**
   * get factorial of num
   * @param {number} num
   * @returns {number} factorial of num
   */
  function factorial(num) {
    if (num < 2) return 1;
    return factorial(num - 1) * num;
  }

  /**
   * get the nth Fibonacci number
   *
   * @param {number}calculated fibonacci number
   * @returns {number} Fibonacci number
   */
  function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  /**
   * String compression
   * @param {string} str
   * @returns {string} compressed string
   */
  function RLE(str) {
    let newStr = '';
    let last = str[0];
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
      if (str[i] == last) {
        count++;
      } else {
        newStr += last + count;
        last = str[i];
        count = 1;
      }
    }
    return newStr;
  }


  /**
   * convert the first letter of a word to upper case
   *
   * @param {string} str string to convert
   * @returns {string} converted string
   */
  function upperFirst(str) {
    let strArray = str.split('');
    strArray[0] = strArray[0].toUpperCase();
    for (let i = 0; i < str.length - 1; i++) {
      if (strArray[i] === ' ') {
        strArray[i + 1] = strArray[i + 1].toUpperCase();
      }
    }
    return strArray.join('');
  }

// the module exports
  const bestLibrary = {
    randNum: randNum,
    randArr: randArr,
    sortArr: sortArr,
    interpolationSearch: interpolationSearch,
    bubbleSort: bubbleSort,
    selectionSort: selectionSort,
    newArr: newArr,
    lastElem: lastElem,
    operArr: operArr,
    RLE: RLE,
    factorial: factorial,
    fibonacci: fibonacci,
    upperFirst: upperFirst
  };

  // define the module as AMD, commonJS or global
  if (typeof define == 'function' && define.amd) {
    define([], function () {
      return bestLibrary;
    });
  } else if (typeof exports != 'undefined') {
    exports = module.exports = bestLibrary;
  } else {
    this.bestLibrary = bestLibrary;
  }

}.call(this));