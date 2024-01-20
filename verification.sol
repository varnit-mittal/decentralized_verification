// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./organization.sol";

contract verification{
    organization org= new organization();

    function checkPermission(string memory _document, string memory _docType, string memory _org, string memory _dob, string memory _name) public view returns(bool){
        organization.doc_info[] memory documents=org.getDocumnets();
        for(uint i=0;i<documents.length;i++){
            if(keccak256(abi.encodePacked(documents[i].docId))==keccak256(abi.encodePacked(_document)) &&
                keccak256(abi.encodePacked(documents[i].docType))==keccak256(abi.encodePacked(_docType)) &&
                keccak256(abi.encodePacked(documents[i].org))==keccak256(abi.encodePacked(_org)) &&
                keccak256(abi.encodePacked(documents[i].dob))==keccak256(abi.encodePacked(_dob)) &&
                keccak256(abi.encodePacked(documents[i].name))==keccak256(abi.encodePacked(_name))){
                return true;
            }
        }
        return false;
    }
}