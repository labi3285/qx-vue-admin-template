<template>
  <div class="home">
    <HomeHeader class="header" />
    <div class="body">
      <SideMenu class="side-menu" />
      <HomeContent class="content">
        123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345451234512345123451234512345123451234512345123451234512345123451234512345123451234512345123451234512345
      </HomeContent>
    </div>
    <HomeFooter />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  import HomeHeader from "./Comps/HomeHeader.vue";
  import SideMenu from "./Comps/SideMenu/SideMenu.vue";
  import HomeContent from "./Comps/HomeContent.vue";
  import HomeFooter from "./Comps/HomeFooter.vue";

  import { AccountModule } from "@/store/modules/AccountModule";
  import { MenuModule } from "@/store/modules/MenuModule";

  @Component({
    name: "Home",
    components: { 
      HomeHeader,
      SideMenu,
      HomeContent,
      HomeFooter,
    },
  })
  export default class Home extends Vue {

    private async mounted() {
      await AccountModule.login();
      // console.warn(process.env)
    }
  }
</script>

<style lang="stylus" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .header {
      width: 100vw;
    }
    .body {
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .side-menu {

      }
      .content {
        flex: 1;
        width: 0;
      }
    }
  }
</style>