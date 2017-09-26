var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function(accounts) {
  it("should greet when is been call", function() {
    var greeter;


    return Greeter.new("hello world").then(function(instance) {
      greeter = instance;
      return greeter.greet();
    }).then(function(greet_response) {
      assert.equal("hello world", greet_response);
    });
  });

  it("should be able to change the message", function() {
    var greeter;

    return Greeter.new("hello world").then(function(instance) {
      greeter = instance;
      return greeter.setGreeting("hello universe");
    }).then(function() {
      return greeter.greet();
    }).then(function(greet_response) {
      assert.equal("hello universe", greet_response);
    });
  });

  it("should be able to obtain the blocknumber", function() {
    var greeter;

    return Greeter.new("hello world").then(function(instance) {
      greeter = instance;
      return greeter.getBlockNumber();
    }).then(function(blocknumber_response) {
      assert.isAbove(
        parseInt(blocknumber_response.valueOf(), 10),
        1
      );
    });
  });
});
