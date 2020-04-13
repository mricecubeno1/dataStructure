//前序遍历 左 右  中

var bst = require('./BST.js');
var root = bst.b1();
var printLog = key => console.log(key);
var postTraverse = function (node) {
    if(node !== null){
        
        postTraverse(node.left);
        postTraverse(node.right);
        printLog(node.key);
    }
}
postTraverse(root);