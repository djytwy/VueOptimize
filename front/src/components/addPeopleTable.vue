<template>
	<div id="peopleTable" style="text-align:left;margin-left:28%">
		<el-table
		    :data="tableData"
		    style="width: 64%"
		    max-height="742">

		    <el-table-column
		  	  fixed="left"
		      prop="name"
		      label="姓名"
		      width="352">
		    </el-table-column>

		    <el-table-column
		      prop="work"
		      label="干啥的？"
		      width="302">
		    </el-table-column>

		    <el-table-column 
		      label="操作"
		      width="210">
		      <template slot-scope="scope">
		        <el-button
		          @click.native.prevent="deleteRow(scope.$index, tableData)"
		          type="text"
		          size="small">
		          移除
		        </el-button>
		      </template>      
		    </el-table-column>

		</el-table>
	</div>
</template>

<script>

	import axios from 'axios'

	export default {
		name:'addPeopleTable',
		data(){
			return {
				// tableData: [{
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }, {
		  //         name: '张麻子',
		  //         work: '研发大神',
		          
		  //       }],
		  		tableData:[],
			} 
		},
		mounted:function(){
			console.log("Vue初始化成功！")
			this.getdata()
		},
		methods: {

			deleteRow(index, rows) {
	        	rows.splice(index, 1);
	      	},

	      	getdata:() => {
	      		
	      		var vm = this
	      		axios.get('http://127.0.0.1:8000/api/managePeople/')

	      		.then(function(response){
					vm.tableData = response
				})

				.catch(function(error){
					console.log("Error!!!")
				})
	      	}
		},
		watch: {
			tableData:function() {
				console.log("获取请求的数据....")
				this.getdata()
			}
		}
	}
</script>

<style scoped>
	
</style>