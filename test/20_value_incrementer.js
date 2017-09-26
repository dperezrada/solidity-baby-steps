var Incrementer = artifacts.require("./Incrementer.sol");

contract('Incrementer', function(accounts) {
  it("should be able to increment", function() {
    var instance;

    return Incrementer.new().then(function(instance_) {
      instance = instance_;
      return instance.getIteration();
    }).then(function(iteration) {
      assert.equal(0, iteration);
      return instance.increment();
    }).then(function(contract_address) {
      return instance.getIteration();
    }).then(function(iteration) {
      assert.equal(1, iteration);
    });
  });

});