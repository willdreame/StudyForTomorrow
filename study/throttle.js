


// 节流   每隔一段时间，只执行一次函数


const throttle = (fn,delay)=> {
    let timer;
    return function(){
        var _this = this;
        var args = arguments;
        if(timer) {
            return
        }
        timer = setTimeout(()=>{
            fn.applay(_this,args);
            timer  = null; // 在delay 后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        },delay)
    }
}