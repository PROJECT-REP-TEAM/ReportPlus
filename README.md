# uni-app小程序数据中心报表

## 该小程序主要使用了ucharts和wyb-table两插件实现的数据报表功能，感谢ucharts作者秋云和SirW的优秀开源项目

# `小伙伴们，如果觉得还不错记得 star 呀`

## 快速体验

![](https://img-blog.csdnimg.cn/2021030910362459.jpg#pic_center)

## 特点
- 使用的是uni-app中最受欢迎的图表uCharts插件完成图表展示，该插件文档详细，且调用简单方便、性能及体验极佳。# [ucharts图表插件](https://ext.dcloud.net.cn/plugin?id=271)。
- 使用wyb-tav=ble插件完成表格功能，支持图表排序、滚动等众多功能，上手极其方便。# [table表格插件](https://ext.dcloud.net.cn/plugin?id=2667)
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

## 由于其他图表都有对应的插件文件，所以仅对text-block封装的参数做说明
 1. 文本块 (text-block)

    | params | 类型           | 说明                                        |
    | ------ | -------------- | ------------------------------------------- |
    | kind  | string         | 表示使用哪种类型的文本块                              |
    | background    | string         | 背景颜色             |
    | content  | array | 该文本框内文本内容 |
	
- kind所对应的文本类型和传参类型可自行看json格式
