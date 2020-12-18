<template>
  <div class="login">
    <form>
      <input v-model="username" placeholder="账号"/>
      <br/>
      <input v-model="password" placeholder="密码"/>
      <br/>
      <button @click="login" v-show="canLogin">登陆</button>
    </form>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Login extends Vue {
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
