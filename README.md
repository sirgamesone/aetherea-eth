# AethereaEth

this project was generated with Truffle version 5.5.9 (core 5.5.9) with `truffle init`


# Code scaffolding

Run `truffle create contract YourContractName` to scaffold a contract

Run `truffle create test YourTestName` to scaffold a test

Run `truffle compile` to compile all contracts in the ./contracts folder

## Troubleshooting truffle console

for errors in truffle console like "YourFunction" is not a function try `truffle deploy --reset`



# Deploy
1. define migrations js file in ./migrations folder
2. define  `networks` in truffle-config.js for deploy
3. `truffle migrate` to deploy contracts

#Development
the projects uses Ganache as development environment

#Truffle Console
`truffle console`  check deployed smart contracts, for example:

>`yourContractName = await YourContractName.deployed()`
>
>`yourContractName //check contract info, address, test functions` 
