<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <addPeopleForm/>
    <addPeopleTable/>
<!--     <router-view></router-view> -->
  </div>
</template>

<script>
import addPeople from './components/add_people'
import addPeopleForm from './components/addPeopleForm'
import addPeopleTable from './components/addPeopleTable'

export default {
  name: 'App',
  components: {
    addPeople,
    addPeopleForm,
    addPeopleTable
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
  margin-top: 60px;
}
</style>
