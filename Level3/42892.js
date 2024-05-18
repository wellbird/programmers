class Node {
  constructor([x, y, value]) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }
}
class Tree {
  constructor(node) {
    this.root = node;
  }
  add(node) {
    let curNode = this.root;
    while (curNode.y > node.y) {
      if (curNode.x < node.x) {
        if (curNode.right === null) {
          break;
        } else {
          curNode = curNode.right;
        }
      } else {
        if (curNode.left === null) {
          break;
        } else {
          curNode = curNode.left;
        }
      }
    }
    if (curNode.y > node.y) {
      if (curNode.x < node.x) {
        curNode.right = node;
      } else {
        curNode.left = node;
      }
      node.parent = curNode;
    } else if (curNode.y < node.y) {
      node.parent = curNode.parent;
      if (curNode.x > node.x) {
        node.right = curNode;
      } else {
        node.left = curNode;
      }
      curNode.parent = node;
    }
  }
  getPreOrder() {
    const preOrder = [];
    const stack = [this.root];
    while (stack.length) {
      const curItem = stack.pop();
      if (curItem.right !== null) stack.push(curItem.right);
      if (curItem.left !== null) stack.push(curItem.left);
      preOrder.push(curItem.value);
    }
    return preOrder;
  }
  getPostOrder() {
    const postOrder = [];
    const stack = [this.root];
    while (stack.length) {
      const curItem = stack.pop();
      postOrder.push(curItem.value);
      if (curItem.left !== null) stack.push(curItem.left);
      if (curItem.right !== null) stack.push(curItem.right);
    }
    return postOrder.reverse();
  }
}
function solution(nodeinfo) {
  const arr = nodeinfo.map((item, index) => {
    return [...item, index + 1];
  });
  arr.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  const rootNode = new Node(arr[0]);
  const tree = new Tree(rootNode);
  for (let k = 1; k < arr.length; k++) {
    const newNode = new Node(arr[k]);
    tree.add(newNode);
  }
  const preOrder = tree.getPreOrder();
  const postOrder = tree.getPostOrder();
  return [preOrder, postOrder];
}

// 다른사람의 풀이 - 함수를 이용한 트리 구성
// function solution(nodelist) {
//     let rootNode
//     let preorder = []
//     let postorder = []
//     const Node = function (x, y, id) {
//         this.x = x
//         this.y = y
//         this.id = id
//         this.left = null
//         this.right = null
//     }
//     const insertNode = (x, y, id) => {
//         if (!rootNode) {
//             rootNode = new Node(x, y, id)
//         } else {
//             _insertNode(rootNode, x, y, id)
//         }
//     }
//     const _insertNode = (node, x, y, id) => {
//         const side = x < node.x ? 'left' : 'right'
//         if (node[side] === null) {
//             node[side] = new Node(x, y, id)
//         } else {
//             _insertNode(node[side], x, y, id)
//         }
//     }
//     const _preorder = node => {
//         preorder.push(node.id)
//         if (node.left) _preorder(node.left)
//         if (node.right) _preorder(node.right)
//     }
//     const _postorder = node => {
//         if (node.left) _postorder(node.left)
//         if (node.right) _postorder(node.right)
//         postorder.push(node.id)
//     }
//     const nodes = nodelist.map(([x, y], idx) => [x, y, idx+1])
//     nodes.sort(([, ya], [, yb]) => yb - ya)
//     nodes.forEach(([x, y, id]) => insertNode(x, y, id))
//     _preorder(rootNode)
//     _postorder(rootNode)
//     return [preorder, postorder]
// }
