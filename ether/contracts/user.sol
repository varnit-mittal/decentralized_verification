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

    function getDocs(address _ass) public view returns(organization.doc_info[] memory){
        return org.fetchSpecific(_ass);
    }

    function registerUser(string memory _name, string memory _email, string memory _dob,address _ass) public{
        users[_ass].name = _name;
        users[_ass].email = _email;
        users[_ass].dob = _dob;
    }
}