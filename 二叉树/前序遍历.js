//前序遍历 中 左 右

var bst = require('./BST.js');
var root = bst.b1();
var printLog = key => console.log(key);
var preTraverse = function (node) {
    if(node !== null){
        printLog(node.key);
        preTraverse(node.left);
        preTraverse(node.right);
        
    }
}
preTraverse(root);