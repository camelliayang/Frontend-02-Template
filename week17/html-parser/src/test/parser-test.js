var assert = require('assert');
import {parseHTML} from "../parser.js";

// var add = require("../add.js").add;
// var mul = require("../add.js").mul;

describe("Parse HTML", function() {
  // it('<a>abc</a>', function() {
  //   let tree = parseHTML('<a>abc</a>');
  //   //console.log(tree);
  //   assert.equal(1, 1);
  // });
  it('<a></a>', function() { 
    let tree = parseHTML('<a></a>');
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children[0].children.length, 0)
  });
  //   属性相关的
  it('<a href="//www.google.com"></a>', function() { 
    let tree = parseHTML('<a href="//www.google.com"></a>');
    // console.log(tree);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a href ></a>', function() { 
    let tree = parseHTML('<a href ></a>');
    // console.log(tree);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a href id></a>', function() { 
    let tree = parseHTML('<a href id></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a href="abc" id></a>', function() { 
    let tree = parseHTML('<a href="abc" id></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a id=abc ></a>', function() { 
    let tree = parseHTML('<a id=abc ></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a id=abc/></a>', function() { 
    let tree = parseHTML('<a id=abc/></a>');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<a id=\'abc\' />', function() { 
    let tree = parseHTML('<a id=\'abc\' />');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it(' <a />', function() { 
    let tree = parseHTML('<a />');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<A /> upper case', function() { 
    let tree = parseHTML('<A />');
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0)
  });
  it('<>', function() { 
    let tree = parseHTML('<>');
    console.log(tree)
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].type, "text")
  });
});