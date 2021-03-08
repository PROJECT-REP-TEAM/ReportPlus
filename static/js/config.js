
const COLOR = [
    "#EE6A66", "#6BC588", "#FFC300", "#24ABFD"
];

const RESPOND = {
    success: 0,
    warn: 301,
    error: 500,
};

const TIMEARRAY = [
    {
        text: '当天',
        value: 'today'
    },
    {
        text: '昨天',
        value: 'yesterday'
    },
    {
        text: '本周',
        value: 'week'
    },
    {
        text: '上周',
        value: 'weeklast'
    },
    {
        text: '本月',
        value: 'month'
    },
    {
        text: '上月',
        value: 'monthlast'
    },
	{
	    text: '指定日期',
	    value: 'auto'
	}
];
const TABLIST = [
    {name:"企业微信",type:"WECHAT"},
    {name:"会员运营",type:"OPERATE"},
    {name:"高济健康",type:"GJJK"},
    {name:"会员服务",type:"SERVICE"},
];


module.exports = {
    COLOR,
    TIMEARRAY,
    TABLIST,
    RESPOND,
}