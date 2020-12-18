<template>
  <div class="home">

    <div class="top"></div>
    <SideMenu class="sidebar" />
    <div class="content">

      {{ $store.getters.userName }}

    </div>
    
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  import SideMenu from "./Comps/SideMenu/SideMenu.vue";

  import { AccountModule } from "@/store/modules/AccountModule";

  @Component({
    name: "Home",
    components: { 
      SideMenu
    },
  })
  export default class Home extends Vue {

    private async mounted() {
      await AccountModule.login();

      // console.warn(process.env)

    }
    // private get name(): string {
    //   return AccountModule.getAccount.user?.name ?? '';
    // }

  }
</script>

<style lang="stylus" scoped>
.top {
    position: absolute;
    left: 0; right: 0;
    height: 44px;
    background-color: blue;
}
.sidebar {
    position: absolute;
    left: 0; top: 44px; bottom: 0;
    z-index: 999;
}
.content {
    position: absolute;
    background-color: white;
    left:200px; top: 72px; right: 0; bottom: 0;
}
</style>