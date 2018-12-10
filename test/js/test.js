mocha.setup('bdd');
var assert = chai.assert;

describe("random", function() {
  it('returned type is equal to "number" ', function() {
    assert.isNumber(random(100, 0))
  });

  it('returned number not equal wrong number ', function() {
    for(let i = 0; i < 50; i++) {
      assert.notEqual(random(10, 0, 5), 5)
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let randomNumber = random(100, 0);
    assert.isBelow(randomNumber, 101);
    assert.isAbove(randomNumber, -1);
  });
});

describe("arrayRandom", function() {
  it('returned type is equal to "array" ', function() {
    assert.isArray(arrayRandom(10, 5, 0));
  });

  it('all numbers unique', function() {
    let array = arrayRandom(100, 100, 0, true);
    for(let i = 0; i < 99; i++) {
      for(let j = i + 1; j < 100; j++) {
        assert.notEqual(array[i],array[j]);
      }
    }
  });

  it("returned value in the range from minimum to maximum", function() {
    let array = arrayRandom(100, 100, 0, false);
    array.forEach(function (elem) {
      assert.isBelow(elem, 101);
      assert.isAbove(elem, -1);
    });

  });
});







