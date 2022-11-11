import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | rental-property-type', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders correctly for a Standalone rental', async function (assert) {
    this.set('inputValue', 'Estate');

    await render(hbs`{{rental-property-type this.inputValue}}`);

    assert.dom(this.element).hasText('Standalone');
  });
  test('it renders correctly for a Community rental', async function (assert) {
    this.set('inputValue', 'Apartment');

    await render(hbs`{{rental-property-type this.inputValue}}`);

    assert.dom(this.element).hasText('Community');
  });
});
