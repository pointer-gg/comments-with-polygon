const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Comments", function () {
  it("Should add and fetch successfully", async function () {
    const Comments = await ethers.getContractFactory("Comments");
    const comments = await Comments.deploy();
    await comments.deployed();

    expect(await comments.getComments("my-first-blog-post")).to.be.lengthOf(0);

    const tx1 = await comments.addComment(
      "my-first-blog-post",
      "my first comment"
    );
    await tx1.wait();

    expect(await comments.getComments("my-first-blog-post")).to.be.lengthOf(1);
    expect(await comments.getComments("my-second-blog-post")).to.be.lengthOf(0);

    const tx2 = await comments.addComment(
      "my-second-blog-post",
      "this comment is on a different thread"
    );
    await tx2.wait();

    expect(await comments.getComments("my-first-blog-post")).to.be.lengthOf(1);
    expect(await comments.getComments("my-second-blog-post")).to.be.lengthOf(1);
  });
});
