

// 防抖  ：在事件被触发n 秒后再执行回调，如果在这n秒内又被触发，则重新计时

const debounce = (fn,delay) => {
    let timer;
    return function() {
        var _this = this;
        var args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.applay(_this,args)
        },delay)
    }
}


