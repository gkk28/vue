import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Work from '@/components/Work'
import Higkk from '@/components/Higkk'
import User from '@/components/User'
import Zhrb from '@/components/zhrb'
import Increment from '@/components/Increment'
import Hero from '@/views/hero'
import Daily from '@/views/daily'


Vue.use(Router)
const UserProfile = { template: `<div> 我是profile 组件 </div>` };
const UserPosts = { template: `<div> 我是UserPosts 组件 </div>` };
const Users = {
    // template: '<div>User {{ $route.params.id }}</div>'
    template: ' <div class="user"> \
            <h2> Users  </h2> \
            <router-view> </router-view> \
            </div>'
}
const About = { template: `<div> 我是About父组件 <router-view> </router-view> </div>` };
const Blog = { template: `<div> 我是Blog组件, 我的父组件是About </div>` };
const Info = { template: `<div> 我是Info组件, 我的父组件是About </div>` };
const NotFound = { template: `<div>404 您访问的页面不存在 </div>` };

export default new Router({
	mode: 'hash',
	linkExactActiveClass:'activeClass',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/increment',
      name: 'increment',
      component: Increment
    },
    {
      path: '/zhrb',
      name: 'Zhrb',
      component: Zhrb
    },
    {
      path: '/higkk',
      name: 'Higkk',
      component: Higkk
    },
    {
    	path: '/user/:id?',
    	component: User
   	},
    {
      path: '/users/:id',
      component: Users,
      children: [
      	{
      		path: 'profile',
          component: UserProfile
      	},
      	{
      		path: 'posts',
          component: UserPosts
      	}
      ]
    },
    {
    	path: '/about',
      component: About,
    	children: [
    		{
    			path: '',
       	 	name: 'blog',
        	component: Blog
    		},
    		{
       	 path: '/info',
       	 name: 'info',
        	component: Info
    		}
    	]
    },
    {
    	path: '*',
//    	component: NotFound,
    	redirect: (to) => {
    		console.log(to);
    		if (to.path === '/www') {
    			return '/work/'
    		}else if (to.path === '/uuu'){
    			return '/user/1'	
    		}else {
    			return '/'
    		}
    	}
    }
    
  ]
})
