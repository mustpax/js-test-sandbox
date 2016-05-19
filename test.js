"use strict";
/* jshint jasmine: true */

describe('jasmine-node', function(){
  it("should pass", function(){
    expect(1+2).toEqual(3);
  });
  it("should fail", function(){
    expect(1+2).toEqual(0);
  });
});
