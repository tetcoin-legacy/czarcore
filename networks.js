var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

/* rememeber hash is backwards 5174015f0852af7f62c7f92bd5816facb31580706282580c2b6d82b815aba2de*/
exports.livenet = {
  name: 'livenet',
  magic: hex('637a6172'),
  addressVersion: 0xf,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('dea2ab15b8826d2b0c588262708015b3ac6f81d52bf9c7627faf52085f017451'),
    merkle_root: hex('340651462c6b2d44f29d5a15af76fa6a1acaee6c7b9d15d1183609a26f9e9548'),
    height: 0,
    nonce: 2085290533,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1413169227,
    bits: 486604799,
  },
  dnsSeeds: [
    'czarcoin.co',
    'czarcoin.com'
  ],
  defaultClientPort: 8816
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('637a7274'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('01e335ca6f51c3d9680f551d21923fb68880e36ec86ea1575f57394aabbfc572'),
    merkle_root: hex('340651462c6b2d44f29d5a15af76fa6a1acaee6c7b9d15d1183609a26f9e9548'),
    height: 0,
    nonce: 385520184,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.czarcoin.co',
    'testnet-seed.czarcoin.com'
  ],
  defaultClientPort: 18816
};
