var assert = require('assert');
var <%= camelizedPackageName %> = require('..');

describe('<%= packageName %>', function() {

  it('should do something awesome', function() {
    assert.equal(<%= camelizedPackageName %>(), true);
  });
});
