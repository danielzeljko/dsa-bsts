"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (val < this.val) {
      if (this.left !== null) {
        return this.left.insertRecursively(val);
      } else {
        this.left = new Node(val);
        return this;
      }
    } else {
      if (this.right !== null) {
        return this.right.insertRecursively(val);
      } else {
        this.right = new Node(val);
        return this;
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */


  /**
   *
   *
   *         15   to add: 20
   *            \
   *            20
   */

  insert(val) {

    // base case - empty tree
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    const stack = [this.root];

    while (stack.length) {
      let currentNode = stack.shift();

      if (val > currentNode.val) {
        // go right
        // check if right node is null (this mean we can just insert)

        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          stack.push(currentNode.right);
        }
      } else {
        // go left
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        } else {
          stack.push(currentNode.left);
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
