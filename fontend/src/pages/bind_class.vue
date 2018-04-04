<template>
	<div id="bind_classs">
		<div class="static"
	    	v-bind:class="{ active: isActive, 'text-danger': hasError }">
	    	我是一个被绑定的CSS和Style！
		</div>

		<div v-bind:class="classObject">计算属性绑定！</div>
		<div v-bind:class="[activeClass,errorClass]">数组渲染模式</div>
		<div v-bind:class="[isActive ? activeClass : '', errorClass]">三元数组渲染模式</div>
		<div v-bind:class="[{ active:isActive },errorClass]">对象渲染</div>
		<my_component v-bind:class="{ active:isActive }"></my_component>
		<div v-bind:style="{ color:activeColor, fontSize: fontSize + 'px' }">绑定CSS</div>
		<div v-bind:style="styleObject">对象语法！</div>
	</div>
</template>

<script>

	const my_component = {
		template:`<div>{{ computed_data.show_data }}</div>`,
		data(){
			return{
				my_data:"this is a data !",	
			} 
		},
		computed:{
			computed_data:function(){
				return {
					show_data:this.my_data.toUpperCase(),
				}
			}
		}
	}

	export default{
		data() {
			return{
				isActive: true,
				hasError: false,
				error:null,
				activeClass:'active',
				errorClass:'text-danger',
				activeColor:'darkblue',
				fontSize:'16',
				styleObject:{
					color:'red',
					fontSize:'20px'
				}
			}
		},
		components:{
			'my_component':my_component,
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