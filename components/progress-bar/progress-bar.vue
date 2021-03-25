<template>
	<view>
		<view class="ranking">
			<view class="ranking-item" v-for="(content,index) in content" :key="index">
				<view class="name">{{content.name}}</view>
				<view class="progress" >
					<text :style="{background:content.background,width:content.width + '%'}"></text>
				</view>
				<view class="num">{{content.num}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'ranking-list',
		props:{
			content:{
				type: Array,
				default() {
					return []
				}
			}
		},
		methods:{
			init(){
				if(this.content && this.content.length >0){
					let max = Math.max.apply(Math,this.content.map(item => { return item.num }));
					this.content.map((item,index) =>{
						item.width = this.computeWidth(max,item.num);
					});
					this.$emit("updateRanking",this.content)
				}
			},
			computeWidth(max,current){
				let num = (current / max) * 100;
				return num.toFixed(2);
			},
		},
		mounted() {
			this.init();
		}
	}
</script>

<style scoped lang="scss">
	.ranking-item{
		display: flex;
		margin-bottom: 13rpx;
		padding: 10rpx;
		align-content: center;
		height: 24rpx;
		
		.name{
			padding-right: 10rpx;
			color: #868688;
			font-size: 20rpx;
			flex: 1;
		}
		.progress{
			flex:5;
			text-align: left;
			padding-right: 10rpx;
			
			text{
				display: inline-block;
				height: 100%;
				border-radius: 30rpx;
				vertical-align:top;
			}
			
		}
		.num{
			font-size: 26rpx;
			color: #3EB2F5;
			flex: 1;
		}
	}
</style>
