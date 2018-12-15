/**
 * get random number
 * @param {Number} x bottom bound
 * @param {Number} y  upper bound
 * @param {Number} z a number that should not appear
 * @return {Number} random number
 * */
function randNum(x, y, z = undefined) {
  if(arguments.length === 1) {
    return Math.round(Math.random() * x);
  }
  let randomNumber = Math.round((Math.random() * (y - x) + x));
  if(y < x) {
    throw new Error('maximum less than minimum');
  }
  while(randomNumber === z) {
    randomNumber = Math.round((Math.random() * (y - x) + x));
  }
  return randomNumber;
}

/**
 * get array of random numbers
 * @param {Number} amount amount of array elements
 * @param {Number} max upper bound
 * @param {Number} min bottom bound
 * @param {Boolean} unique unique numbers
 * @return {Array} array of random numbers
 */
function randArr(amount, min, max, unique = false) {
  if(amount > max - min && unique == true) {
    throw new Error('amount more than difference of maximum and minimum');
  }
  let arrOfRUN = [];
  let randomNumber;

  for(let i = 0; i < amount;) {
    randomNumber = randNum(min, max);
    if(arrOfRUN.indexOf(randomNumber) !== -1 && unique == true) {
      continue;
    }
    arrOfRUN[i] = randomNumber;
    i++;
  }
  return arrOfRUN;
}

/**
 * sort array of numbers
 * @param {Array} array array that need sort
 */
function sortArr(array) {
  array.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
  });
}

/**
 * create new array
 * @param {Number} amount amount of new array
 * @param {Number} elem element that need to fill the array
 * @return {Array} new array
 */
function newArr(amount, elem) {
  let array = [];
  for(var i = 0; i < amount; i++) {
    array.push(elem);
  }
  return array;
}

/**
 * get last element of array
 * @param {Array} array
 * @return {*}
 */
function lastElem(array) {
  return array[array.length - 1];
}

/**
 * perform an operation on two arrays
 * @param {Array} arr1 array that will change
 * @param {Array} arr2 second array
 * @param {String} oper operation that will be performed
 */
function arrOperations(arr1, arr2, oper) {
  switch(oper) {
    case "+":
      for(let i = 0; i < arr1.length; i++) {
        arr1[i] += arr2[i];
      }
      break;

    case "-":
      for(let i = 0; i < arr1.length; i++) {
        arr1[i] -= arr2[i];
      }
      break;

    case "*":
      for(let i = 0; i < arr1.length; i++) {
        arr1[i] *= arr2[i];
      }
      break;

    case "/":
      for(let i = 0; i < arr1.length; i++) {
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
function factrorial(num) {
  if(num < 2) return 1;
  return factrorial(num - 1) * num;
}

/**
 * convert the first letter of a word to upper case
 * @param {string} str string to convert
 * @returns {string} converted string
 */
function upper(str) {
  let strArray = str.split('');
  strArray[0] = strArray[0].toUpperCase();
  for(let i = 0; i < str.length - 1; i++) {
    if(strArray[i] === ' ') {
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    }
  }
  return strArray.join('');
}

let arr1 = [4, 8, 9];
let arr2 = [1, 4, 5];
let arr3 = [4, 32, 45];
arrOperations(arr1, arr2, '*');
console.log(arr1, arr3);












