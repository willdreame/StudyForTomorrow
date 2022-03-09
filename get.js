var object = { 'a': [{ 'b': { 'c': 0 } }] }

/* 第一种 */
const get = (object, path, defaultVal = 'undefined') => {
    // 先将path处理成统一格式
    let newPath = [];
    if (Array.isArray(path)) {
        newPath = path;
    } else {
        // 先将字符串中的'['、']'去除替换为'.'，split分割成数组形式
        newPath = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');//[a,0,b,c]
    }
    // 递归处理，返回最后结果
    return newPath.reduce((o, k, index, arr) => {
        console.log('oooooo', o); // 此处o初始值为下边传入的 object，后续值为每次取的内部值
        console.log('kkkkkk', k); // 此处o初始值为下边传入的 object，后续值为每次取的内部值
        return Object(o)[k]
    }, object) || defaultVal;
}

get(object, 'a[0].b.c')

// 第二种
const get1 = (source, path, defaultValue = undefined) => {
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
    let result = source
    for (const p of paths) {
        result = Object(result)[p]
        //   if (result === undefined) {
        //     return defaultValue
        //   }
    }
    return result
}
get(object, 'a[0].b.c')
