<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {initalDevice} from '@/utils/initalDevice'
export default {
  name: 'App',
  created() {
    console.log('init--App--created');
    // initalDevice();
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
