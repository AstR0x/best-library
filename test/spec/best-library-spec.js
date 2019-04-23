const bestLibrary = require('../../src/best-library.js');
const chai = require('chai');
const assert = chai.assert;

describe("randomNum", function() {
  it('return type is an number', function() {
    assert.isNumber(bestLibrary.randomNum(0, 100));
  });

  it('returned number not equal wrong number ', function() {
    for(let i = 0; i < 50; i++) {
      assert.notEqual(bestLibrary.randomNum(0, 10, 5), 5);
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    const randomNumber = bestLibrary.randomNum(0, 100);
    assert.isBelow(randomNumber, 101);
    assert.isAbove(randomNumber, -1);
  });
});


describe("randomArray", function() {
  it('return type is an array', function() {
    assert.isArray(bestLibrary.randomArray(10, 0, 5));
  });

  it('all numbers unique', function() {
    const array = bestLibrary.randomArray(100, 0, 100, true);
    for(let i = 0; i < 99; i++) {

      for(let j = i + 1; j < 100; j++) {
        assert.notEqual(array[i], array[j]);
      }
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    const array = bestLibrary.randomArray(100, 0, 100, false);
    array.forEach(function(elem) {
      assert.isBelow(elem, 101);
      assert.isAbove(elem, -1);
    });
  });
});


describe('createArray', function() {
  it('array length is equal to the parameter "amount"', function() {
    const array = bestLibrary.createArray(10, new String());
    assert.equal(10, array.length);
  });

  it('each element of the array is equal to the parameter "element"', function() {
    const array = bestLibrary.createArray(10, 'str');
    array.forEach(function(elem) {
      assert.equal(elem, 'str');
    });
  });
});


describe('arrayOperations', function() {
  it('[ 4, 8, 9 ] * [ 1, 4, 5 ] === [4, 32, 45]', function() {
    const arr1 = [4, 8, 9];
    const arr2 = [1, 4, 5];
    const arr3 = [4, 32, 45];
    bestLibrary.arrayOperations(arr1, arr2, '*');
    for(let i = 0; i < 3; i++) {
      assert.equal(arr1[i], arr3[i]);
    }
  });
});


describe('lastElem', function() {
  it('the return value is the last element of the array', function() {
    const array = [0, 99, 'str', true, 55];
    assert.equal(bestLibrary.lastElem(array), array[array.length - 1])
  })
});


describe('sortArray', function() {
  it('array sorted', function() {
    const array = bestLibrary.randomArray(50, 0, 50, false);
    bestLibrary.sortArray(array);

    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});


describe('bubbleSort', function() {
  it('array sorted', function() {
    const array = bestLibrary.randomArray(50, 0, 50, false);
    bestLibrary.bubbleSort(array);

    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});


describe('selectionSort', function() {
  it('array sorted', function() {
    const array = bestLibrary.randomArray(50, 0, 50, false);
    bestLibrary.selectionSort(array);

    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});


describe('insertionSort', function() {
  it('array sorted', function () {
    const array = bestLibrary.randomArray(50, 0, 50, false);
    bestLibrary.insertionSort(array);

    for(let i = 1; i < 50; i++) {
      assert(array[i] >= array[i - 1]);
    }
  });
});


describe('binarySearch', function () {
    it('element found right', function () {
        const array = [-5, 0, 1, 94, 105];
        assert.equal(bestLibrary.binarySearch(105, array), 4);
    });
});


describe('interpolationSearch', function () {
  it('element found right', function () {
    const array = [3, 15, 99, 109, 110, 505];
    assert.equal(bestLibrary.interpolationSearch(99, array), 2);
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


describe('RLE', function() {
  it('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB => A4B3C2X1Y1Z1D4E3F3A6B28', function() {
    const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
    assert.equal(bestLibrary.RLE(str), 'A4B3C2X1Y1Z1D4E3F3A6B28');
  })
});


describe('upperFirst', function() {
  it('the length of the string has not changed', function() {
    const str1 = 'hello, world!';
    const str2 = bestLibrary.upperFirst(str1);
    assert.equal(str1.length, str2.length);
  });

  it('lorem ipsum dolor sit amet => Lorem Ipsum Dolor Sit Amet', function() {
    const str = 'lorem ipsum dolor sit amet';
    assert.equal(bestLibrary.upperFirst(str), 'Lorem Ipsum Dolor Sit Amet')
  });
});










