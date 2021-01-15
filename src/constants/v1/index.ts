import { Interface } from '@ethersproject/abi'
import { ChainId } from 'bubo-swap-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7D26786e2a82727bBf072186A17f65A076c21A5E', //TODO
  [ChainId.BSCTESTNET]: '0xE0dC4D56c07Bcd13A82eA5D79dB9DC545cB4E184'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
