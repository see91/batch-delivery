import Web3 from 'web3'
import { Account } from './types'


export default class web3 {
  private web3: Web3
  private address?: string
  private nonce?: number

  constructor(httpProvider: string) {
    this.web3 = new Web3(httpProvider)
  }

  get utils() {
    return this.web3.utils
  }

  public getBalance(address: string) {
    return this.web3.eth.getBalance(address)
  }

  public privateKeyToAccount (privKey: string): Account | false {
    try {
      return this.web3.eth.accounts.privateKeyToAccount(privKey)
    } catch (_) {
      return false
    }
  }

  public setAccount(account: Account) {
    this.address = account.address
    this.web3.eth.accounts.wallet.add(account)
    this.web3.eth.getTransactionCount(account.address)
      .then(nonce => {
        this.nonce = nonce
      })
  }
}