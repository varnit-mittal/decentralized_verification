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
    mapping(address => string) public orgs;
    mapping (address => string[]) internal write_permit;
    mapping (address => bool) internal users;
    mapping (address =>  doc_info[]) internal user_doc;
    address[] internal authorities;
    doc_info[] internal documents;
    function getName(address _ass) public view returns(string memory){
        return orgs[_ass];
    }
    function add_authority(string memory org, address _ass) public {
        authorities.push(_ass);
        orgs[_ass]=org;

    }

    function addPermission( string memory _document, address _ass) public {
        write_permit[_ass].push(_document);
    }

    function getDocumnets() public view returns(doc_info[] memory){
        return documents;
    }

    function issueDocument(address _user, string memory _document, string memory doc_type, string memory _name, string memory _dob, address _ass) public {
        uint check=0;
        for(uint i=0;i<write_permit[_ass].length;i++){
            if(keccak256(abi.encodePacked(write_permit[_ass][i]))==keccak256(abi.encodePacked(doc_type))){
                users[_user]=true;
                user_doc[_user].push(doc_info(doc_type,_document,_name,_dob,orgs[_ass]));
                documents.push(doc_info(doc_type,_document,_name,_dob,orgs[_ass]));
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

    function userType(address _user)external view returns(uint){
        if(users[_user]==true){ //user exist
            return 1;
        }
        else if(users[_user]==false) //new user
        {
            return 2;
        }
        else 
        {
            return 3;
        }
    }
}