//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Comments {
  // Exposed data structure
  struct Comment {
    uint32 id;
    string topic;
    address creator_address;
    string message;
    uint256 created_at;
  }
       
  // Notify users that a comment was added 
  event CommentAdded(Comment comment);

  // Fetch a list of comments for a topic 
  function getComments(string calldata topic) public view returns(Comment[] memory) {}

  // Persist a new comment
  function addComment(string calldata topic, string calldata message) public {}
}