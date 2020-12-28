<template>
  <div class="home-header">
    <SideMenuFoldButton />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import SideMenuFoldButton from "./SideMenuFoldButton.vue";

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "HomeHeader",
    components: {
      SideMenuFoldButton,
    },
  })
  export default class HomeHeader extends Vue {
  }
</script>

<style lang="stylus" scoped>
.home-header {
  background-color: green;
  height: 44px;
}
</style>