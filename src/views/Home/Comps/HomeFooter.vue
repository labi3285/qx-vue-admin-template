<template>
  <div class="home-footer">
    <div class="copy-right">Created by Labi3285</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import SideMenuFoldButton from "./SideMenuFoldButton.vue";

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "HomeFooter",
    components: {
      SideMenuFoldButton,
    },
  })
  export default class HomeFooter extends Vue {
  }
</script>

<style lang="stylus" scoped>
.home-footer {
  text-align: center;
  padding-top: 30px;
  height: 100px;
  .copy-right {
    font-size: 14px;
    color: #666666;
  }
}
</style>