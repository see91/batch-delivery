import web3 from '@/web3'
export interface RootState {
  env: boolean,
  gas: number,
  web3?: web3,
  gasPrice: number,
  address: string
}
