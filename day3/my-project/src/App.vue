<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
    	<router-link exact to="/">home主页</router-link>
    	<router-link to="/work"  active-class="starkwang">我的工作</router-link>
    	<router-link to="/higkk"  tag="span">hiGkk</router-link>
    	<router-link to="/user/"  tag="span">我的userList</router-link>
    	<router-link to="/users/2/profile"  tag="span">我的profile</router-link>
    	<router-link to="/users/4/posts" tag="span">我的posts</router-link>
    	<router-link to="/about" tag="span">我是About</router-link>
    	<router-link to="/zhrb" tag="span">知乎日报axios</router-link>
    	<router-link to="/daily" tag="span">知乎日报http</router-link>
    	<router-link to="/increment" tag="span">加减法计算器</router-link>
    	<router-link to="/hero" tag="span">王者axios</router-link>

    	
    	
    	<router-view></router-view>
    </nav>
    
    
    

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
	width: 100%;
}
.router-link-active{
	background: red;
}
.starkwang{
	background-color: #de3b8b;
}
.activeClass{
	font-size: 18px;
	cursor: pointer;
	text-decoration: underline;
}
</style>
