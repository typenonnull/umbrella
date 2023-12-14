import { formatEther, toBigInt, parseUnits } from "ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

import { MAX_SUPPLY } from "../constants";
import { Token } from "../typechain-types";

type HardhatEthersSigner = Awaited<
  ReturnType<typeof ethers.getSigners>
>[number];

describe("Umbrella Token Transaction and Distribution Test", function () {
  let token: Token;
  let owner: HardhatEthersSigner;
  let otherAddress: HardhatEthersSigner;

  this.beforeAll(async function () {
    [owner, otherAddress] = await ethers.getSigners();
    token = await ethers.deployContract("Token");
  });
  
  describe("Transfer from contract owner account to another", function () {
    it("Owner should be able to transfer from maxSupply", async function () {
      await token.transfer(otherAddress, parseUnits("2", "gwei"));

      const ownerBalance = await token.balanceOf(owner);
      const otherAddressBalance = await token.balanceOf(otherAddress);

      expect(otherAddressBalance).to.changeEtherBalances(
        [owner, otherAddress],
        [ownerBalance, otherAddressBalance]
      );
    });
  });
});
