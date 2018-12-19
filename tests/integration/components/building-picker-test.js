import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | building picker', function() {
  setupComponentTest('building-picker', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#building-picker}}
    //     template content
    //   {{/building-picker}}
    // `);

    this.render(hbs`{{building-picker}}`);
    expect(this.$()).to.have.length(1);
  });
});
