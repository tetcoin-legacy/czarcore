var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

/* rememeber hash is backwards */
/* Livenet: 26386e3d1dfe042576122eef381d662551f33d68eb29e3a3fb5fd0cd5f25788e */
/* Testnet: bb43407716677ded9c2c32cf82ecb3c26b2d24a552dbcb4d53257a9f4b32178a */
exports.livenet = {
  name: 'livenet',
  magic: hex('637a6172'),
  addressVersion: 0xf,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('8e78255fcdd05ffba3e329eb683df35125661d38ef2e12762504fe1d3d6e3826'),
    merkle_root: hex('adc2a5fbf9b0d5ab9b34fadc992d0d3666907743147b4db694b4218cee5eda13'),
    height: 0,
    nonce: 2084732958,
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
    hash: hex('8a17324b9f7a25534dcbdb52a5242d6bc2b3ec82cf322c9ced7d6716774043bb'),
    merkle_root: hex('adc2a5fbf9b0d5ab9b34fadc992d0d3666907743147b4db694b4218cee5eda13'),
    height: 0,
    nonce: 386799647,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1413169260,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.czarcoin.co',
    'testnet-seed.czarcoin.com'
  ],
  defaultClientPort: 18816
};
