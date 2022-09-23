require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'install infant fox turn fan rebel night pulp hunt kitchen sure suffer'; 
let testAccounts = [
"0x0b37e231512077bb3a33f22687bab393ee1a9589fee367598a0318d55319b66d",
"0xa7241c26f20048c6bab9c955dcdfd9c4706be1f0c5f52037b5e7ea44e51392e9",
"0x0e14c0aedeed28cc0c8d231963e78b41c7f6349d1551293e54ffc5dd18de6e31",
"0x64a895d3c3f531d6060064f1522b5312dfe8d4c4e964b1d9cdade8487f1266b7",
"0x33db74266e37a0b74a4df37e1d07d9b03bf34d3cc7f653035494617947685e25",
"0xc1054e68bca599816d7189d3f939c9520eb7fe9c8d00e8b8992ea954d50bae51",
"0x3ec78421e6db48d063d234fdccaad9e45d6612352b040c9b260af8760f45bc3c",
"0x1d00de9f167692e66fc0dab548a50f056477221a01f96e6ed6e54a5f66ad909d",
"0xc3e77bced88aec579070007f3a4d43cc985f9e91e3b624afd2d298a67fc643cb",
"0xff5897b3bd153aada1d74c966afd0b9d63231a33e5009c9c2045451225b26989"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


