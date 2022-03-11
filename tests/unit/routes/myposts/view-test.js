import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | myposts/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:myposts/view');
    assert.ok(route);
  });
});
