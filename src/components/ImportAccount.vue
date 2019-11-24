<template>
  <div id="import">
    <a-card class="account-info" v-if="account.address">
      <div><span>使用账户：</span>{{ account.address }}</div>
      <div><span>Balance: </span>{{ balance }}</div>
    </a-card>
    <div class="area" v-else>
      <a-input v-model="privKey" placeholder="请输入私钥： 0x开头" />
      <a-button type="primary" @click="imPrivkey">导入私钥</a-button>
    </div>
    <div class="area">
      <a-input v-model="contract" placeholder="输入要发送的代币合约" />
      <a-button type="primary" @click="imContract">导入合约</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";
interface Col {
  xs: {};
  sm: {};
}
@Component
export default class ImportAccount extends Vue {
  msg: string = "导入账户";
  privKey: string = "";
  contract: string = "";
  labelCol: Col = {
    xs: { span: 24 },
    sm: { span: 5 }
  };
  wrapperCol: Col = {
    xs: { span: 24 },
    sm: { span: 12 }
  };
  @State web3!: any;
  @State account!: Object;
  @State balance!: string;
  @Mutation updateAccount!: Function;
  @Action updateBalance!: Function;
  async imPrivkey() {
    const account = await this.web3.privateKeyToAccount(this.privKey);
    this.updateAccount(account);
    this.updateBalance(account.address);
  }
  imContract() {}
}
</script>

<style scoped lang="stylus">
#import
  width 50%
  margin-top 20px
  .account-info
    padding 10px
    div
      font-size 18px
      text-align left
      overflow hidden
      font-weight bold
      white-space nowrap
      text-overflow ellipsis
      span
        display inline-block
        font-size 12px
        min-width 60px
  .area
    display grid
    margin-top 10px
    grid-template-columns 70% 25%
    justify-content space-between
</style>
