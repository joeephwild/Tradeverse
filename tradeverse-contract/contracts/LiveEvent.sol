//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.9;

contract LiveEvent {
    address owner;

    struct Event {
        string name;
        uint schedule;
        address owner;
        address[] participants;
        bool isActive;
    }

    mapping(address => Event[]) addressToEvent;
    mapping(address => Evvent) adddressToSingleEvent;

    function scheduleEvent() external {}
}
