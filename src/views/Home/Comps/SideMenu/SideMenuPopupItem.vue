<template>
  <div class="side-menu-popup-item" :class="isSelect ? 'side-menu-popup-item-select' : ''" @click.stop="handleSelect" @mouseenter.stop="handleSelect">
    <svg-icon class="icon" :icon-class="menu.icon" />
    <div class="name no-select">{{ menu.name }}</div>
    <div v-if="menu.subMenu.length > 0" class="flex-space"></div>
    <svg-icon v-if="menu.subMenu.length > 0" class="arrow" icon-class="arrow_down" iconWidth="10px" iconHeight="10px" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  import { Menu } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenuPopupItem",
    components: {
      SideMenuPopupItem
    },
  })
  export default class SideMenuPopupItem extends Vue {
    @Prop() public menu!: Menu;
    @Prop() public index!: number;
    @Prop({ default: false, }) public isSelect!: boolean;
    @Prop() public onSelect!: (menu: Menu, index: number, origin: { x: number, y: number, h: number }) => {};
    private handleSelect() {
      if (this.onSelect !== null) {
        const el = this.$el as HTMLElement;
        var y = el.offsetTop;
        var next = el.offsetParent as HTMLElement;
        while (next !== null) {
          y += next.offsetTop;
          next = next.offsetParent as HTMLElement;
          }
        const x = el.getBoundingClientRect().left + el.getBoundingClientRect().width;
        const h = el.getBoundingClientRect().height;
        this.onSelect(this.menu, this.index, { x, y, h });
      }
    }
  }
</script>

<style lang="stylus" scoped>
.side-menu-popup-item {
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #222d3c;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  .icon {
    color: #ffffff;
    margin-left: 15pt;
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
    transform:rotate(-90deg);
  }
}
.side-menu-popup-item-select {
  background-color: #041527;
}
.side-menu-popup-item:hover {
  background-color: #041527;
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