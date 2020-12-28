<template>
  <div class="home-content">
    <slot />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  // import SideMenuFoldButton from "./SideMenuFoldButton.vue";

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "HomeContent",
    components: {
      // SideMenuFoldButton,
    },
  })
  export default class HomeContent extends Vue {
  }
</script>

<style lang="stylus" scoped>
.home-content {
  word-wrap: break-word;
}
</style>