<template>
	<view class="content">
		<scroll-view v-if="true" scroll-y class="data_body" :style="{height:scrollHeight}">
			<!--数据进度条-->
			<view class="progress">
				<data-progress :progressList="progressData" :borderRadius="20" padMiddle="true"></data-progress>
			</view>
			
			<!-- 新增小程序会员趋势-->
			<view class="friend_operate">
				<text-block :content="baseData"></text-block>
				<view class="trend_title">新增小程序会员趋势</view>
				<mix-canvas :mixJson="userTrand" canvasId="ff"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 会员扫码率趋势-->
			<view class="friend_operate">
				<text-block :content="scanTrand"></text-block>
				<view class="trend_title">会员扫码率趋势</view>
				<mix-canvas :mixJson="scanTrandPrecent" canvasId="gg"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 小程序活跃会员占比-->
			<view class="friend_operate">
				<text-block :content="miniActive"></text-block>
				<mix-canvas :mixJson="miniActivePrecent" canvasId="hh"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 小程序购买活跃会员占比-->
			<view class="friend_operate">
				<text-block :content="buyActive"></text-block>
				<mix-canvas :mixJson="buyActivePrecent" canvasId="ii"></mix-canvas>
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
	var _self;
	export default {
		name:'user-healthy',
		props: {
			progressData: {
				type: Array,
				default: []
			},
			baseData: {
				type: Array,
				default:  []
			},
			userTrand:{
				type: Object,
				default: {}
			},
			scanTrand:{
				type:Array,
				default: []
			},
			scanTrandPrecent:{
				type: Object,
				default: {}
			},
			miniActive:{
				type: Array,
				default: []
			},
			miniActivePrecent:{
				type: Object,
				default: {}
			},
			buyActive:{
				type: Array,
				default: []
			},
			buyActivePrecent:{
				type: Object,
				default: {}
			},
			scrollHeight:{
				type:String,
				default:"600px"
			}
		},
		components:{
			DataProgress,MixCanvas
		},
		data() {
			return {
			}
		},
		mounted() {
		},
		methods:{
		}
	}
</script>

<style lang="less">
	.content{
		padding-top: 10rpx;
		.progress,.firend_operate{
			padding: 0 10rpx;
		}
		.progress{
			margin-bottom: 20rpx;
		}
		.friend_operate{
			padding: 30rpx 10rpx;
			.title{
				text-align:left;
				margin-bottom: 20rpx;
			}
			.trend_title{
				text-align: right;
				font-size: 22rpx;
				color: #ff9900;
				margin-top: 20rpx;
			}
		}
	}
	
</style>
