var BasicIterator = artifacts.require("./BasicIterator.sol");

contract('BasicIterator', function(accounts) {
  it("should get sum when starting from 0", function() {
    var iterator;

    return BasicIterator.new(0).then(function(instance) {
      iterator = instance;
      return iterator.getSum();
    }).then(function(returned_sum) {
      assert.equal(45, returned_sum.valueOf());
    });
  });
  it("should get sum when starting from 10", function() {
    var iterator;

    return BasicIterator.new(10).then(function(instance) {
      iterator = instance;
      return iterator.getSum();
    }).then(function(returned_sum) {
      assert.equal(145, returned_sum.valueOf());
    });
  });
});
