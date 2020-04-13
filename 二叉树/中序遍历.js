//中序遍历顺序 左->中->右

var bst = require('./BST.js');


var root = bst.b1();


var printLog = function (key) {
    console.log(key);
}

var inOrderTraverse = function (node) {
    // 优先去找左子树，然后中间节点，最后右子树
    if (node !== null) {
        inOrderTraverse(node.left);
        printLog(node.key);
        inOrderTraverse(node.right);

    }
}
inOrderTraverse(root);


// // 节点数组
// var nodes = [8, 3, 10, 1, 5, 14, 4, 6, 13];
// var binaryTree = new BinaryTree();
// nodes.forEach(key => {
//     binaryTree.insert(key);
// });
// var root = binaryTree.getRoot();
// console.log(root);
// binaryTree.inOrderTraverse(root, printLog);
//debugger