import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | action picker', function() {
  setupComponentTest('action-picker', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#action-picker}}
    //     template content
    //   {{/action-picker}}
    // `);

    this.render(hbs`{{action-picker}}`);
    expect(this.$()).to.have.length(1);
  });
});
