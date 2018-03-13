<template>
	<div id="vue_component">
		<xyj></xyj>
		<twy2 message='hello!'></twy2>
		<ol>
			<todo_item v-for='item in sites' v-bind:todo="item"></todo_item>	
		</ol>
	</div>
</template>

<script>
	const Child = {
		template:'<div id=Child>这是一个局部定义的组件！</div>'
	}
	const twy2 = {
		template:'<span id=twy2>{{message}}</span>',
		props:['message']
	}
	const todo_item = {
		props:['todo'],
		template:'<li>{{todo.text}}</li>'
	}
	export default {
		name:'vue_component',
		components:{
			'xyj':Child,
			'twy2':twy2,
			'todo_item':todo_item
		},
		data () {
			return {
				sites:[
					{ text: 'twy' },
					{ text: 'taobao' },
					{ text: 'baidu' }
				]
			}
		}
	}
</script>

<style scoped>
	#Child {
		font-size: 24px;
		color: skyblue;
	}
	#twy2 {
		font-size: 20px;
		color: pink;
	}
</style>