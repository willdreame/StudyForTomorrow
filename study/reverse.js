const str = 'www.baidu.com'           //  com.baidu.www

function rcerse(str){
    const arr = str.split('.')
    for(let l = 0, r = arr.length-1; l < r; l++,r-- ) {
        [arr[l], arr[r]] = [arr[r],arr[l]]
    }
    return arr.join('.')
}


console.log(rcerse(str))