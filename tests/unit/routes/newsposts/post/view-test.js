import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | newsposts/post/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:newsposts/post/view');
    assert.ok(route);
  });
});
