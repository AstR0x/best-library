mocha.setup('bdd');
var assert = chai.assert;

describe("random", function() {
  it('return type is equal to "number" ', function() {
    assert.isNumber(random(100, 0))
  });

  it("return value in the range from 0 to 100", function() {
    let randomNumber = random(100, 0);
    assert.isBelow(randomNumber, 101);
    assert.isAbove(randomNumber, -1);
  });
});







