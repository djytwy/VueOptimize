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
				// reverData:[{name:'zmz',work:'djy'},{name:'zmz',work:'djy'},{name:'zmz',work:'djy'}],
		  		responseData:[null],
			} 
		},

		mounted:function(){
			console.log("Vue初始化成功！")
			this.$nextTick(function(){
				var self = this

				axios.get('/api/managePeople/')

				.then(function(response){
					self.responseData = response.data
					console.log(self.responseData)
				})

				.catch(function(error){
					console.log("Error!!!")
				})

			})
		},

		methods: {

			deleteRow(index, rows) {
	        	rows.splice(index, 1);

	        	axios.post('/api/hidePeople',{
	        		"hide":true
	        	})

	        	.then(function(response){
	        		console.log('修改成功	！')
	        		console.log(response)
	        	})

	        	.catch(function(error){
	        		console.log("Error!!!")
	        	})
	      	},

		},
		computed:{
			reverData:function(){
				var vm = this
				if(vm.responseData[0] !== null ){
					var tableData2 = []
					for (let i in vm.responseData) {
						if(vm.responseData[i]["i_groupid"] === 1){
							vm.responseData[i]["work"] = "研发大神"
						}else{
							vm.responseData[i]["work"] = "客服才子"
						}
						vm.responseData[i]["name"] = vm.responseData[i]["s_username"]
						if(vm.responseData[i]["s_show"] === 1){
							tableData2.push(vm.responseData[i])
						}
					} 
				}
				return tableData2
			}
		},
		// watch: {
		// 	tableData:function() {
		// 		console.log("获取请求的数据....")
		// 		this.getdata()
		// 	}
		// }
	}
</script>

<style scoped>
	
</style>