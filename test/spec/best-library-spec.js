const bestLibrary = require('../../src/best-library.js');
const chai = require('chai');
const assert = chai.assert;

describe("randNum", function() {
  it('return type is an number', function() {
    assert.isNumber(bestLibrary.randNum(0, 100));
  });

  it('returned number not equal wrong number ', function() {
    for(let i = 0; i < 50; i++) {
      assert.notEqual(bestLibrary.randNum(0, 10, 5), 5);
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let randomNumber = bestLibrary.randNum(0, 100);
    assert.isBelow(randomNumber, 101);
    assert.isAbove(randomNumber, -1);
  });
});

describe("randArr", function() {
  it('return type is an array', function() {
    assert.isArray(bestLibrary.randArr(10, 0, 5));
  });

  it('all numbers unique', function() {
    let array = bestLibrary.randArr(100, 0, 100, true);
    for(let i = 0; i < 99; i++) {
      for(let j = i + 1; j < 100; j++) {
        assert.notEqual(array[i], array[j]);
      }
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let array = bestLibrary.randArr(100, 0, 100, false);
    array.forEach(function(elem) {
      assert.isBelow(elem, 101);
      assert.isAbove(elem, -1);
    });
  });
});

describe('sortArr', function() {
  it('array sorted', function() {
    let array = bestLibrary.randArr(50, 0, 50, false);
    bestLibrary.sortArr(array);
    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});

describe('bubbleSort', function() {
  it('array sorted', function() {
    let array = bestLibrary.randArr(50, 0, 50, false);
    bestLibrary.bubbleSort(array);
    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});

describe('selectionSort', function() {
  it('array sorted', function() {
    let array = bestLibrary.randArr(50, 0, 50, false);
    bestLibrary.selectionSort(array);
    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});

describe('newArr', function() {
  it('array length is equal to the parameter "amount"', function() {
    let array = bestLibrary.newArr(10, new String());
    assert.equal(10, array.length);
  });

  it('each element of the array is equal to the parameter "element"', function() {
    let array = bestLibrary.newArr(10, 'str');
    array.forEach(function(elem) {
      assert.equal(elem, 'str');
    });
  });
});

describe('RLE', function() {
  it('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB => A4B3C2X1Y1Z1D4E3F3A6B28', function() {
    const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
    assert.equal(bestLibrary.RLE(str), 'A4B3C2X1Y1Z1D4E3F3A6B28');
  })
});

describe('lastElem', function() {
  it('the return value is the last element of the array', function() {
    let array = [0, 99, 'str', true, 55];
    assert.equal(bestLibrary.lastElem(array), array[array.length - 1])
  })
});

describe('operArr', function() {
  it('[ 4, 8, 9 ] * [ 1, 4, 5 ] === [4, 32, 45]', function() {
    let arr1 = [4, 8, 9];
    let arr2 = [1, 4, 5];
    let arr3 = [4, 32, 45];
    bestLibrary.operArr(arr1, arr2, '*');
    for(let i = 0; i < 3; i++) {
      assert.equal(arr1[i], arr3[i]);
    }
  });
});

describe('factorial', function() {
  it('return type is an number', function() {
    assert.isNumber(bestLibrary.factorial(5));
  });

  it('factorial of 10 is equal to 3628800', function() {
    assert.equal(bestLibrary.factorial(10), 3628800);
  });

  it('factorial of 0 is equal to 1', function() {
    assert.equal(bestLibrary.factorial(0), 1);
  });
});

describe('fibonacci', function() {
  it('return type is an number', function() {
    assert.isNumber(bestLibrary.fibonacci(5));
  });

  it('fibonacci of 18 is equal to 1597', function() {
    assert.equal(bestLibrary.fibonacci(18), 1597);
  });

  it('fibonacci of 1 is equal to 1', function() {
    assert.equal(bestLibrary.fibonacci(1), 0);
  });
});

describe('upperFirst', function() {
  it('the length of the string has not changed', function() {
    let str1 = 'hello, world!';
    let str2;
    str2 = bestLibrary.upperFirst(str1);
    assert.equal(str1.length, str2.length);
  });

  it('lorem ipsum dolor sit amet => Lorem Ipsum Dolor Sit Amet', function() {
    let str = 'lorem ipsum dolor sit amet';
    assert.equal(bestLibrary.upperFirst(str), 'Lorem Ipsum Dolor Sit Amet')
  });
});










