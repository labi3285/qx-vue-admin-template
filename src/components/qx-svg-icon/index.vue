<template>
  <svg :class="svgClass" :width="iconWidth" :height="iconHeight" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconWidth: {
      type: String,
      default: '14px'
    },
    iconHeight: {
      type: String,
      default: '14px'
    },
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  /* vertical-align: -0.15em; */
  stroke: red;
  fill: currentColor;
  overflow: hidden;
}
</style>
