/**
 * Represents a tree data structure, which is a hierarchical collection of nodes.
 * Each node in the tree may have zero or more child nodes, and there is a single root node at the top.
 * Trees are commonly used to represent hierarchical relationships such as file systems, organizational structures, and parsed expressions.
 * 
 * Typical operations on trees include insertion, deletion, traversal (preorder, inorder, postorder), and searching for nodes.
 * 
 * Types of traversal:
 * Inorder traversal
 * Preorder traversal
 * Postorder traversal

 */
//Learning Recursion
function factorial(n:number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n-1)  
}

function nSum(n:number) :number{
  if (n < 0) {
    throw new Error("Sum is not defined for negative numbers");
  }
  if (n === 0) {
    return 0;
  }
  return n + nSum(n - 1);
}

function fibonacci(n:number):number[] {
  const sequence:number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

function fib(n:number):number{
  if (n <= 0) return 0
  else if (n === 1) return 1;
  return fib(n-1) + fib(n-2);
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number): void {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  private _insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
/*
private _insertNode(node: TreeNode, newNode: TreeNode): void {
  const side = newNode.val < node.val ? 'left' : 'right';
  =if (node[side] === null) {
    node[side] = newNode;
  } else {
    this._insertNode(node[side], newNode);
  }
}
*/
  inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }
    return [
      ...this.inorderTraversal(root.left), 
      root.val, 
      ...this.inorderTraversal(root.right)
    ];
  }

  preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }
    return [
      root.val, 
      ...this.preorderTraversal(root.left), 
      ...this.preorderTraversal(root.right)
    ];
  }
}



class BinarySearchTree extends BinaryTree {
  //Every element in the left sub tree is less than the root node
  //Every element in the right sub tree is greater than the root node
  search(val: number): boolean {
    return this._searchNode(this.root, val);
  }

  private _searchNode(node: TreeNode | null, val: number): boolean {
    if (node === null) {
      return false;
    }
    if (node.val === val) {
      return true;
    }
    return val < node.val 
      ? this._searchNode(node.left, val) 
      : this._searchNode(node.right, val);
  }
}


class BSTNode{
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  root: BSTNode | null;
  constructor() {
    this.root = null;
  }
  addNode(val:number): void{
    let head = this.root;
    const newNode= new BSTNode(val);
    if (head === null) {
      this.root = newNode;
      return;
    }
    while (head) {
      if (val < head.val) {
        if (head.left === null) {
          head.left = newNode;
          return
        } 
        head = head.left;
      }
      else if (val > head.val) {
        if (head.right === null) {
          head.right = newNode;
          return
        }
        head = head.right;
      } 
      else {
        // If the value already exists, we do not add it again
        return;
      }
    }
  }
  search(val: number): BSTNode | null {
    let currentHead = this.root;

    while (currentHead !== null) {
      if (val === currentHead.val) {
        return currentHead;
      } else if (val < currentHead.val) {
        currentHead = currentHead.left;
      } else {
        currentHead = currentHead.right;
      }
    }
    return null; // Not found
  }


/*search(val: number, node: BSTNode | null = this.root): BSTNode | null {
  if (node === null) return null;
  if (val === node.val) return node;

  return val < node.val
    ? this.search(val, node.left)
    : this.search(val, node.right);
}
*/
  inorderTraversal(node: BSTNode | null = this.root): number[] {
    if (node === null) return [];
    return [
      ...this.inorderTraversal(node.left),
      node.val,
      ...this.inorderTraversal(node.right)
    ];
  }

  preorderTraversal(node: BSTNode | null = this.root): number[] {
    if (node === null) return [];
    return [
      node.val,
      ...this.preorderTraversal(node.left),
      ...this.preorderTraversal(node.right)
    ];
  }
  deleteNode(root: BSTNode | null, val: number): BSTNode | null {
    if (root === null) return null;
    
    if (root.val === val){
      if (root.left === null && root.right === null) {
        return null; // Node is a leaf
      }
    }
    return root;
  }
}
const bst = new BST();