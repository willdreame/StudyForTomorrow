
Promise.retry = function(fn, times = 4, retryInterval = 1000){

    return new Promise(async(resolve,reject)=>{
       while(times--) {
           console.log(times, 'tiiii')
        try{
            const res = await fn();
            return resolve(res);
        }catch(e){
            setTimeout(()=>{
                if(times > 0) {
                    console.log(`请求失败正在重试，还剩${times}次,错误信息${e}`)
                }else {
                    return reject(e)
                }
            },retryInterval)
        }
       }
    })
}

//测试
Promise.retry(axiosFn, 4,1000).then(res => {
    console.log(`获得的数据为：${res}`);
}).catch(error => {
    console.log(`失败了，错误信息为：${error}`);
});

//模拟异步请求
function axiosFn() {
    return new Promise((resolve, reject) => {
        const flge = Math.random(); //随机值
        setTimeout(() => {
            //大于0.7就是成功
            if (flge > 0.9) {
                return resolve(flge);
            } else {
                return reject(flge);
            }
        }, 1000)
    })
}