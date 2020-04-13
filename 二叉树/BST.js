//二叉搜索树 构造函数 (Binary Search Tree)
function BinaryTree() {
    //节点构造函数
    var Node = function (key) {
        this.key = key;//节点的值
        this.left = null;//左子树节点
        this.right = null;//右子树节点
    }

    //根节点
    var root = null;

    //插入root的子节点
    var insertNode = function (parentNode, childNode) {
        //左子树构造
        if (childNode.key < parentNode.key) {
            //为空赋值，否则继续延伸
            if (parentNode.left === null) {
                parentNode.left = childNode;
            }
            else {
                insertNode(parentNode.left, childNode);
            }
        }
        //右子树构造
        else {
            if (parentNode.right === null) {
                parentNode.right = childNode;
            }
            else {
                insertNode(parentNode.right, childNode);
            }
        }
    }

    //返回根节点方法
    this.getRoot = function () {
        return root;
    }

    //插入节点实例方法
    this.insert = function (key) {
        var thisNode = new Node(key);
        //根节点赋值
        if (root === null) {
            root = thisNode;
        }
        else {
            //插入子节点
            insertNode(root, thisNode);
        }
    }
}




//数组构造二叉搜索树
var nodes = [8, 3, 10, 1, 5, 14, 4, 6, 13];
var binaryTree1=new BinaryTree();
nodes.forEach(key=>{
    binaryTree1.insert(key);
});
// console.log(binaryTree1.getRoot());
// debugger

var b1 = binaryTree1.getRoot;
module.exports = {
    b1
}   
