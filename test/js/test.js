mocha.setup('bdd');
var assert = chai.assert;

describe("randNum", function() {
  it('return type is an number', function() {
    assert.isNumber(randNum(100, 0))
  });

  it('returned number not equal wrong number ', function() {
    for(let i = 0; i < 50; i++) {
      assert.notEqual(randNum(10, 0, 5), 5)
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let randomNumber = randNum(100, 0);
    assert.isBelow(randomNumber, 101);
    assert.isAbove(randomNumber, -1);
  });
});

describe("randArray", function() {
  it('return type is an array', function() {
    assert.isArray(randArray(10, 5, 0));
  });

  it('all numbers unique', function() {
    let array = randArray(100, 100, 0, true);
    for(let i = 0; i < 99; i++) {
      for(let j = i + 1; j < 100; j++) {
        assert.notEqual(array[i],array[j]);
      }
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let array = randArray(100, 100, 0, false);
    array.forEach(function (elem) {
      assert.isBelow(elem, 101);
      assert.isAbove(elem, -1);
    });

  });
});

describe('sortArray', function () {
  it('array sorted', function () {
    let array = randArray(50, 50, 0, false);
    for(let i = 1; i < 50; i++) {
      array[i] >= array[i - 1];
    }
  });
});

describe('newArray', function () {
  it('array length is equal to the parameter "amount"', function () {
   let array = newArray(10, new String());
    assert.equal(10, array.length);
  });

  it('each element of the array is equal to the parameter "element"', function () {
    let array = newArray(10, 'str');
    array.forEach(function (elem) {
      assert.equal(elem, 'str');
    });
  });
});

describe('lastElement', function () {
  it('the return value is the last element of the array', function() {
    let array = [0, 99, 'str', true, 55];
    assert.equal(lastElement(array), array[array.length - 1])
  })
});







