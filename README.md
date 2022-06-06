# Blockchain Supply Chain
Udacity Blockchain Supply Chain project 3

Solidy version 0.4.24
Truffle verson 4.1.14
Node version 16.13.2
Web 3 version (Not sure), ended upon including in the project under src/js. 

Additional Libraries 
* "truffle-assertions": "^0.9.2" - Used this to originally get the events to fire, don't think it is needed because I found a code snipped to raise the events.
* "@truffle/hdwallet-provider": "^2.0.8" - More modern hardware wallet, seems to be easier to work with. 

UML Diagrams - https://go.gliffy.com/go/share/sprf6tbvekfu85ugcuku  (I opted for a simple class diagram, as I thought this was more meaningful rather than a data model.) Perhaps in the future an ERM diagram would be useful. 

rinkeby - 0xb14D3E37833D548390433f66bD7280B07e608704
ropsten - 0xCB756340c30212BdbEeD0B641D1ea52f980c7E6b
https://ropsten.etherscan.io/address/0xcb756340c30212bdbeed0b641d1ea52f980c7e6b

Ended up not having enough Eth on the rinkeby network, so deployed to ropsten instead, it is quite slow, but using the above link you will be able to see each of the transactions being called against the contract. 

