
const arr = [1,2,3,[4,[5,6,[7]]]]

function flat(params){
    return params.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)? flat(cur): cur)
    },[])
}
