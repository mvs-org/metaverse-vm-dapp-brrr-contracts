const BrrrToken = artifacts.require("BrrrToken")

contract("Brrr Token", async (accounts) => {
    it("start with no supply", async () => {
        let instance = await BrrrToken.deployed()
        let supply = await instance.totalSupply()
        assert.equal(supply, 0)
    })
    it("account should have no balance", async () => {
        let instance = await BrrrToken.deployed()
        let balance = await instance.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 0)
    })
    it("account balance increase if printer goes brrr", async () => {
        let instance = await BrrrToken.deployed()
        await instance.print({from: accounts[0]})
        let balance = await instance.balanceOf(accounts[0])
        assert.equal(balance.valueOf(), 10000)
    })
})