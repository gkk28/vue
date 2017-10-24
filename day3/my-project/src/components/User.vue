<template>
    <div>
        <router-link :to="'/user/' + item.id" v-for="item in userList">{{item.username}} </router-link>
        <div>
                <p> 编号：{{userInfo.id}}</p>
                <p> 姓名：{{userInfo.username}}</p>
                <p> 爱好：{{userInfo.hobby}}</p>
                <p> 性别：{{userInfo.sex}}</p>
        </div>
    </div>
</template>

<script>
	let data = [
		{
			id:1,
			tip:'vip',
			username: 'gkk',
			sex: '男',
			hobby: 'coding'
		},
		{
			id:2,
			tip:'vip',
			username: 'kyn',
			sex: '女',
			hobby: 'music'
		},
		{
			id:3,
			tip:'common',
			username: 'gxx',
			sex: '男',
			hobby: 'sleep'
		},
	]
	export default{
        data(){
            return{
                userList:data,
                userInfo:''
            }
        },
        watch:{
            $route(){
                this.getData();
            }
        },
        created(){
            this.getData();
        },
		methods:{
			getData(){
//              console.log(this.$route);
                let id = this.$route.params.id;
                if(id){
                    this.userInfo = this.userList.filter((item)=>{
                        return item.id == id;
                    })[0]
                }
                console.log(this.userInfo);
			}
		}
	}
</script>

<style>
</style>