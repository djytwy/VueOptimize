<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-app1></v-app1>
    <ul>
      <li>
        <router-link to="/vue_one">/vue_one</router-link>
      </li>
      <li>
        <router-link to="/vue_list">/vue-list</router-link>
      </li>
      <li>
        <router-link to="/vue_component">/vue_component</router-link>
      </li>
      <li>
        <router-link to="/vue_class">class与style的绑定</router-link>
      </li>
      <li>
        <router-link to="/five">/five</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <router-view class="one" name="one"></router-view>
    <router-view class="two" name="two"></router-view>
    <router-view class="three" name="three"></router-view>
    <!-- <router-view class="vue-list" name="vue-list"></router-view> -->
    
    <!-- <v-Fullcomponent></v-Fullcomponent>
    <v-transition_button></v-transition_button> -->
  </div>
</template>

<script>

import app1 from './components/component1'
import Vue_list from './pages/Vue_list'
import Fullcomponent from './components/Fullcomponent'
import transition_button1 from './components/transition_button1' 

export default {
  name: 'App',
  components: {
      'v-app1':app1,
      'v-Fullcomponent':Fullcomponent,
      'v-transition_button':transition_button1,
      'v-list':Vue_list,
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.one {
  font-size: 24px;
  color: skyblue;
}
.two {
  font-size: 24px;
  color: pink;
}
.three{
  font-size: 24px;
  color: orange;
}
</style>
