<template>
  <div
      class="qx-button"
      :class="classes"
      @click="handleClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator"
  @Component
  export default class QxButton extends Vue {

    @Prop({ default: true }) isEnabled!: boolean
    @Prop({ default: false }) isSelected!: boolean

    get classes () {
      return {
        'qx-button_disabled': !this.isEnabled
      }
    }

    handleClick (event: Event) {
      if (!this.isEnabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .qx-button
    display inline-block
    color #333333
  .qx-button_disabled
    color #999999
  .qx-button_selected
  .qx-button:active
    opacity 0.3
</style>
