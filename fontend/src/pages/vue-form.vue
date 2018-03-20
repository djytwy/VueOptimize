<template>
	<div id="vue-form">
		<input v-model="message" placeholder="输入内容">
		<p>Message is : {{ message }}</p>
		<br>
		<input type="checkbox" name="checkbox1" id="checkbox1" v-model="checked">
		<label for="checkbox1">{{ checked }}</label>
		<br>
		<input type="radio" name="one" value="One" v-model="pick">
		<label for="one">One</label>
		<input type="radio" name="two" value="Two" v-model="pick">
		<label for="two">Two</label>
		<p>{{ pick }}</p>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default{
		data(){
			return {
				message:'',
				checked:false,
				pick:'',
			}
		}
	}

	axios.post('/user',{
		firstName:'Fred',
		lastName:'Flintstone'
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
</script>

<style scoped>
	
</style>