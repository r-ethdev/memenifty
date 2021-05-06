// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC1155Tradable.sol";

/**
 * @title Meme
 * Meme - a contract for our non-fungible memes.
 */


 //  Initialize the ERC1155Tradable contract
contract Memes is ERC1155Tradable {

    // Constructor calls "address" from ERC1155Tradable.sol and stores it as _proxyRegistryAddress
    constructor(address _proxyRegistryAddress)
        public

        // Define state variables to be passed to ERC1155Tradable
        ERC1155Tradable("Meme", "OSC", _proxyRegistryAddress)
    {}

        // Function to get base token URI
    function baseTokenURI() override public pure returns (string memory) {
        return "https://creatures-api.opensea.io/api/creature/";    // NEED TO HAVE OUR OWN URI
    }

        // Function to get Contract URI
    function contractURI() public pure returns (string memory) {
        return "https://creatures-api.opensea.io/contract/opensea-creatures";   // NEED TO HAVE OUR OWN URI
    }
}
