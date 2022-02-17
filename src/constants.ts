import JSBI from 'jsbi'

export const FACTORY_ADDRESS_UNISWAP = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const FACTORY_ADDRESS_MDEX = '0xb0b670fc1F7724119963018DB0BfA86aDb22d941'
export const FACTORY_ADDRESS_PANCAKE = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'

export const INIT_CODE_HASH_UNISWAP = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
export const INIT_CODE_HASH_PANCAKE = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'
export const INIT_CODE_HASH_MDEX = '0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
