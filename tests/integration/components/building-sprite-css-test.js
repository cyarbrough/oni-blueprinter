import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | building sprite css', function() {
  setupComponentTest('building-sprite-css', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#building-sprite-css}}
    //     template content
    //   {{/building-sprite-css}}
    // `);

    this.render(hbs`{{building-sprite-css}}`);
    expect(this.$()).to.have.length(1);
  });
});
