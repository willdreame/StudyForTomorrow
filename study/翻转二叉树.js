

function invertTree(root){
    if(root === null) {
        return root;
    }
    const left = root.left;
    const right = root.right;
    root.left = invertTree(right);
    root.left = invertTree(left);
    return root;
}