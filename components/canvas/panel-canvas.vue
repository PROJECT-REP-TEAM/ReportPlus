<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifndef MP-ALIPAY -->
			<view class="progress">
				<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
				<view class="title">{{panelData.series[0][0].title}}</view>
			</view>
			<view class="progress">
				<canvas canvas-id="canvasGauge2" id="canvasGauge2" class="charts"></canvas>
				<view class="title">{{panelData.series[1][0].title}}</view>
			</view>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '../../utils/uCharts/u-charts.min.js';
	var _self;
	var canvaGauge=null;
   
	export default {
		props:{
			panelData:{
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
				gaugeWidth:15,
				type:'progress'
			}
		},
		created() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(325);
			this.cHeight=uni.upx2px(250);
			this.getServerData();
		},
		methods: {
			getServerData(){
				
				let Gauge={categories:[],series:[]};
				let Gauge2={categories:[],series:[]};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Gauge.categories=this.panelData.categories;
				Gauge2.categories=this.panelData.categories;
				Gauge.series=this.panelData.series[0];
				Gauge2.series=this.panelData.series[1];
				// _self.textarea = JSON.stringify(this.panelData);
				_self.showGauge("canvasGauge",Gauge);
				_self.showGauge("canvasGauge2",Gauge2);
			},
			showGauge(canvasId,chartData){
				canvaGauge = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:11,
					legend:{show:false},
					title: {
						name: Math.round(chartData.series[0].data*100)+'%',
						color: chartData.categories[0].color,
						fontSize: 25*_self.pixelRatio,
						offsetY:50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15*_self.pixelRatio,
						offsetY:-50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'progress',
							width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:100,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.8*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				});
			},
		}
	}
</script>

<style scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-columns{
		margin-top: 20rpx;
	}
	.qiun-charts {
		width: 100%!important;
		height: 350upx!important;
		background-color: #FFFFFF;
		position: relative;
		display: flex;
		justify-content: space-around;
	}
	.progress{
		width: 50%;
		height: 100%;
	}
	.title{
		margin-top: 20rpx;
	}
	.charts {
		width: 325upx;
		height: 250upx;
		background-color: #FFFFFF;
		margin: 0 auto;
	}
</style>
