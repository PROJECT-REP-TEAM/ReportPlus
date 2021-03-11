<template>
	<view class="content">
		<scroll-view v-if="true" scroll-y class="data_body" :style="{height:scrollHeight}">
			<!--数据进度条-->
			<view class="progress">
				<data-progress :progressList="wechatLineBar" :borderRadius="20" padMiddle="true"></data-progress>
			</view>
			<view class="split_line"></view>
			
			<!-- 微好友运营-->
			<view class="friend_operate">
				<view class="title">微好友运营</view>
				<text-block :content="friendTextBlock"></text-block>
				<panel-canvas :panelData="panelData"></panel-canvas>
				<view class="trend_title">新增微好友&小程序会员趋势</view>
				<mix-canvas :mixJson="friendTrand" canvasId="aa"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 2d模式-->
			<view class="friend_operate">
				<view style="height: 800rpx;">
					<view class="title">2D模式</view>
					<view class="trend_title">模拟器可能会不显示，请到真机下运行查看</view>
					<view  style="height: 600rpx;">
						<u-charts
						class="qiun-charts" 
						type="column" 
						canvasId="renshu2" 
						:opts="opts"
						canvas2d="true"
						:chartData="chartData" 
						:inScrollView="true"
						@getIndex="getIndex"
						@complete="complete"
						@scrollLeft="scrollLeft"
						@scrollRight="scrollRight"
						/>
					</view>
				</view>
			</view>
			<view class="split_line"></view>
			
			<!-- 微客群运营-->
			<view class="friend_operate">
				<view class="title">微客群运营</view>
				<text-block :content="friendTextBlock"></text-block>
				<view class="trend_title">新增人群&退群人数趋势</view>
				<mix-canvas :mixJson="teamTrand" canvasId="bb"></mix-canvas>
			</view>
			<view class="split_line"></view>
			
			<!-- 客户联系-->
			<view class="friend_operate">
				<view class="title">【客户联系】1对1运营执行</view>
				<senior-table :headers="dataTable.headers" :contents="dataTable.contents" :urlCol="dataTable.urlCol" :firstLineFixed="true" :sortCol="dataTable.sortCol"></senior-table>
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
	import uCharts from "../canvas/mix-test.vue"
	import PanelCanvas from "../canvas/panel-canvas.vue"
	import SeniorTable from "../data-table/senior-table.vue"
	
	import wechatLineBar from '../../static/json/wechat/1.json';
	import friendTextBlock from '../../static/json/wechat/2.json';
	import panelData from '../../static/json/wechat/3.json';
	import friendTrand from '../../static/json/wechat/4.json';
	import teamTrand from '../../static/json/wechat/5.json';
	import dataTable from "../../static/json/wechat/6.json"
	
	export default {
		name:'wechat',
		props: {
			scrollHeight:{
				type:String,
				default:"600px"
			}
		},
		components:{
			DataProgress,MixCanvas,PanelCanvas,SeniorTable,uCharts
		},
		data() {
			return {
				wechatLineBar,
				friendTextBlock,
				friendTrand,
				panelData,
				teamTrand,
				dataTable,
				scrollTop: 0,
				//覆盖默认配置，开启滚动条
				opts:{
					enableScroll: true,
					xAxis: {
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
				},
				//模拟的后端返回数据，实际应用自行拼接
				chartData:{
					categories: ['2020-12-10', '2020-12-11', '2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16', '2020-12-17', '2020-12-18'],
					series: [
						{
							name: '日新增用户量',
							data: [10, 20, 10, 30, 20, 15, 30, 40,55]
						}
					]
				}
			}
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		methods:{
			//获取点击图表索引
			getIndex(e){
				console.log(e);
				//TODO something
				console.log(e.charts.opts);
				//获取到索引后，可以获取该索引相关一系列数据，其中e.charts.opts中可获取相关
				console.log(e.charts.opts.categories[e.currentIndex],e.charts.opts.series[0].data[e.currentIndex])
			},
			complete(e){
				console.log(e);
				//移除监听事件，避免其他动作时触发该事件
				e.charts.delEventListener('renderComplete')
				//TODO something
				//下面展示了渲染完成后显示自定义tooltip
				//{mp:{changedTouches:[{x: 0, y: 80}]}}其中x值无需指定，y值为tooltip显示的上边距的值
				let cindex=3;//默认显示的索引位置
				let textList=[{text:'默认显示的tooltip',color:null},{text:'类别1：某个值xxx',color:'#2fc25b'},{text:'类别2：某个值xxx',color:'#facc14'},{text:'类别3：某个值xxx',color:'#f04864'}];
				e.charts.showToolTip({mp:{changedTouches:[{x: 0, y: 80}]}}, {
					index:cindex,
					textList:textList
				});
			},
			//开启滚动条后，滚动条到最左侧触发的事件，用于动态打点
			scrollLeft(e){
				console.log(e);
			},
			//开启滚动条后，滚动条到最右侧触发的事件，用于动态打点
			scrollRight(e){
				console.log(e);
			},
			scroll(e) {
					this.scrollTop = e.detail.scrollTop
			},
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
				text-align: right;
				font-size: 22rpx;
				color: #ff9900;
				margin-top: 50rpx;
			}
		}
	}
	
</style>
