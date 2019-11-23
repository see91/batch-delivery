<template>
  <div id="env">
    <a-button @click="changeEnv">{{ env_desc[env] }}</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

enum env {
  pro,
  test
}

@Component
export default class Environment extends Vue {
  private env_desc = {
    true: "正式",
    false: "测试"
  };
  private env: Boolean = true;
  changeEnv() {
    this.env = !this.env;
  }
}
</script>

<style scoped lang="stylus">
#env
  border 2px solid red
</style>
