import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	routes: [
	    {
	    	path:'/vue_one',
	    	name:'one',
	    	component:one,
	    },
	]
})
