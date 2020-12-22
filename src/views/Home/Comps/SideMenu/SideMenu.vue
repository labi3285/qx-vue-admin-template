<template>
  <div class="side-menu" :style="{ width }">
    <div class="menu" v-for="(e, i) in menu" :key="i">
      <SideMenuItem :menu="e" @click.native.stop="clickMenu(i, e)"/>
      <div class="sub-menu" v-if="!e.isFold">
        <SideMenuSubItem v-for="(e, j) in e.subMenu" :key="i + '-' + j" :menu="e" 
          :index="{ idx0: i, idx1: j }"
          :isSelect="i == menuSelectIndex.idx0 && j == menuSelectIndex.idx1" 
          :onSelect="onSubMenuSelect"
          :onCancel="onSubMenuCancel"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component';
  import SideMenuItem from './SideMenuItem.vue';
  import SideMenuSubItem from './SideMenuSubItem.vue';
  import SideMenuPopup from './SideMenuPopup.vue';

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenu",
    components: {
      SideMenuItem,
      SideMenuSubItem,
      SideMenuPopup,
    },
  })
  export default class SideMenu extends Vue {
    private menuSelectIndex: { idx0: number, idx1: number } = { idx0: -1, idx1: -1 } 
    private get menu() {
      return MenuModule.getSideMenu;
    }
    private get width() {
      return MenuModule.getIsSideMenuFold ? '40px' : '200px';
    }
    private async mounted() {
      await MenuModule.fetchMenus();
    }
    private clickMenu(i: number, e: Menu) {
      e.isFold = !e.isFold;
      MenuModule.asycMenu();
      this.cleanPopup();
    }
    private onSubMenuSelect(e: Menu, index: { idx0: number, idx1: number }, origin: { x: number, y: number, h: number }) {
      this.cleanPopup();
      this.menuSelectIndex = index;
      Vue.component('SideMenuPopup', SideMenuPopup);
      const vm = new Vue({
        render: h => h('SideMenuPopup', { 
            props: {
              menus: e.subMenu,
              x: origin.x,
              y: origin.y + origin.h / 2,
              onClickoutside: () => {
                this.cleanPopup();
                this.menuSelectIndex = { idx0: -1, idx1: -1 };
              }
            }
          })
      }).$mount();
      document.body.appendChild(vm.$el);
      this.popup = vm;
    }
    private onSubMenuCancel() {
      this.cleanPopup();
    }
    private cleanPopup() {
      if (this.popup !== null) {
        document.body.removeChild(this.popup.$el);
        this.popup.$children[0].$destroy();
        this.popup.$destroy();
        this.popup = null;
      }
    }
    private popup: Vue | null = null;

    private beforeDestroy() {
      this.cleanPopup();
    }
  }
</script>

<style lang="stylus" scoped>
.side-menu {
  // overflow: scroll;
  background-color: #222d3c;
  width: 100%;
  .menu {
  }
  .sub-menu {
    overflow: hidden;
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