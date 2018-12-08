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

console.log(arrayOfRandomUniqueNumber(10, 10, 5, ture));