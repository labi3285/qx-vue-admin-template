<template>
  <div class="TypeScript">

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class TypeScript extends Vue {
    username: string = '123'
    password: string = '456'
    get canLogin() {
      return this.username.length > 0 && this.password.length > 0
    }
    login() {
      console.warn(this.username)
      console.warn(this.password)
    }
  }
</script>
