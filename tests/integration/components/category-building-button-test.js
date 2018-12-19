import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | category building button', function() {
  setupComponentTest('category-building-button', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#category-building-button}}
    //     template content
    //   {{/category-building-button}}
    // `);

    this.render(hbs`{{category-building-button}}`);
    expect(this.$()).to.have.length(1);
  });
});
