pragma solidity ^0.4.24;

// Import the library 'Roles'
import "../coffeeaccesscontrol/Roles.sol";

contract Main {
  using Roles for Roles.Role;
  // Define 2 events, one for Adding, and other for Removing
  event ConsumerAdded(address indexed account);
  event ConsumerRemoved(address indexed account);
  // Define a struct 'consumers' by inheriting from 'Roles' library, struct Role
  Roles.Role private consumers;
  // In the constructor make the address that deploys this contract the 1st consumer
  constructor() public {
    consumers.add(msg.sender);
  }

}