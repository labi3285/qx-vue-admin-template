<template>
  <div class="side-menu" :style="{ width: menuWidth }">
    <div class="menu" v-for="(e, i) in menu" :key="i" @click="clickMenu(e)">
      <div class="item">
        <svg-icon class="icon" :icon-class="e.icon" />
        <div class="name no-select">{{ e.name }}</div>
        <div class="flex-space"></div>
        <svg-icon :class="e.isFold ? 'arrow' : 'arrow arrow-rotate'" icon-class="arrow_down" iconWidth="10px" iconHeight="10px" v-if="e.subMenu.length > 0" />
      </div>
      <div class="sub-menu" v-if="!e.isFold">
        <div class="item" v-for="(e, i) in e.subMenu" :key="i">
          <svg-icon class="icon" :icon-class="e.icon" />
          <div class="name no-select">{{ e.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenu",
  })
  export default class SideMenu extends Vue {
    private get menu() {
      return MenuModule.getSideMenu;
    }
    private get menuWidth() {
      return MenuModule.getIsSideMenuFold ? '40px' : '200px';
    }
    private async mounted() {
      await MenuModule.fetchMenus();
    }
    private clickMenu(e: Menu) {
      e.isFold = !e.isFold;
      MenuModule.asycMenu();
    }
  }
</script>

<style lang="stylus" scoped>
.side-menu {
  cursor: pointer;
  background-color: #222d3c;
  width: 100%;
  .menu {
    .item {
      background-color: #334154;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      .icon {
        color: #ffffff;
        margin-left: 15pt;
        margin-right: 15px;
      }
      .name {
        font-size: 14px;
        color: #ffffff;
      }
      .flex-space {
        flex: 1;
      }
      .arrow {
        color: #ffffff;
        margin-left: 15px;
        margin-right: 15px;
      }
      .arrow-rotate {
        transform:rotate(180deg);
      }
    }
    .item:hover {
      background-color: #293444;
    }
    .sub-menu {
      .item {
        background-color: #222d3c;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        .icon {
          color: #ffffff;
          margin-left: 25pt;
          margin-right: 15px;
        }
        .name {
          font-size: 14px;
          color: #ffffff;
          margin-right: 15px;
        }
      }
      .item:hover {
        background-color: #041527;
      }
    }
  }
  .no-select {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Chrome/Safari/Opera */
    -khtml-user-select: none;
    /* Konqueror */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently not supported by any browser */
  }
}
</style>