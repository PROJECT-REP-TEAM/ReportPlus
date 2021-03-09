import store from "../../store/index.js"

module.exports = {
	//提示窗
	tipMsg: function (title, icon, time, mask,callback) {
	    title = title == undefined ? "系统繁忙" : title;
	    icon = icon == undefined ? "none" : icon;
	    time = time == undefined ? 1300 : time;
	    mask = mask == undefined ? true : mask;
	    uni.showToast({
	        title: title,
	        icon: icon,
	        mask: mask,
	        duration: time,
			success() {
				if(callback){
					setTimeout(()=>{
						callback()
					},time);
				}	
			}
	    })
	},
	getTelephoneInfo(){
		return new Promise((resolve, reject) => {
			var data = uni.getStorageSync("telephoneInfo");
			if(!data){
				// 获取右上角胶囊的位置信息
				let btn = wx.getMenuButtonBoundingClientRect();
				uni.getSystemInfo({
					success: e => {
						let info = {
							screenHeight:e.screenHeight,
							statusBarHeight:e.statusBarHeight,
							windowWidth:e.windowWidth,
							top:btn.top
						}
						uni.setStorageSync("telephoneInfo",info);
						resolve(info);
					},
					fail: (err) => {
						reject(err);
					}
				})
			}else{
				resolve(data);
			}
		})
	},
	// 获取当前年月日
	getNowDate(){
		let date = new Date;
		let now = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
		return now;
	},
	// 获取上个月的年月日
	getPreMonth(date) {
		var arr = date.split('-');
		var year = arr[0]; //获取当前日期的年份
		var month = arr[1]; //获取当前日期的月份
		var day = arr[2]; //获取当前日期的日
		var days = new Date(year, month, 0);
		days = days.getDate(); //获取当前日期中月的天数
		var year2 = year;
		var month2 = parseInt(month) - 1;
		if (month2 == 0) {
			year2 = parseInt(year2) - 1;
			month2 = 12;
		}
		var day2 = day;
		var days2 = new Date(year2, month2, 0);
		days2 = days2.getDate();
		if (day2 > days2) {
			day2 = days2;
		}
		if (month2 < 10) {
			month2 = '0' + month2;
		}
		var t2 = year2 + '-' + month2 + '-' + "01";
		return t2;
	},
	isJSON(str){
		if (typeof str == 'string') {
			try {
				var obj=JSON.parse(str);
				if(typeof obj == 'object' && obj ){
					return true;
				}else{
					return false;
				}
			} catch(e) {
				console.log('error：'+str+'!!!'+e);
				return false;
			}
		}
	},
}