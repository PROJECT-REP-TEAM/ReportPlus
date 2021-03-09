# UReport数据报表中心小程序

## 该小程序主要使用了ucharts和wyb-table两插件实现的数据报表功能，感谢作者秋云和SirW的优秀开源项目

## 下载地址
- [码云Gitee开源](https://gitee.com/huang_si_hao/uni_-report)
- [Dcloud插件市场](https://ext.dcloud.net.cn/plugin?id=4373)

## `小伙伴们，如果觉得还不错记得 star 呀`

## 快速体验

![](https://img-blog.csdnimg.cn/2021030910362459.jpg#pic_center)

## 特点
- 使用的是uni-app中最受欢迎的图表uCharts插件完成图表展示，该插件文档详细，且调用简单方便、性能及体验极佳。 [ucharts图表插件](https://ext.dcloud.net.cn/plugin?id=271)。
- 使用wyb-tav=ble插件完成表格功能，支持图表排序、滚动等众多功能，上手极其方便。 [table表格插件](https://ext.dcloud.net.cn/plugin?id=2667)
- 对页面、图表、表格都进行了封装，用户只需要进行数据组装即可快速完成页面的布局。

## UReport的页面
- 企业微信
- ![企业微信](https://img-blog.csdnimg.cn/20210309103640712.gif#pic_center)
- 会员运营
- ![会员运营](https://img-blog.csdnimg.cn/20210309103650305.gif#pic_center)
- 会员健康
- ![会员健康](https://img-blog.csdnimg.cn/20210309103710581.gif#pic_center)
- 会员服务
- ![会员服务](https://img-blog.csdnimg.cn/20210309103717854.gif#pic_center)

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
	"background":["#3EB2F5","#9374F7"],
	"content":[
		{"text":"平均分","value":"","colortext":"#fff","colorvalue":"","size":"24rpx"},
		{"text":"","value":"82","colortext":"","colorvalue":"#fff","size":"44rpx"},
		{"text":"up","value":"0.7","colortext":"","colorvalue":"#fff","size":"20rpx"}
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

## 后期计划
- 新增排行的复用组件
- 待uCharts的2.0稳定发布，改成uCharts2.0
