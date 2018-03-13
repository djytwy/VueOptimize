<template>
	<div id="app1">
		<input v-model='a'>
		<span>{{ a }}</span>
	</div>
</template>

<script>
	export default {
	  name: 'app1',
	  data () {
	    return {
	      a: '小田的Vue!!!'
	    }
	  }
	}
</script>

<style scoped>
	#app1{
		color: orangered;
		font-size: 20px;
	}
</style>
