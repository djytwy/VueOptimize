<template>
	<div id="home">
		<img src="../assets/logo.png">
	    <ul>
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
	          <router-link to="/vue-form">vue-form</router-link>
	        </li>
	        <li>
	          <router-link to="/addpeople">/addpeople</router-link>
	        </li>
	    </ul>
	</div>
</template>

<script>
	export default {
		name:'home',
	}
	
</script>

<style scoped>

</style>