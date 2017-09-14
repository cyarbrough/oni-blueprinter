import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | category icon css', function () {
  setupComponentTest('category-icon-css', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#category-icon-css}}
    //     template content
    //   {{/category-icon-css}}
    // `);

    this.render(hbs`{{category-icon-css}}`);
    expect(this.$()).to.have.length(1);
  });
});
