import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import learn_vuerouter from '../pages/learn_vuerouter'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import Vue_list from '@/pages/Vue_list'
import vue_component from '@/pages/vue_component'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	routes: [
	    {
	        path: '/',
	        name: 'HelloWorld',
	        component: HelloWorld
	    },
	    {
	    	path:'/learn_vuerouter',
	    	name:'learn_vuerouter',
	    	component:learn_vuerouter
	    },
	    {
	    	path:'/vue_list',
	    	name:'vue_list',
	    	component:Vue_list
	    },
	    {
	    	path:'/vue_component',
	    	name:'vue_component',
	    	component:vue_component
	    },
	    {
	    	path:'/one',
	    	name:'one',
	    	components:{
	    		default:one,
	    		one:two,
	    		two:three,
	    		three:one
	    	}
	    },
	    {
	    	path:'/two',
	    	name:'two',
	    	components:{
	    		default:two,
	    		one:one,
	    		two:two,
	    		three:three
	    	}
	    }
	]
})
