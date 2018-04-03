<template>
	<div id="peopleTable" style="text-align:left;margin-left:28%">
		<el-table
		    :data="reverData"
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
		          @click.native.prevent="deleteRow(scope.$index, reverData)"
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
		  		responseData:[null],
			} 
		},

		mounted:function(){
			
			this.$nextTick(function(){
				var self = this

				axios.get('/api/managePeople/')
				//axios.get('http://127.0.0.1:8000/api/managePeople/')

				.then(function(response){
					self.responseData = response.data
					console.log("数据初始化成功！")
				})

				.catch(function(error){
					console.log("Error!!!")
				})

			})
		},

		methods: {

			deleteRow(index, rows) {

				// axios.post('http://127.0.0.1:8000/api/rmPeople/',{
	   //      		"i_userid":this.reverData[index]["i_userid"]
	   //      	})

	        	axios.post('api/rmPeople/',{
	        		"i_userid":this.reverData[index]["i_userid"]
	        	})

	        	.then(function(response){
	        		console.log('修改成功！')
	        	})

	        	.catch(function(error){
	        		console.log("Error!!!")
	        	})

	        	rows.splice(index, 1);
	      	},

		},
		computed:{
			reverData:function(){
				var vm = this
				if(vm.responseData[0] !== null ){
					var compuData = []
					for (let i in vm.responseData) {
						if(vm.responseData[i]["i_groupid"] === 3){
							vm.responseData[i]["work"] = "程序汪"
						}else if(vm.responseData[i]["i_groupid"] === 2){
							vm.responseData[i]["work"] = "客服喵"
						}else{
							vm.responseData[i]["i_show"] = 0
						}
						vm.responseData[i]["name"] = vm.responseData[i]["s_username"]
						if(vm.responseData[i]["i_show"] === 1){
							compuData.push(vm.responseData[i])
						}
					} 
				}
				return compuData
			}
		},

	}
</script>

<style scoped>
	
</style>