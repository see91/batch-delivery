<template>
  <div id="env">
    <a-button @click="changeEnv">{{ env_desc[env] }}</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";
import { RootState } from "@/store/types";

@Component
export default class Environment extends Vue {
  private env_desc = {
    true: "正式环境",
    false: "测试环境"
  };
  @State env!: boolean;
  @State web3!: any;
  @Action updateBalance!: Function;
  @Mutation("changeEnv") h_changeEnv!: Function;
  changeEnv() {
    this.h_changeEnv(!this.env);
    this.updateBalance();
  }
}
</script>

<style scoped lang="stylus">
#env
  // border 2px solid red
</style>
