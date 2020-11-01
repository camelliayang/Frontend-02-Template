var assert = require('assert');
import {add, mul} from "../add.js";

// var add = require("../add.js").add;
// var mul = require("../add.js").mul;

describe("Function testing", function() {
  it('should return add result', function() {
    assert.equal(add(1, 2), 3);
  });
  it('should return multiply result', function() {
    assert.equal(mul(1, 2), 2);
  });
});