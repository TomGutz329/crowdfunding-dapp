const ContractAddress = "0x477dBBE59287026fC2bD8A682a860394BeBe060e";
const ContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "NewContributionReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			}
		],
		"name": "NewProjectCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			}
		],
		"name": "ProjectCompleted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "contributeToProject",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_goalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "createProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "getProjectContributors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "getProjectDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalProjects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "completed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalProjects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let MyContract;
let signer;
const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        MyContract = new ethers.Contract(
            ContractAddress,
            ContractABI,
            signer
        );
    });
});

async function _createProject() {
	// Get the values from the input fields
	var title = document.getElementById("title").value;
	var description = document.getElementById("description").value;
	var goalAmount = document.getElementById("goalAmount").value;
	var duration = document.getElementById("duration").value;
    const setValue = MyContract.createProject(title, description, 	ethers.utils.parseEther(goalAmount), duration);
    await setValue;
	document.getElementById("title").value = "";
	document.getElementById("description").value = "";
	document.getElementById("goalAmount").value = "";
	document.getElementById("duration").value = "";
}



async function _viewProject(){
	var placedId = document.getElementById("searchProject").value;
	var promisedValue = MyContract.getProjectDetails(placedId);
	var value = await promisedValue;
	document.getElementById("projectTitle").innerText = value[0];
	document.getElementById("projectId").innerText = "Project Id: " + placedId;
	document.getElementById("projectCreator").innerText = value[5];
	document.getElementById("projectDescription").innerText = value[1];
	document.getElementById("projectGoal").innerText = ethers.utils.formatEther(value[2]) + " ETH";
	document.getElementById("projectCurrent").innerText = ethers.utils.formatEther(value[3]) + " ETH";
	document.getElementById("projectDuration").innerText = (value[4] / 86400) + " days";
	var completion = value[6] == true ? "Project completed" : "On-going project";
	document.getElementById("projectCompleted").innerText = completion;
	var totalProjects = await MyContract.getTotalProjects();
	console.log(totalProjects)
}

async function _projects() {
	var totalProjects = await MyContract.getTotalProjects();
	console.log(totalProjects)
	for (let i = 0; i < 6 & totalProjects != 0; i++) {
	var promisedValue = MyContract.getProjectDetails(totalProjects);
	totalProjects--;
	var value = await promisedValue;
	const card = document.getElementsByClassName("project-card")[i];
	// Find and update the sub-elements of the card
	const titleElement = card.querySelector(".project-title");
	titleElement.textContent = value[0];
	const creatorElement = card.querySelector(".project-creator");
	creatorElement.innerHTML = `<span>Created by: ${ value[5]}</span>`;
	const amountElement = card.querySelector(".project-current-amount");
	amountElement.innerHTML = `<span>Current amount:</span> ${ ethers.utils.formatEther(value[3])}`;
	const durationElement = card.querySelector(".duration");
	durationElement.innerHTML = `<span><img width="50" height="50" src="https://img.icons8.com/ios/50/time--v1.png" alt="time--v1" /></span>${ (value[4]/86400)} Days`;
  }

}

async function _contribute(){
	var placedId = document.getElementById("searchProject").value;
	var placedValue = document.getElementById("contributionAmount").value;
	const msgValue = ethers.utils.parseEther(placedValue);
	var promisedValue = MyContract.contributeToProject(placedId, {value: msgValue});

}

async function _withdrawFund(){
	var placedId = document.getElementById("withdrawProjectId").value;
	var promisedValue = MyContract.withdrawFunds(placedId);
}

async function _showContributors(){
	var placedId = document.getElementById("searchProject").value;
	var promisedValue = MyContract.getProjectContributors(placedId);
	var contributors = await promisedValue;
	const contributorsList = document.querySelector(".content ul");
	contributorsList.innerHTML = '';
	contributors.forEach(contributor => {
  	const listItem = document.createElement("li");
  	listItem.textContent = contributor;
  	contributorsList.appendChild(listItem);
});
}

