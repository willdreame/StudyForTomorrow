
const obj = {
    a: {
        b: ['1','2'],
        c: false
    }
}


function get(target, path, def=undefined){
    const paths = path.replace(/\[/g,'.').replace(/\]/g, '')
    const arr = paths.split('.')
     return arr.reduce((pre,cur)=>{
        return (pre || {})[cur]
    },target) || def
}

function test(target,path,def=undefined){
    const paths = path.replace(/\[/g, '.').replace(/\]/g,'')
    const arr = paths.split('.')
    return arr.reduce((pre,cur)=>{
        return (pre || {})[cur]
    },target) || def
}

console.log(get(obj, 'a.b[1]'))