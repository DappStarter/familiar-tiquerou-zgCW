require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind minor imitate private frame tennis'; 
let testAccounts = [
"0xc7aeab3b6727157fcfd82c8eda845d8c2b3c355203040f725567a28233ac5e1f",
"0xe5015fe5a083c23b0717ae73de6c261d90981f4dd383faefc6478109149d7fec",
"0x6c81ae9d4a696ccc01716c99b82dd4584af19f4a95f298628fe46e20e9c1e4c3",
"0x340d893605370c4ddb935cf5cc2f09382d57bff4154db8b622834fbb3fe95739",
"0x841774ba9d004bb644ca0b6e8a72f1bf2f358eae0cb8ecc20b2739683c083290",
"0x3e2557e40ac4e15b942888f384e4de6f577170a4c7312db6fc23afb856c15425",
"0xd9f8c140d7f79639b39647cb06c0b5f0156654f91688e953c6152fe4621a5d25",
"0x858a7e84c955771018eeac4133fef128b5afcd7dc6e198866d898203f2f29445",
"0x73e17dd26f4f60b3422021800d27a88a761c3a289d4e4ce709f6f4d7b8681c0f",
"0x0eefdbc2871d701c3616a3e649b6bb2ce9c4d8bbfca3107dffae2aaaa739962b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

