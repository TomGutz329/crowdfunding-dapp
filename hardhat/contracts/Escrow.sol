//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {

    modifier nonReentrant() {
        require(!locked, "Reentrant call detected");
        locked = true;
        _;
        locked = false;
    }

    struct Project {
        uint id;
        string title;
        string description;
        uint goalAmount;
        uint currentAmount;
        uint duration;
        uint startTime;
        address payable creator;
        bool completed;
        address[] contributors;
    }

    bool private locked;
    address private owner;
    uint public totalProjects;

    mapping(uint => Project) public projects;
    mapping(address => uint) public contributions;
    mapping(uint => bool) completedProjects;

    event NewProjectCreated(uint projectId, string title, string description, uint goalAmount, uint duration, address creator);
    event NewContributionReceived(uint projectId, address contributor, uint amount);
    event ProjectCompleted(uint projectId, uint totalAmount);

    constructor() {
        owner = msg.sender;
    }

    function createProject(string memory _title, string memory _description, uint _goalAmount, uint _duration) public {
        require(_duration > 0, "Duration must be greater than zero");
        totalProjects++;
        projects[totalProjects] = Project(totalProjects, _title, _description, _goalAmount, 0, _duration * 1 days, block.timestamp, payable(msg.sender), false, new address[](0));
        emit NewProjectCreated(totalProjects, _title, _description, _goalAmount, durationConverter(_duration), msg.sender);
    }

    function durationConverter(uint _duration) internal pure returns(uint) {
        uint duration = (((_duration * 24) * 60 ) * 60 );
        return duration;
    }

    function contributeToProject(uint _projectId) public payable {
        require(_projectId > 0 && _projectId <= totalProjects, "Invalid project ID");
        require(!projects[_projectId].completed, "Project is already completed");
        require(msg.value > 0, "Contribution amount must be greater than zero");
        require(block.timestamp <= projects[_projectId].startTime + projects[_projectId].duration, "Project has ended");
        contributions[msg.sender] += msg.value;
        projects[_projectId].contributors.push(msg.sender);
        projects[_projectId].currentAmount += msg.value;
        checkIfProjectCompleted(_projectId);
        emit NewContributionReceived(_projectId, msg.sender, msg.value);
    }

    function checkIfProjectCompleted(uint _projectId) private returns(bool) {
        if (projects[_projectId].currentAmount >= projects[_projectId].goalAmount) {
            if(!completedProjects[_projectId]){
                projects[_projectId].completed = true;
                emit ProjectCompleted(_projectId, projects[_projectId].currentAmount);
                completedProjects[_projectId] = true;
            }
            return true;
        } else {
            return false;
        } 
    }

    function withdrawFunds(uint _projectId) public nonReentrant {
        require(projects[_projectId].creator == msg.sender, "Only project creator can withdraw funds");
        require(projects[_projectId].completed, "Project is not completed yet");
        projects[_projectId].creator.transfer(projects[_projectId].currentAmount);
    }

    
    function getProjectContributors(uint _projectId) public view returns(address[] memory) {
        return projects[_projectId].contributors;
    }
    
    function getProjectDetails(uint _projectId) public view returns(string memory, string memory, uint, uint, uint, address, bool) {
        return (projects[_projectId].title, projects[_projectId].description, projects[_projectId].goalAmount, projects[_projectId].currentAmount, projects[_projectId].duration, projects[_projectId].creator, projects[_projectId].completed);
    }

}