
# UReport数据报表中心小程序

## 该小程序主要使用了ucharts和wyb-table两插件实现的数据报表功能，感谢作者秋云和SirW的优秀开源项目

## 下载地址
- [码云Gitee开源](https://gitee.com/huang_si_hao/u_report)
- [Dcloud插件市场](https://ext.dcloud.net.cn/plugin?id=4373)

## `无偿开源！你们的start是我的动力！`

## 快速体验

![体验码](https://img-blog.csdnimg.cn/2021030910362459.jpg#pic_center)

## 特点
- 使用的是uni-app中最受欢迎的图表uCharts插件完成图表展示，该插件文档详细，且调用简单方便、性能及体验极佳。 [ucharts图表插件](https://ext.dcloud.net.cn/plugin?id=271)。
- 使用wyb-tav=ble插件完成表格功能，支持图表排序、滚动等众多功能，上手极其方便。 [table表格插件](https://ext.dcloud.net.cn/plugin?id=2667)
- 对页面、图表、表格都进行了封装，用户只需要进行数据组装即可快速完成页面的布局。

## UReport的页面
- 企业微信
- ![企业微信](https://img-blog.csdnimg.cn/20210311104151959.gif#pic_center)
- 会员运营
- ![会员运营](https://img-blog.csdnimg.cn/20210325112754464.gif#pic_center)
- 会员健康
- ![会员健康](https://img-blog.csdnimg.cn/20210311104348588.gif#pic_center)
- 会员服务
- ![会员服务](https://img-blog.csdnimg.cn/20210325112821960.gif#pic_center)
- 智慧教育报表中心
- ![智慧教育报表中心](https://img-blog.csdnimg.cn/2021032511291616.gif#pic_center)


## 由于其他图表都有对应的插件文件，所以仅对data-progress和text-block封装的参数做说明

 1. 进度条 (data-progress)

	| params    | 类型   | 说明                                       |
	| ------    | ------ | -------------------------------------------|
	| dataType  | string | 不传表示不展示目标值和现在值，传则展示       |
	| expect    | string | 目标值                                     |
	| now       | string | 现在达成值                                 |
	| value     | string | 现在达成值/目标值                           |

 2. 文本块 (text-block)

    | params | 类型           | 说明                                        |
    | ------ | -------------- | ------------------------------------------- |
    | kind  | string         | 表示使用哪种类型的文本块                       |
    | background    | string         | 背景颜色             |
    | content  | array | 该文本框内文本内容 |
	
- kind目前取值：1,2,3,4,5(注意：content中：文本放text中，数字放value，colortext为文本颜色，colorvalue为数字颜色)
- 1：分两层，上层纯数字，下纯文字 的排版类型
```
{
	"kind":1,
	"background":["#3EB2F5","#9374F7"],
	"content":[
		{"text":"","value":"5860","colortext":"","colorvalue":"#fff","size":"44rpx"},
		{"text":"新增微好友","value":"","colortext":"#fff","colorvalue":"","size":"24rpx"}
	]
}
```
- 2：分两层，上层文字+数字，下层文字+数字 的排版类型
```
{
	"kind":2,
	"background":["#B678FD","#4A64F9"],
	"content":[
		{"text":"环比增长","value":"3.2%","colortext":"#fff","colorvalue":"#fff","size":"24rpx"},
		{"text":"同比增长","value":"1.1%","colortext":"#fff","colorvalue":"#fff","size":"24rpx"}
	]
}
```
- 3：分三层，上层纯数字，中层纯文字，下层分左右块，左下层文+数，右下层文+数 的排版类型
```
{
	"kind":3,
	"background":["#B678FD","#4A64F9"],
	"content":[
		{"text":"","value":"38%","colortext":"","colorvalue":"#fff","size":"44rpx"},
		{"text":"小程序购买活跃会员占比","value":"","colortext":"#fff","colorvalue":"","size":"24rpx"},
		{"text":"同比","value":"2.5%","colortext":"#fff","colorvalue":"#fff","size":"20rpx"},
		{"text":"环比","value":"3.2%","colortext":"#fff","colorvalue":"#fff","size":"20rpx"}
	]
}
```
- 4：分三层，上层纯文字，中层纯数字，下层文+数， 的排版类型
```
{
	"kind":4,
	"background":["#F0F0F0","#F0F0F0"],
	"content":[
		{"text":"已评价数","value":"","colortext":"#000","colorvalue":"","size":"24rpx"},
		{"text":"","value":"161","colortext":"","colorvalue":"#09A1FD","size":"44rpx"},
		{"text":"增长","value":"","colortext":"#000","colorvalue":"","size":"20rpx"},
		{"text":"up","value":"325","colortext":"#DF297D","colorvalue":"#f25287","size":"20rpx"}
	]
}
```
- 5：分5层，具体可看会员运营-活跃会员的板块
```
{
	"kind":5,
	"background":["#F77E89","#F7953B"],
	"content":[
		{"text":"会员销售占比","value":"","colortext":"#fff","colorvalue":"","size":"24rpx"},
		{"text":"","value":"80%","colortext":"","colorvalue":"#fff","size":"44rpx"},
		{"text":"环比","value":"81.5%","colortext":"#fff","colorvalue":"#fff","size":"20rpx"},
		{"text":"同比","value":"-81.3%","colortext":"#fff","colorvalue":"#fff","size":"20rpx"},
		{"text":"平均参考水平","value":"85%","colortext":"#fff","colorvalue":"#fff","size":"20rpx"}
	]
},
```

## 常见问题
### 问题一：点开下拉列表、日历等弹出图层时，图表的层级会盖过这些样式
  - 
![解决前](https://img-blog.csdnimg.cn/20210315165140477.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAwMDgxNg==,size_16,color_FFFFFF,t_70#pic_center)
- 原因：canvas在微信默认是最高级
- 解决方法：将图表改成2d模式既可以解决图表层级最高级的问题，案例中提供了2d模式的demo
 - ![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031517032053.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAwMDgxNg==,size_16,color_FFFFFF,t_70#pic_center)
### 问题二：图表点击无效，显示不出提示信息
- 原因：因为对它们做了限制，如果不禁掉这些点击事件，会影响整个页面的滚动，因为当你手指在图表上滚动时，会触发图表的事件从而页面的滚动事件失效
- 解决方法：查看ucharts的混合图表案例，加上点击方法和事件

## 后期计划
- 新增排行的复用组件
- 待uCharts的2.0稳定发布，改成uCharts2.0

## 作者联系：1051495009@qq.com
