<template>
	<div id="addPeopleForm">
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
	</div>
</template>

<script>

	import axios from 'axios'

	export default {
		name:'addPeopleForm',
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
		          value: 3,
		          label: '程序汪'
		        }, {
		          value: 2,
		          label: '客服喵'
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
		        show:false,
		    }
		},
		methods: {

	      	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
			          	console.log("验证通过！")
			          	const PeopleMessage = { 
			          		"identity": this.ruleForm2.identity,"name": this.ruleForm2.name,
			          		"password": this.ruleForm2.password,"phone": this.ruleForm2.phone
			          	}

						

						const success = this.success
						const res 	  =	this.resetForm

						const error   = this.error

						// axios.post('http://127.0.0.1:8000/api/addPeople/',{
						// 	"PeopleMessage":PeopleMessage
						// })

						axios.post('api/addPeople/',{
							"PeopleMessage":PeopleMessage
						})

						.then(function (response) {
							console.log("提交成功！")
							success()
							res(formName)
						})

						.catch(function (error) {
							console.log(error);
							error()
						})
			            
			        } else {
			            console.log('error submit!!')
			            this.error()
			            return false;
			        }
		        });
		    },

	      	resetForm(formName) {
	        	this.$refs[formName].resetFields()
	      	},

	      	success() {
		        this.$message({
		          message: "提交成功！(〃'▽'〃)",
		          type: 'success'
		        })
		    },

		    error(){
		    	this.$message.error('填写的信息有误o(╥﹏╥)o');
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