<template>
  <div class="side-menu-item">
    <svg-icon class="icon" :icon-class="menu.icon" />
    <div class="name no-select" v-if="!isSideMenuFold">{{ menu.name }}</div>
    <div v-if="menu.subMenu.length > 0" class="flex-space"></div>
    <svg-icon v-if="menu.subMenu.length > 0" :class="menu.isFold ? 'arrow' : 'arrow arrow-rotate'" icon-class="arrow_down" iconWidth="10px" iconHeight="10px" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenuItem",
  })
  export default class SideMenuItem extends Vue {
    @Prop() public menu!: Menu;
    private get isSideMenuFold() {
      return MenuModule.getIsSideMenuFold;
    }
  }
</script>

<style lang="stylus" scoped>
.side-menu-item {
  cursor: pointer;
  background-color: #334154;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  .icon {
    color: #ffffff;
    margin-left: 15px;
    margin-right: 15px;
  }
  .name {
    font-size: 14px;
    color: #ffffff;
    margin-right: 15px;
  }
  .flex-space {
    flex: 1;
  }
  .arrow {
    color: #ffffff;
    margin-right: 15px;
  }
  .arrow-rotate {
    transform:rotate(180deg);
  }
}
.side-menu-item:hover {
  background-color: #293444;
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
</style>