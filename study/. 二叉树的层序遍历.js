
function TreeNode(val,left,right){
    this.val = (val===undefined? 0 : val);
    this.left =(left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function levelOrder(root){
    let res = [], queue = [];
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length !==0) {
        let length = queue.length;
        let curLeavel = [];
        for(let i =0; i < length; i++) {
            let node = queue.shift();
            curLeavel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 把每一层的结果放到结果数组
        res.push(curLeavel)

    }
    return res
}


