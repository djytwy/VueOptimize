<template>
	<div id="one">
		This is one !!!
		<p>original message:"{{ message }}"</p>
		<P>computed reversed message:"{{ reversedMessage }}"</P>
	</div>
</template>

<script>
	// vue中直接导入第三方模块的办法1:直接引入
	// import { jquery } from '../../test/jquery.min.js'
	// vue中直接导入第三方模块的办法2:npm安装
	// import $ from 'jquery'

	export default {
	  name: 'one',
	  data(){
	  	return {
	  		message:'Hello',
	  	}
	  },
	  computed:{
	  	reversedMessage:function(){
	  		return this.message.split('').reverse().join('')
	  	}
	  }
	}
	// $(document).ready(function(){
	//   $("#one").click(function(){
	//     $("#one").addClass("blue");
	//   });
	// });
</script>

<style scoped>
	.blue {
		color: #234dc8;
		font-size:24px;
	}
</style>