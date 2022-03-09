// 树结构扁平化
const treeData = [{
    area_id: 0, name: "测试地区", parent_id: -1,
    children: [
        {
            area_id: 5, name: "广东省", parent_id: 0,
            children: [
                { area_id: 7, name: "深圳市", parent_id: 5 },
                { area_id: 6, name: "广州市", parent_id: 5 }
            ]
        },
        {
            area_id: 3, name: "北京", parent_id: 0,
            children: [{ area_id: 4, name: "北京市", parent_id: 3 }]
        }, {
            area_id: 1, name: "测试地区", parent_id: 0,
            children: [{ area_id: 2, name: "测试子地区", parent_id: 1 }]
        }
    ]
}]
let result = []
const getPlatTreeData = (data, result) => {
    data.map(item => {
        const { children, ...obj } = item
        if (children?.length > 0) {
            getPlatTreeData(children, result)
        }
        result.push(obj)
    })
}
getPlatTreeData(treeData, result)

//数组扁平化
let arrTreeData = [1, [2, 3, [4, 5], 6], 8]
const getArrPlatData = data => {
    return data.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? getArrPlatData(b) : b)
    }, [])
}
getArrPlatData(arrTreeData)