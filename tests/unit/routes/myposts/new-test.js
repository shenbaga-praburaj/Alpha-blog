import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myposts/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:myposts/new');
    assert.ok(route);
  });
});
