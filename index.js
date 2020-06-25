
// Common ancestor (60 mins)

// Write a function that takes two nodes of a tree and returns the
// closest common ancestor, or returns null if there isn't any.
// It should also handle edge cases, for example when either of the
// nodes is the tree itself, or both nodes are the same. For example:
//
// let grandma = new Tree('grandma');
// let mom = new Tree('mom');
// let ant = new Tree('ant');
// grandma.addChild(mom);
// grandma.addChild(ant);
// grandma.commonAncestor(mom, ant) -> grandma

function Tree (value) {
  this.children = [];
  this.value = value;
}

Tree.prototype.addChild = function (node) {
  if (!this.isDescendant(node)) this.children.push(node);
  else throw new Error(`The node "${node.value}" already exists in this tree`);
  return this;
};

Tree.prototype.isDescendant = function (node) {
  if (this.children.indexOf(node) !== -1) return true; // "node" is an immediate child of this tree
  else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(node)) return true; // "node" is descendant of this tree
    }
    return false;
  }
};

Tree.prototype.commonAncestor = function (node1, node2) {
  // // If one of the nodes are the tree then return null
  // if (node1.value === this.value || node2.value === this.value) {
  //   return null;
  // // If both nodes are the same then return null
  // } else if (node1.value === node2.value) {
  //   return null;
  // } else {
  //   if (this.isDescendant(node1) === this.isDescendant(node2)) {
  //     for (let i = 0; i < this.children.length; i++) {
  //       this.children[i].isDescendant();
  //     }
  //   }
    
  // }
  
  // console.log('this', this);
  // console.log('children', this.children);
  // console.log('first grandChild', this.children[0].children);
};

module.exports = Tree;
