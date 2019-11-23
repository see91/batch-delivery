<template>
  <div id="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <Environment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Environment from "@/components/Environment.vue";

@Component({
  components: { Environment }
})
export default class Home extends Vue {
  msg: string = "This is Home!";
}
</script>

<style lang="stylus">
#home
  width 100%
  height 100vh
  padding-top 60px
</style>
