import { login, getInfo } from '../../api/user'
import { Message } from 'element-ui'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const LOGIN = 'LOGIN'// 获取用户信息
const SetUserData = 'SetUserData'// 获取用户信息
const LOGOUT = 'LOGOUT'// 退出登录、清除用户数据
const USER_DATA = 'userData'// 用户数据

export default {
  namespaced: true,
  state: {
    token: getToken() || '',
    user: JSON.parse(localStorage.getItem(USER_DATA) || null)
  },
  mutations: {
    [LOGIN] (state, data) {
      let userToken = data.data
      state.token = userToken
      setToken(userToken)
    },

    [SetUserData] (state, userData = {}) {
      state.user = userData
      localStorage.setItem(USER_DATA, JSON.stringify(userData))
    },
    [LOGOUT] (state) {
      state.user = null
      state.token = null
      removeToken()
      localStorage.removeItem(USER_DATA)
      resetRouter()
    }
  },
  actions: {
    async login (state, data) {
      try {
        let res = await login({
          phoneNumber: data.phoneNumber,
          password: data.password
				})
				// 登录成功后端返回的是一个字符串（token）
        state.commit(LOGIN, res)
        Message({
          message: '登录成功',
          type: 'success',
					duration: '2000'
        })
        setTimeout(() => {
          const redirect = data.$route.query.redirect || '/'
          data.$router.replace({
            path: redirect
          })
        }, 1500)
      } catch (error) {
				console.log(`user错误：${error}`)
      }
    },
    // get user info
    getInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const { data } = response
          if (!data) {
            // eslint-disable-next-line
            reject('验证失败，请重试')
          }
          commit(SetUserData, data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    user (state) {
      return state.user
    }
  }
}
