<template>
	<div id="formAdd">
		<el-button type="primary" @click="show = !show" class="mybutton">添加人员</el-button>
		<transition name="el-zoom-in-top">
			<el-form :model="ruleForm2" v-show="show" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  	<el-form-item label="身份" prop="identity" class="form_this">
			    	<el-select v-model="ruleForm2.identity" clearable placeholder="请选择身份" style="width:100%">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
			  	</el-form-item>
			  	
			  	<el-form-item label="姓名" prop="name" class="form_this">
			    	<el-input v-model="ruleForm2.name" auto-complete="off" placeholder="请输入姓名"></el-input>
			  	</el-form-item>

			  	<el-form-item label="密码" prop="password" class="form_this">
			    	<el-input type="password" v-model.number="ruleForm2.password" placeholder="请输入密码"></el-input>
			  	</el-form-item>

			  	<el-form-item label="手机号码" prop="phone" class="form_this">
			    	<el-input v-model="ruleForm2.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
			  	</el-form-item>

			  	<el-form-item style="margin-left:-100px">
			    	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			    	<el-button @click="resetForm('ruleForm2')">重置</el-button>
			  	</el-form-item>

			</el-form>
		</transition>

		<div class="peopleTable" style="text-align:left;margin-left:25%">
			<el-table
			    :data="tableData"
			    style="width: 64%"
			    max-height="100%">

			    <el-table-column
			  	  fixed="left"
			      prop="name"
			      label="姓名"
			      width="300">
			    </el-table-column>

			    <el-table-column
			      prop="work"
			      label="干啥的？"
			      width="305">
			    </el-table-column>

			    <el-table-column 
			      label="操作"
			      width="300">
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
	</div>
</template>

<script>
	export default {
		name:'formAdd',
		data() {
	      var checkIdentity = (rule, value, callback) => {
	        if (!value) {
	          	return callback(new Error('身份不能为空！'));
	        }else{
	        	callback ()
	        }
	      };
	      var validateName = (rule, value, callback) => {
	        if (!value) {
	          	return callback(new Error('请输入姓名'));
	        }else{
	        	callback();
	        }
	      };
	      var validatePassword = (rule, value, callback) => {
	        if (!value) {
	          	return callback(new Error('请输入密码'));
	        } else {
	          	callback();
	        }
	      };
	      var validatePhone = (rule, value, callback) => {
	        if (!value) {
	          	return callback(new Error('请输入手机号码'));
	        } else {
	          setTimeout(() => {
		          	const regPhone = RegExp(/0?(13|14|15|17|18|19)[0-9]{9}/)
		          	if (regPhone.test(value) !== true){
		          		return callback(new Error('请输入正确的手机号码！'))
		          	}else{
		          		return callback()
		          	} 
	          	},1000);
	        }
	      };
	      return {
	      	options: [{
	          value: '研发大神',
	          label: '研发大神'
	        }, {
	          value: '客服才子',
	          label: '客服才子'
	        }],
	        ruleForm2: {
	        	identity: '',
	        	name: '',
		        password: '', 
		        phone:''
	        },
	        rules2: {
	          password: [
	            { validator: validatePassword, trigger: 'blur' }
	          ],
	          name: [
	            { validator: validateName, trigger: 'blur' }
	          ],
	          identity: [
	            { validator: checkIdentity, trigger: 'change' }
	          ],
	          phone: [
	            { validator: validatePhone, trigger: 'blur' }
	          ]
	        },
	        show:true,
	        tableData: [{
	          name: '张麻子',
	          work: '研发大神',
	          
	        }, {
	          name: '张麻子',
	          work: '研发大神',
	          
	        }, {
	          name: '张麻子',
	          work: '研发大神',
	        }],
	      }
	    },
	    methods: {
	    	handleCommand(command) {
		        this.$message('click on item ' + command);
		    },
	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		    },
	      	resetForm(formName) {
	        	this.$refs[formName].resetFields();
	      	},
	  		deleteRow(index, rows) {
	        	rows.splice(index, 1);
	      	}
	    }
	}
</script>

<style scoped>
	.form_this{
		width: 30%;
		margin-left: 32%; 
	}
	.mybutton{
		margin-bottom: 30px;
	}

	.el-dropdown-link {
	   	cursor: pointer;
	   	color: #409EFF;
	}
	.el-icon-arrow-down {
	   	font-size: 12px;
	}

</style>