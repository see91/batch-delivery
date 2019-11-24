import web3 from '@/web3'
interface Account {
  sign?: Function,
  address: string,
  encrypt?: Function,
  privateKey?: string,
  signTransaction?: Function
}

export interface RootState {
  env: boolean,
  gas: number,
  web3: web3,
  balance: string,
  gasPrice: number,
  account: Account,
}
