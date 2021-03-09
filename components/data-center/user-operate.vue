<template>
	<view class="content">
		<scroll-view v-if="true" scroll-y class="data_body" :style="{height:scrollHeight}">
			<!--数据进度条-->
			<view class="progress">
				<data-progress :progressList="userOperateLineBar" :borderRadius="20" padMiddle="true"></data-progress>
			</view>
			<view class="split_line"></view>
			
			<!-- 活跃会员-->
			<view class="friend_operate">
				<view class="title">活跃会员</view>
				<text-block :content="userActive"></text-block>
			</view>
			
			<!-- 会员消费 -->
			<view class="friend_operate"  style="padding-bottom: 30rpx;">
				<view class="title">会员消费</view>
				<text-block :content="userConsume"></text-block>
			</view>
			<view class="split_line"></view>
			
			<!-- 会员ARPU -->
			<view class="friend_operate">
				<view class="title">会员ARPU
					<text class="font-small">(会员年度平均销售金额)</text>
					<text class="trend_title">目标增量{{userARPU.targetAdd}}</text>
				</view>
				<mix-canvas :mixJson="userARPU" canvasId="cc"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 会员消费频次 -->
			<view class="friend_operate">
				<view class="title">会员消费频次
					<text class="font-middle">(年)</text>
					<text class="trend_title">目标增量{{userARPU.targetAdd}}</text>
				</view>
				<mix-canvas :mixJson="userARPU" canvasId="dd"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 微客群运营-->
			<view class="friend_operate">
				<view class="title">活跃会员分布
					<text class="font-middle">(最近活跃时间)</text>
				</view>
				<!-- <data-table :table="userActiveAt"></data-table> -->
				<senior-table :headers="dataTable.headers" :contents="dataTable.contents" :urlCol="dataTable.urlCol" :firstLineFixed="true" :sortCol="dataTable.sortCol" :computedCol="dataTable.computedCol" :formatCol="dataTable.formatCol"></senior-table>
			</view>
			<view class="split_line"></view>
			
			<!-- X商品脱落率-->
			<view class="friend_operate">
				<view class="title">
					X（慢病） 商品脱落率
				</view>
				<progress-canvas :progressJson="xProductDropPrecent"></progress-canvas>
			</view>
			
			<!-- 慢病病种脱落率-->
			<view class="friend_operate">
				<view class="title">慢病病种脱落率
				</view>
				<mix-canvas :mixJson="illnessDropPrecent" canvasId="ee"></mix-canvas>
			</view>
			
			<!-- W商品脱落率-->
			<view class="friend_operate">
				<view class="title">
					W（保健） 商品脱落率
				</view>
				<progress-canvas :progressJson="wProductDropPrecent"></progress-canvas>
			</view>
		</scroll-view>
		<view  v-else class="container padding_stand-big normal_color">
			<li class="iconfont icon-cry cry"></li>暂无数据
		</view>
	</view>
</template>

<script>
	import DataProgress from "../data-progress/data-progress.vue"
	import MixCanvas from "../canvas/mix-canvas.vue"
	import ProgressCanvas from "../canvas/progress-canvas.vue"
	import SeniorTable from "../data-table/senior-table.vue"
	
	import userOperateLineBar from '../../static/json/user-operate/1.json';
	import userActive from '../../static/json/user-operate/2.json';
	import userConsume from '../../static/json/user-operate/2.json';
	import userARPU from '../../static/json/user-operate/4.json';
	import userActiveAt from '../../static/json/user-operate/6.json';
	import xProductDropPrecent from '../../static/json/user-operate/7.json';
	import wProductDropPrecent from '../../static/json/user-operate/9.json';
	import illnessDropPrecent from '../../static/json/user-operate/8.json';
	import dataTable from "../../static/json/table/2.json"
	
	export default {
		name:'user-operate',
		props: {
			scrollHeight:{
				type:String,
				default:"600px"
			}
		},
		components:{
			DataProgress,MixCanvas,ProgressCanvas,SeniorTable
		},
		data() {
			return {
				userOperateLineBar,
				userActive,
				userConsume,
				userARPU,
				userActiveAt,
				xProductDropPrecent,
				wProductDropPrecent,
				illnessDropPrecent,
				dataTable
			}
		},
		mounted() {
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.content{
		padding-top: 10rpx;
		.progress,.firend_operate{
			padding: 0 10rpx;
		}
		.progress{
			margin-bottom: 20rpx;
		}
		.friend_operate{
			padding: 30rpx 20rpx;
			.title{
				text-align:left;
				margin-bottom: 30rpx;
				font-size: 40rpx;
			}
			.trend_title{
				float: right;
				font-size: 22rpx;
				color: #ff9900;
				margin-top: 20rpx;
			}
		}
	}
</style>
