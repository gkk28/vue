<template>
	<div>
		<h2>加减法计算器</h2>
		<div>
			<input type="button"  value="-" @click='minHandle(5)' />
			<span>{{num}}</span>
			<input type="button"  value="+" @click='addHandle(2)' />
		</div>
	</div>
</template>

<script>
	export default{
//		data(){
//			return{
////				num:100
//				num:this.$store.state.num
//			}
//		},
		computed:{
			num(){
				return this.$store.state.num
			}		
		},
		methods:{
			minHandle(num){
//				this.num -=5;
				this.$store.commit({
					type:"MinIncrement",
					n:num,
					name:'stark'
				})
//				console.log(this.$store.state.num)
			},
			addHandle(num){
//				this.num +=5;
				this.$store.commit({
					type:"AddIncrement",
					n:num,
					name:'stark'
				})
//				console.log(this.$store.state.num)
			}
		}
	}
</script>

<style>
</style>