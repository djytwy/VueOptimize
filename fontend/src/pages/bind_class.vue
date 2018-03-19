<template>
	<div id="bind_classs">
		<div class="static"
	    	v-bind:class="{ active: isActive, 'text-danger': hasError }">
	    	我是一个被绑定的CSS和Style！
		</div>

		<div v-bind:class="classObject">计算属性绑定！</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				isActive: true,
				hasError: false,
				error:null
			}
		},
		computed:{
			classObject:function(){
				return {
					active:this.isActive && !this.error,
					'text-danger':this.error && this.error.type === 'fatal'
				}
			}
		}
	}
</script>

<style scoped>
	.static {
		color: skyblue;
		font-size: 20px;
		margin: 5px;
	}
	.active {
		color: orangered;
		font-size: 24px;
	}
	.text-danger {
		color: darkred;
		font-size: 26px;
	}
</style>