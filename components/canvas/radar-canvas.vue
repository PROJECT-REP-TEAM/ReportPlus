<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchRadar"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" @touchstart="touchRadar"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts.min.js';
	var _self;
	var canvaRadar=null;
	export default {
		props:{
			RadarModel:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
			}
		},
		mounted() {
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
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				let Radar={categories:[],series:[]};
				Radar.categories=this.RadarModel.categories;
				Radar.series=this.RadarModel.series;
				_self.textarea = JSON.stringify(this.RadarModel);
				_self.showRadar("canvasRadar",Radar);
			},
			showRadar(canvasId,chartData){
				canvaRadar=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'radar',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						radar: {
							max: 200,//雷达数值的最大值
							gridType:'radar'//radar或者circle可选，网格样式，默认radar
						}
					}
				});
			},
			touchRadar(e){
				canvaRadar.touchLegend(e);
				canvaRadar.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
