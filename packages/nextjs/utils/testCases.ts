export const testCases = [
  {
    description: "EIP-1967 - Zora Labs: Contract Factory",
    address: "0xF74B146ce44CC162b601deC3BE331784DB111DC1",
    expected: "0x932a29dbfc1b8c3bdfc763ef53f113486a5b5e7d",
  },
  {
    description: "EIP-1967 direct proxies",
    address: "0xA7AeFeaD2F25972D80516628417ac46b3F2604Af",
    expected: "0x4bd844f72a8edd323056130a86fc624d0dbcf5b0",
  },
  {
    description: "EIP-1967 beacon proxies",
    address: "0xDd4e2eb37268B047f55fC5cAf22837F9EC08A881",
    expected: "0xe5c048792dcf2e4a56000c8b6a47f21df22752d1",
  },
  {
    description: "EIP-1967 beacon variant proxies",
    address: "0x114f1388fAB456c4bA31B1850b244Eedcd024136",
    expected: "0x36b799160cdc2d9809d108224d1967cc9b7d321c",
  },
  {
    description: "OpenZeppelin proxies",
    address: "0xed7e6720Ac8525Ac1AEee710f08789D02cD87ecB",
    expected: "0xe3f3c590e044969294b1730ad8647692faf0f604",
  },
  {
    description: "EIP-897 delegate proxies",
    address: "0x8260b9eC6d472a34AD081297794d7Cc00181360a",
    expected: "0xe4e4003afe3765aca8149a82fc064c0b125b9e5a",
  },
  {
    description: "EIP-897 - NOUNS DAO",
    address: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
    expected: "0xe3caa436461dba00cfbe1749148c9fa7fa1f5344",
  },
  {
    description: "EIP-1167 minimal proxies",
    address: "0x6d5d9b6ec51c15f45bfa4c460502403351d5b999",
    expected: "0x210ff9ced719e9bf2444dbc3670bac99342126fa",
  },
  {
    description: "EIP-1167 minimal proxies with vanity addresses",
    address: "0xa81043fd06D57D140f6ad8C2913DbE87fdecDd5F",
    expected: "0x0000000010fd301be3200e67978e3cc67c962f48",
  },
  {
    description: "Gnosis Safe proxies",
    address: "0x0DA0C3e52C977Ed3cBc641fF02DD271c3ED55aFe",
    expected: "0xd9db270c1b5e3bd161e8c8503c55ceabee709552",
  },
  {
    description: "Compound's custom proxy",
    address: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
    expected: "0xbafe01ff935c7305907c33bf824352ee5979b526",
  },
  {
    description: "Resolves to null if no proxy target is detected",
    address: "0x5864c777697Bf9881220328BF2f16908c9aFCD7e",
    expected: null,
  },
];
