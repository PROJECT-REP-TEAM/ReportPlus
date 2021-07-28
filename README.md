<h3 align="center">RepurtPlus数据报表 基础版</h3>

<h4 align="center">小程序、H5等多端兼容</h4>

<div align="center">

[![star](https://gitee.com/ureport/ReportPlus/badge/star.svg)](https://gitee.com/ureport/ReportPlus.git)  [![fork](https://gitee.com/ureport/ReportPlus/badge/fork.svg)](https://gitee.com/ureport/ReportPlus.git)  [![](https://img.shields.io/badge/插件市场-ReportPlus-red)](https://ext.dcloud.net.cn/plugin?id=4373)  [![](https://img.shields.io/badge/QQ群-878946748-red)](https://qm.qq.com/cgi-bin/qm/qr?k=ar_gonKNpbGHOiAxKXuE-9VRY89n-3kT&jump_from=webapi)



```shell
无偿开源！你们的Star是我的动力！
```

------------------------------------------------------------------------


</div>

# ReportPlus数据报表中心小程序

## 该小程序主要使用了ucharts和wyb-table两插件实现的数据报表功能，感谢作者秋云和SirW的优秀开源项目

## 下载地址
- [码云Gitee开源](https://gitee.com/ureport/ReportPlus)
- [Dcloud插件市场](https://ext.dcloud.net.cn/plugin?id=4373)

## 快速体验

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210415154942151.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAwMDgxNg==,size_16,color_FFFFFF,t_70#pic_center)


## 特点
- 使用的是uni-app中最受欢迎的图表uCharts插件完成图表展示，该插件文档详细，且调用简单方便、性能及体验极佳。 [ucharts图表插件](https://ext.dcloud.net.cn/plugin?id=271)。
- 使用wyb-tav=ble插件完成表格功能，支持图表排序、滚动等众多功能，上手极其方便。 [table表格插件](https://ext.dcloud.net.cn/plugin?id=2667)
- 对页面、图表、表格都进行了封装，用户只需要进行数据组装即可快速完成页面的布局。

## ReportPlus的页面
- 综合报表
![综合报表](https://img-blog.csdnimg.cn/20210625090759444.png#pic_center)

- 会员报表
![会员报表](https://img-blog.csdnimg.cn/20210625090851706.png#pic_center)

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
### 问题一：图表偶尔加载不出或直接显示报错页面
- 原因：canvasId重复导致图表加载不出；canvasId丢失导致无法获得dom；
- 解决方法：请务必在组件上定义canvasId，不能为纯数字、不能为变量、不能重复、尽量长一些;请检查微信小程序的基础库，修改至2.16.0或者最新版本的基础库;请检查父元素或父组件是否用v-if来控制显示，如有请改为v-show，并将v-show的逻辑绑定至组件。

### 问题二：图表点击显示不出提示信息或点击位置不精准
- 原因：组件内嵌套组件 + 开启2d模式 + 组件中使用scroll-view标签，使得获取图表的定位不准
- 解决方法：组价内加入属性 :inScrollView="true" :pageScrollTop="pageScrollTop" :ontouch="true" ，其中pageScrollTop为当前滚动距离顶部的高度

### 更多问题查看：[秋云图表组件工具](https://demo.ucharts.cn/#/) -> 常见问题

## 后期计划

- 新增更多报表页面
- 探索更多datacom的用法使用在qiun-data-charts上

## 使用手册
[uchart官网](https://demo.ucharts.cn/#/)
[table插件使用说明](https://ext.dcloud.net.cn/plugin?id=2667)

## QQ群
- 群号：878946748 （进群备注）
