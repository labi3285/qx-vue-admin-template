<template>
  <div class="qx-icon">
    <img :src="source" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator"

  @Component
  export default class QxIcon extends Vue {
    @Prop({ default: undefined }) icon?: string
    @Prop({ default: undefined }) path?: string
    @Prop({ default: undefined }) url?: string

    get source() {
      if (this.icon) {
        if (devicePixelRatio == 2) {
          return  this.icon + "@2x.png"
        } else if (devicePixelRatio >= 3) {
          return this.icon + "@3x.png"
        } else if (devicePixelRatio >= 1) {
          return this.icon + "@1x.png"
        } else {
          return this.icon + "@2x.png"
        }
      } else if (this.path) {
        return this.path
      } else {
        return this.url
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .qx-icon
    display block

</style>
