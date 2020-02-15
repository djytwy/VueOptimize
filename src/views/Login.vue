<template>
  <div>
		<h1>登录</h1>
		<el-input v-model="user" />
		<el-input v-model="pwd" />
		<el-button @click="handleLogin">点击</el-button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'login',
	data() {
		return {
			user: '',
			pwd: ''
		}
	},
	methods: {
		handleLogin () {
			console.log(this.$router)
			console.log(this.$route)
      const data = {
        phoneNumber: this.user,
        password: this.pwd,
        $router: this.$router,
        $route: this.$route
      }
      this.login(data)
    },
    ...mapActions({
      login: 'user/login'
    })
	}
}
</script>

<style lang="scss" scoped>

</style>