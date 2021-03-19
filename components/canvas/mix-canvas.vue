<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifndef MP-ALIPAY -->
			<canvas v-if="canvasId && mixJson.categories.length > 7" :id="canvasId" :canvasId="canvasId" class="charts" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
			<canvas v-else-if="canvasId" :id="canvasId" :canvasId="canvasId" class="charts"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	// import uCharts from '../../utils/uCharts/u-charts.min.js';
	import uCharts from '../../js_sdk/u-charts/u-charts.min.js';
	var _self;
	var canvaMix={};
   
	export default {
		name:'mix-canvas',
		props: {
			mixJson:{
				type:Object,
				default:null,
			},
			canvasId: {
				type: String,
				default: 'u-canvas',
			},
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
				yAxis:[],
			}
		},
		mounted() {
			_self = this;
			this.yAxis = this.mixJson.yAxis;
			for(let i=0,len = this.mixJson.yAxis.length;i < len ;i++){
				this.yAxis[i].format = (val)=>{return val.toFixed(this.mixJson.yAxis[i].tofix)+ this.mixJson.yAxis[i].unit}
			}
			for(let i=0,len = this.mixJson.series.length;i < len ;i++){
				if(this.mixJson.series[i].textNoShow){
					this.mixJson.series[i].format = (val)=>{return ""}
				}else{
					this.mixJson.series[i].format = (val)=>{return val + this.mixJson.series[i].unit}
				}
			}
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
				let Mix={categories:[],series:[]};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Mix.categories=this.mixJson.categories;
				Mix.series=this.mixJson.series;
				_self.textarea = JSON.stringify(Mix);
				_self.showMix(_self.canvasId,Mix);
			},
			showMix(canvasId,chartData){
				canvaMix[this.canvasId]=new uCharts({
					$this:this,
					canvasId: this.canvasId,
					type: 'mix',
					fontSize:11,
					padding:[5,5,0,5],
					legend:{
						show:true,
						position:'bottom',
						float:'center',
						padding:5,
						lineHeight:11,
						margin:6,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: chartData.categories.length > 7 ? true:false,
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:chartData.categories.length > 7 ? 7 : chartData.categories.length,
						scrollShow:true,
						gridColor:'#fff',
						scrollAlign:'left'
					},
					yAxis: {
						data:this.yAxis,
						showTitle:true,
						gridType:'dash',
						dashLength:4,
						splitNumber:5
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					enableMarkLine:true,
					extra: {
						column:{
						  width:14*_self.pixelRatio
						},
						tooltip:{
							showBox:false,//是否显示半透明黑色的提示区域
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:8,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						},
						markLine:this.mixJson.target?this.mixJson.target:{}
					},
				});
				/*下面是渲染完成时的事件，不需要请删除，注：拖动和图表交互的时候都会重新渲染
				canvaMix.addEventListener('renderComplete', () => {
				    console.log("图表渲染完成");
				});
				*/
				//下面是拖动滚动条到尽头的事件，不需要请删除
				canvaMix[_self.canvasId].addEventListener('scrollLeft', () => {
				    console.log("已经到最【左】边啦");
				});
				//下面是拖动滚动条到尽头的事件，不需要请删除
				canvaMix[_self.canvasId].addEventListener('scrollRight', () => {
				    console.log("已经到最【右】边啦");
				});
			},
			touchMix(e){
				canvaMix[this.canvasId].scrollStart(e);
			},
			moveMix(e) {
				canvaMix[this.canvasId].scroll(e);
			},
			touchEndMix(e) {
				canvaMix[this.canvasId].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaMix[this.canvasId].touchLegend(e);
				canvaMix[this.canvasId].showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
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
		position: relative;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
