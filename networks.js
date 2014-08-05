var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('c0c0c0c0'),
  addressVersion: 0x1E,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('9156352C1818B32E90C9E792EFD6A11A82FE7956A630F03BBEE236CEDAE3911A'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 99943,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1386325540,
    bits: 504365040,
  },
  dnsSeeds: [
    'seed.dogecoin.com',
    'seed.mophides.com',
    'seed.dglibrary.org',
    'seed.dogechain.info'
  ],
  defaultClientPort: 22556
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fcc1b7dc'),
  addressVersion: 0x71,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('9E555073D0C4F36456DB8951F449704D544D2826D9AA60636B40374626780ABB'),
    merkle_root: hex('696AD20E2DD4365C7459B4A4A5AF743D5E92C6DA3229E6532CD605F6533F2A5B'),
    height: 0,
    nonce: 997879,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1391503289,
    bits: 504365040,
  },
  dnsSeeds: [
    'testdoge-seed.lionservers.de',
    'testdoge-seed-static.lionservers.de'
  ],
  defaultClientPort: 44556
};
