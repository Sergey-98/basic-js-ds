const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.headMain = null;
  }

  root() {
    return this.headMain;
  }

  add(data) {
    this.headMain = addWithin(this.headMain, data);

    function addWithin (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      
      return node;

    }
  }

  has(data) {
    return searchWithin(this.headMain, data);
    
    function searchWithin (node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return find(this.headMain, data);
    
    function find(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return find(node.left, data);
      } else {
        return find(node.right, data);
      }
    }
  }

  remove(data) {
    this.headMain = removeNode(this.headMain, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.headMain) {
      return;
    }

    let node = this.headMain;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.headMain) {
      return;
    }

    let node = this.headMain;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};