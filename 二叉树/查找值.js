

var bst = require('./BST.js');
var root = bst.b1();


//最小值找左子树
var minNode = function (node) {
    if (node.left == null) {
        console.log(node.key);
    }else{
        minNode(node.left);
    }
        
}
minNode(root);

//最大值找右子树
var maxNode =function(node){
    if(node.right == null){
        console.log(node.key);
    }else{
        maxNode(node.right);
    }
}
maxNode(root);
 //查找某值是否在二叉树中
var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    // 要查找的值小于当前节点的值，用左子树继续查找
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) { // 要查找的值大于当前节点的值，用右子树继续查找
      return searchNode(node.right, key);
    } else {
      return true;
    }
  }
  console.log(searchNode(root, 1)); 