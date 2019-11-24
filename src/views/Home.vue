<template>
  <div id="home">
    <img class="logo" alt="Vue logo" src="@/assets/logo.png" />
    <Environment />
    <ImportAccount />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Environment from "@/components/Environment.vue";
import ImportAccount from "@/components/ImportAccount.vue";

@Component({
  components: { Environment, ImportAccount }
})
export default class Home extends Vue {
  msg: string = "This is Home!";
}
</script>

<style lang="stylus">
#home
  width 100%
  height 100vh
  display flex
  align-items center
  flex-direction column
  padding-top 60px
  .logo
    width 150px
    height 150px
</style>
