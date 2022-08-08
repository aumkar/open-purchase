const Purchase = artifacts.require("Purchase.sol");

contract("Purchase", () => {
  it("Should update data", async () => {
    const purchase = await Purchase.new();
    await purchase.set(10);
    const data = await purchase.read();
    assert(data.toString() === "10");
  });
});
