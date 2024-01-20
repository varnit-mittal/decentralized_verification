// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./organization.sol";

contract user{
    organization org= new organization();

    function getDocs() public view returns(organization.doc_info[] memory){
        return org.fetchSpecific(msg.sender);
    }
}