import { expect } from "chai";
import { ethers } from "hardhat";
import { Token } from "../typechain-types";

describe("Umbrella Token Transaction and Distribution Test", function () {
  let token: Token;

  async function deploy() {
    const Token = await ethers.getContractFactory("Token");
    return Token.deploy();
  }

  this.beforeAll(async function () {
    token = await deploy();
  });

  describe("Transfers", function () {
    it("Should transfer funds to the owner", async function () {
      /// Todo
    });
  });
});
