<template>
  <div class="side-menu-item" @click="handleSelect(true)" @mouseenter="handleSelect(false)">
    <svg-icon class="icon" :icon-class="menu.icon" iconWidth="14px" iconHeight="14px" />
    <div class="name no-select" v-if="!isSideMenuFold">{{ menu.name }}</div>
    <div v-if="!isSideMenuFold && menu.subMenu.length > 0" class="flex-space"></div>
    <svg-icon v-if="!isSideMenuFold && menu.subMenu.length > 0" :class="menu.isFold ? 'arrow' : 'arrow arrow-rotate'" icon-class="arrow-down" iconWidth="10px" iconHeight="10px" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenuItem",
  })
  export default class SideMenuItem extends Vue {
    @Prop() public index!: number;
    @Prop() public menu!: Menu;
    @Prop() public onSelect!: (menu: Menu, index: number, origin: { x: number, y: number, h: number }) => {};
    @Prop() public onFoldChange!: () => {};

    private get isSideMenuFold() {
      return MenuModule.getIsSideMenuFold;
    }
    private handleSelect(isClick: boolean) {
      if (this.isSideMenuFold) {
        const el = this.$el as HTMLElement;
        var y = el.offsetTop;
        var next = el.offsetParent as HTMLElement;
        while (next !== null) {
          y += next.offsetTop;
          next = next.offsetParent as HTMLElement;
          }
        const x = el.getBoundingClientRect().width;
        const h = el.getBoundingClientRect().height;
        this.onSelect(this.menu, this.index, { x, y, h });
      } else {
        if (isClick) {
          this.menu.isFold = !this.menu.isFold;
          MenuModule.asycMenu();
          if (this.onFoldChange !== undefined) {
            this.onFoldChange();
          }
        }
      }
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