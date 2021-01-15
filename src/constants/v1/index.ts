import { Interface } from '@ethersproject/abi'
import { ChainId } from 'bubo-swap-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7D26786e2a82727bBf072186A17f65A076c21A5E', //TODO
  [ChainId.BSCTESTNET]: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
