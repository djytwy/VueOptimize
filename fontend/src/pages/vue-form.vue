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
		<br>
		<p>{{ isSuccess }}</p>
		<p>{{ axios_message }}</p>
		<button @click="sendMessage">点我发送消息！</button>
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
				axios_message:'hello axios !!',
				isSuccess:''
			}
		},
		methods:{
			sendMessage:function(){
				const a = this.axios_message;
				// let time = '' ;
				axios.post('/test',{
					"axios_message":this.axios_message
				})

				.then(function (response) {
					console.log(response);
					// time = response.data
					this.isSuccess = response.data
				}.bind(this))

				.catch(function (error) {
					console.log(error);
					this.isSuccess = 'error'
				});
			}
		}
	}
</script>

<style scoped>
	
</style>