const getFormatDate = function(time, pattern) {  
    let date = new Date(time)?new Date(time):new Date()
  
    if (pattern == undefined) {  
        pattern = "yyyy-MM-dd hh:mm:ss w";  
    }  
    const weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    let o = {  
        "M+": date.getMonth() + 1,  
        "d+": date.getDate(),  
        "h+": date.getHours(),  
        "m+": date.getMinutes(),  
        "s+": date.getSeconds(),  
        "q+": Math.floor((date.getMonth() + 3) / 3),  
        "S":  date.getMilliseconds() ,
        "w": weeks[date.getDay()] 
    };  
    if (/(y+)/.test(pattern)) {  
        pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));  
    }  

    for (var k in o) {  
        if (new RegExp(`(${k})`).test(pattern)) {  
            pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  

    return pattern;  
};

export default getFormatDate