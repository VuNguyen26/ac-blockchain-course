// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    address public owner;

    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    mapping(address => Student) public students;

    event StudentRegistered(address indexed user, string name, uint age);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerStudent(address _user, string memory _name, uint _age) public onlyOwner {
        require(!students[_user].isRegistered, "Student already registered");

        students[_user] = Student({
            name: _name,
            age: _age,
            isRegistered: true
        });

        emit StudentRegistered(_user, _name, _age);
    }

    function getStudent(address _user) public view returns (string memory, uint, bool) {
        Student memory student = students[_user];
        return (student.name, student.age, student.isRegistered);
    }

    function isStudentRegistered(address _user) public view returns (bool) {
        return students[_user].isRegistered;
    }
}
