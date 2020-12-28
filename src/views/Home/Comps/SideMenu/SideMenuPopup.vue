<template>
  <div class="side-menu-popup" :style="{ left, top }" v-clickoutside="clickoutside">
    <div class="menu" v-for="(e, i) in menus" :key="i">
      <SideMenuPopupItem :menu="e"
        :index="i"
        :isSelect="i == selectIndex" 
        :onSelect="onSelect"/>
    </div>
  </div>
</template>

<script lang="ts">
  // @ts-ignore
  import clickoutside from './clickoutside.js';

  import { Vue, Component, Prop } from 'vue-property-decorator';
  import SideMenuPopupItem from './SideMenuPopupItem.vue';

  import { Menu, MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "SideMenuPopup",
    components: {
      SideMenuPopupItem,
    },
    directives: {
      clickoutside,
    }
  })
  export default class SideMenuPopup extends Vue {
    @Prop() public menus!: Menu[];
    @Prop() public x!: number;
    @Prop() public y!: number;
    @Prop() public onClickoutside!: () => {};

    private selectIndex: number = -1;
    private isGetReady: boolean = false;

    private get left() {
      

      return this.x + "px";
    }
    private get top() {
      if (!this.isGetReady || this.$el === undefined || this.$el.getBoundingClientRect === undefined) {
        return this.y + "px";
      }
      const h = this.$el.getBoundingClientRect().height;
      if (this.y > h / 2) {
          return (this.y - h / 2) + "px";
      } else {
        return "0";
      }
    }

    private clickoutside() {
      if (this.onClickoutside !== undefined) {
        this.onClickoutside();
      }
    }

    private mounted() {
      this.isGetReady = true;
    }

    private onSelect(e: Menu, index: number, origin: { x: number, y: number, h: number }) {
      this.cleanPopup();
      this.selectIndex = index;
      Vue.component('SideMenuPopup', SideMenuPopup);
      const vm = new Vue({
        render: h => h('SideMenuPopup', { 
            props: {
              menus: e.subMenu,
              x: origin.x,
              y: origin.y + origin.h / 2,
              onClickoutside: () => {
                this.cleanPopup();
                this.selectIndex = -1;
              }
            }
          })
      }).$mount();
      document.body.appendChild(vm.$el);
      this.popup = vm;
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
.side-menu-popup {
  width: 190px;
  position absolute;
  top 100px;
  width 200px
  background-color blue;
  .menu {

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
</style>