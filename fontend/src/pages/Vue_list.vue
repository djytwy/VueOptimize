<template>
	<div id="todo-list-example">
	  <input
	    v-model="newTodoText"
	    v-on:keyup.enter="addNewTodo"
	    placeholder="Add a todo"
	  >
	  <ul>
	    <li
	      is="todo_item"
	      v-for="(todo, index) in todos"
	      v-bind:key="todo.id"
	      v-bind:title="todo.title"
	      v-on:remove="todos.splice(index, 1)"
	    ></li>
	  </ul>

	  <span v-for="n in 10">{{n}}</span>
	  
	</div>
</template>

<script>

	const todo_item = { template:'\
	    <li>\
	      {{ title }}\
	      <button v-on:click="$emit(\'remove\')">X</button>\
	    </li>\
	  ',
	  props:['title'] 
	}

	export default {
		name: 'Vue_list',
		components:{
			'todo_item':todo_item,
		},
		data () {
			return {
				newTodoText:'',
				todos:[
				  {
			        id: 1,
			        title: 'Do the dishes',
			      },
			      {
			        id: 2,
			        title: 'Take out the trash',
			      },
			      {
			        id: 3,
			        title: 'Mow the lawn'
			      }
				],
				nextTodoId: 4
			}
		},
		methods :{
		    addNewTodo: function () {
		      this.todos.push({
		        id: this.nextTodoId++,
		        title: this.newTodoText
		      })
		      this.newTodoText = ''
		    }
  		}
	}
	
</script>