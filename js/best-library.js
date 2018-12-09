//функция возвращающая рандомное число
/**
 * get random number
 * @param {Number} max upper bound
 * @param {Number} min bottom bound
 * @param {Number} wrongNumber a number that should not appear
 * @return {Number} random number
 * */
function random(max, min = 0, wrongNumber) {
  if (max <= min) {
    throw new Error('max <= min');
  }
  let randomNumber = Math.round((Math.random() * (max - min) + min));
  if(!wrongNumber) {
    return randomNumber;
  }
  while(randomNumber === wrongNumber) {
    randomNumber = Math.round((Math.random() * (max - min) + min));
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
function arrayOfRandomUniqueNumbers(amount, max, min = 0, unique = false) {
  if (amount > max - min && unique == true) {
    throw new Error('amount more than maximum - minimum');
  }
  let arrayOfRandomUniqueNumbers = [];
  let randomNumber;

  for (let i = 0; i < amount;) {
    randomNumber = random(max, min);
    if (arrayOfRandomUniqueNumbers.indexOf(randomNumber) !== -1 && unique == true) {
      continue;
    }
    arrayOfRandomUniqueNumbers[i] = randomNumber;

    i++;
  }
  return arrayOfRandomUniqueNumbers;
}
/**
 * sort array of numbers
 * @param {Array} array array that need sort
 * @return {Array} sorted array
 */
function sortNumbers(array) {
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  return array;
}

/**
 * create new array
 * @param {Number} amount amount of new array
 * @param {Number} elem element that need to fill the array
 * @return {Array} new array
 */
function newArray(amount, elem) {
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
function lastElement(array) {
  return array[array.length - 1];
}


