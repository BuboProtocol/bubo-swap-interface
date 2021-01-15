import { Interface } from '@ethersproject/abi'
import { ChainId } from 'bubo-swap-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7D26786e2a82727bBf072186A17f65A076c21A5E', //TODO
  [ChainId.BSCTESTNET]: '0x5178E2CF7773CE5Ee8B557AAF31C17d8CE7311DE'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
