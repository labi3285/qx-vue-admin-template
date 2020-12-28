<template>
  <div class="side-menu-fold-button" @click="handleClick">
    <svg-icon class="icon" :icon-class="isSideMenuFold ? 'menu-fold' : 'menu-unfold'" iconWidth="24px" iconHeight="24px" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenuFoldButton",
  })
  export default class SideMenuFoldButton extends Vue {
    private get isSideMenuFold() {
      return MenuModule.getIsSideMenuFold;
    }
    private handleClick() {
      MenuModule.setIsSideMenuFold(!this.isSideMenuFold);
    }
  }
</script>

<style lang="stylus" scoped>
.side-menu-fold-button {
  width: 44px;
  height: 44px;
  background-color: green;
  display flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: #ffffff;
  }
}
</style>