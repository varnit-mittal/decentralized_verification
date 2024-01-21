// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract organization{

    struct doc_info{
        string docType;
        string docId;
        string name;
        string dob;
        string org;
    }
    mapping(address => string) orgs;
    mapping (address => string[]) internal write_permit;
    mapping (address => bool) internal users;
    mapping (address =>  doc_info[]) internal user_doc;
    address[] internal authorities;
    doc_info[] internal documents;

    function add_authority(string memory org) public {
        authorities.push(msg.sender);
        orgs[msg.sender]=org;
    }

    function addPermission( string memory _document) public {
        write_permit[msg.sender].push(_document);
    }

    function getDocumnets() public view returns(doc_info[] memory){
        return documents;
    }

    function issueDocument(address _user, string memory _document, string memory doc_type, string memory _name, string memory _dob) public {
        uint check=0;
        for(uint i=0;i<write_permit[msg.sender].length;i++){
            if(keccak256(abi.encodePacked(write_permit[msg.sender][i]))==keccak256(abi.encodePacked(doc_type))){
                users[_user]=true;
                user_doc[_user].push(doc_info(doc_type,_document,_name,_dob,orgs[msg.sender]));
                documents.push(doc_info(doc_type,_document,_name,_dob,orgs[msg.sender]));
                check =1;
                break;
            }
        }
        if(check==0)
        {
            revert("You don't have permission to issue this document");
        }
        
    }

    function fetchSpecific(address _user) public view returns(doc_info[] memory){
        if(users[_user]){
            return user_doc[_user];
        }
        doc_info[] memory empty;
        return empty;
    }

    function userType(address _user) public view returns(uint){
        if(users[_user]==true){
            return 1;
        }
        else if(users[_user]==false)
        {
            return 2;
        }
        else
        {
            return 3;
        }
    }
}