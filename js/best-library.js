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

function arrayOfRandomUniqueNumber(amount, max, min = 0, uniq = false) {
  if (amount > max - min && uniq == true) {
    throw new Error('amount more than maximum - minimum');
  }
  let arrayOfRandomUniqueNumber = [];
  let randomNumber;

  for (let i = 0; i < amount;) {
    randomNumber = random(max, min);
    if (arrayOfRandomUniqueNumber.indexOf(randomNumber) !== -1 && uniq == true) {
      continue;
    }
    arrayOfRandomUniqueNumber[i] = randomNumber;

    i++;
  }
  return arrayOfRandomUniqueNumber;
}


function sortNumbers(array) {
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  return array;
}

//функция создания массива
function newArray(amount, type) {
  let array = [];
  console.log(type);
  for(var i = 0; i < amount; i++) {
    array.push(type);
  }
  return array;
}

//Получение последнего элемента массива
function getLastElement(array) {
  return array[array.length - 1];
}





// function sort() {
//
// }