import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | newsposts/post', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:newsposts/post');
    assert.ok(route);
  });
});
