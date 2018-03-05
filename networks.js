var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

/* rememeber hash is backwards merkle is not */
/* Livenet: 0x7da63dfb7ef42f57bb03eefed301d380377b5097191f915b89c4bd37a30f8379 */
/* Testnet: 0x4480e554e3590c558f34d047e7ee71c6c80c628ba86e18f898759b962e94b8fb */
exports.livenet = {
  name: 'livenet',
  magic: hex('437a6172'),
  addressVersion: 0xf,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('79830fa337bdc4895b911f1997507b3790d301d3feee03bb572ff47efb3da67d'),
    merkle_root: hex('61fcbca2949c1b15a29cbca8a3537fbc71c82f0d412a8fc2bbee2bc32f0d2077'),
    height: 0,
    nonce: 2090109717,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1519592266,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.czarcoin.com',
    'a.seed.czarcoin.com',
    'b.seed.czarcoin.com'
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
    hash: hex('fbb8942e969b7598f8186ea88b620cc8c671eee747d0348f550c59e354e58044'),
    merkle_root: hex('61fcbca2949c1b15a29cbca8a3537fbc71c82f0d412a8fc2bbee2bc32f0d2077'),
    height: 0,
    nonce: 1519742653,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1519592266,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.czarcoin.co',
    'testnet-seed.czarcoin.com'
  ],
  defaultClientPort: 18816
};
