/* 处理成树 */
const data = [
    { "area_id": 7, "name": "深圳市", "parent_id": 5 },
    { "area_id": 6, "name": "广州市", "parent_id": 5 },
    { "area_id": 5, "name": "广东省", "parent_id": 0 },
    { "area_id": 4, "name": "北京市", "parent_id": 3 },
    { "area_id": 3, "name": "北京", "parent_id": 0 },
    { "area_id": 2, "name": "测试子地区", "parent_id": 1 },
    { "area_id": 1, "name": "测试地区", "parent_id": 0 },
    { "area_id": 0, "name": "测试地区", "parent_id": -1 },
]
const setTreeData = (arr) => {
    arr.forEach(item => {
        delete item?.children
    });
    let map = {}; //构建map
    arr.forEach(item => {
        map[item.area_id] = item; //构建以id为键 当前数据为值
    });
    let treeData = [];
    arr.forEach(item => {
        const mapItem = map[item.parent_id]; //判断当前数据的parentId是否存在map中
        if (mapItem) {
            //存在则表示当前数据不是最顶层的数据
            //注意： 这里的map中的数据是引用了arr的它的指向还是arr,当mapItem改变时arr也会改变，踩坑点
            (mapItem.children || (mapItem.children = [])).push(item); //这里判断mapItem中是否存在child
        } else {
            //不存在则是顶层数据
            treeData.push(item);
        }
    });
    return treeData;
}
setTreeData(data)