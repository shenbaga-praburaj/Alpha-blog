import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myposts/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:myposts/delete');
    assert.ok(route);
  });
});
