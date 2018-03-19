<template>
	<div id="vue_component">
		<p>局部定义的组件</p>
		<xyj></xyj>
		<!-- <twy2 message='hello!'></twy2> -->
		<p>父组件内容传到子组件中！</p>
		<twy2 v-bind:message='message1'></twy2>
		<p>for循环遍历的组件</p>
		<ol>
			<todo_item v-for='(item,index) in sites' :key="index" v-bind:todo="item"></todo_item>	
		</ol>

		<p>子组件各自有一个全新的数据对象！</p>
		<div id="vue_parent_child">
			<counter_num v-bind:initialCounter="initialCounter"></counter_num>
			<counter_num v-bind:initialCounter="initialCounter"></counter_num>
		</div>
		<br>

		<p>父组件与子组件的通信，自定义事件</p> 
		<p>{{ total }}</p>
		<increment @increment="incrementTotal"></increment>
		<increment @increment="incrementTotal"></increment>

		<p>父组件的内容由子组件传递事件而改变！</p>
		<div class="demo">
			<p v-for="msg in messages">{{ msg }}</p>
			<button_message v-on:message="handleMessage"></button_message>
		</div>

		<p>Vue插槽的概念</p>
		<my_computer>
			<!-- <h1 slot="CPU">酷睿I7</h1>
			<p>这是机箱</p>
			<p>机箱里的各种部件</p>
			<p slot="GPU">GTX 1080TI</p>
			<p slot="memory">samsung32G</p> -->
		</my_computer>
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

	const counter_num = {
		template:'<button v-on:click="counter +=1 ">{{ counter }}</button>',
		// props:{
		// 	propA:{
		// 		type:String,
		// 		required:true
		// 	},
		// 	propB:['initialCounter']
		// },
		props:['initialCounter'],
		data:function(){
			return { counter: this.initialCounter }
		}
	}

	const increment={
		template:'<button v-on:click="incrementCounter">{{ counter }}</button>',
		data:function(){
			return{
				counter:0
			}
		},
		methods:{
			incrementCounter:function(){
				this.counter += 1
				this.$emit('increment')
			}
		}
	}

	const button_message={
		template:`<div>
			<input type="text" v-model="message"/>
			<button v-on:click="handleSendMessage">Send</button>
		</div>`,
		data:function(){
			return{
				message:'test message'
			}
		},
		methods:{
			handleSendMessage:function(){
				this.$emit('message',{ message:this.message })
			}
		}
	}

	const GPU = {
		template:`<div>GTX1080TI</div>`
	}

	const CPU = {
		template:`<div>酷睿I7-8990X</div>`
	}

	const memory = {
		template:`<div>Samsung32G</div>`
	}

	const computer = {
		template:
		`<div class="container">
		  <header>
		    <slot name="header"></slot>
		  </header>
		  <main>
		    <slot></slot>
		  </main>
		  <CPU>
		    <slot name="CPU"></slot>
		  </CPU>
		</div>`,
		components:{
			'CPU':CPU
		}

	}

	const my_computer = {
		template:`<computer>
		  <h1 slot="header">这里是header！</h1>

		  <p>主要内容的一个段落。</p>
		  <p>另一个主要段落。</p>

		  <p slot="CPU"></p>
		</computer>`,
		components:{
			'computer':computer
		}
	}


	export default {
		name:'vue_component',
		components:{
			'xyj':Child,
			'twy2':twy2,
			'todo_item':todo_item,
			'counter_num':counter_num,
			'increment':increment,
			'button_message':button_message,
			// 'app_slot':app_slot,
			// 'GPU':GPU,
			'my_computer':my_computer
		},
		data () {
			return {
				sites:[
					{ text: 'twy' },
					{ text: 'taobao' },
					{ text: 'baidu' }
				],
				message1:"this is props!!!",
				initialCounter:0,
				total:0,
				messages:[]
			}
		},
		methods:{
			incrementTotal:function(){
				this.total += 1
			},
			handleMessage:function(payload){
				this.messages.push(payload.message)
			}
		},
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