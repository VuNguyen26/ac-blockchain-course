// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        uint age;
        bool isRegistered;
    }

    mapping(address => Student) public students;

    function register(string memory _name, uint _age) public {
        require(!students[msg.sender].isRegistered, "Address already registered");

        students[msg.sender] = Student({
            name: _name,
            age: _age,
            isRegistered: true
        });
    }

    function getStudent(address _user) public view returns (string memory, uint, bool) {
        Student memory student = students[_user];
        return (student.name, student.age, student.isRegistered);
    }

    function isStudentRegistered(address _user) public view returns (bool) {
        return students[_user].isRegistered;
    }
}
