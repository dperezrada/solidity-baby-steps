var creatorBalanceChecker = artifacts.require("./creatorBalanceChecker.sol");

contract('creatorBalanceChecker', function(accounts) {
  it("should be able to get contract address", function() {
    var instance;

    return creatorBalanceChecker.new().then(function(instance_) {
      instance = instance_;
      return instance.getContractAddress();
    }).then(function(contract_address) {
      assert.equal(42, contract_address.length);
    });
  });
  it("should be able to get creator balances (current and past)", function() {
    var instance;
    var creator_balance;

    return creatorBalanceChecker.new().then(function(instance_) {
      instance = instance_;
      return instance.getCreatorBalance();
    }).then(function(creator_balance_response) {
      creator_balance = creator_balance_response;
      assert.isAtLeast(creator_balance, Math.pow(10,18));
      return instance.getCreatorDotBalance();
    }).then(function(creator_current_balance) {
      assert.isAtLeast(creator_balance, creator_current_balance);
    });
  });
});