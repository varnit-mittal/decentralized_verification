// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./organization.sol";

contract user{
    struct user_info{
        string name;
        string email;
        string dob;
    }

    mapping(address => user_info) public users;

    organization org= new organization();

    function getDocs() public view returns(organization.doc_info[] memory){
        return org.fetchSpecific(msg.sender);
    }

    function registerUser(string memory _name, string memory _email, string memory _dob) public{
        users[msg.sender].name = _name;
        users[msg.sender].email = _email;
        users[msg.sender].dob = _dob;
    }
}