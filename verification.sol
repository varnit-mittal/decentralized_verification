// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./organization.sol";

contract verification{
    organization org= new organization();

    function checkPermission(string memory _document, string memory _docType) public view returns(bool){
        organization.doc_info[] memory documents=org.getDocumnets();
        for(uint i=0;i<documents.length;i++){
            if(keccak256(abi.encodePacked(documents[i].docId))==keccak256(abi.encodePacked(_document)) &&
                keccak256(abi.encodePacked(documents[i].docType))==keccak256(abi.encodePacked(_docType))){
                return true;
            }
        }
        return false;
    }
}