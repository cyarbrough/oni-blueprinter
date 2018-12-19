import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | category icon', function() {
  setupComponentTest('category-icon', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#category-icon}}
    //     template content
    //   {{/category-icon}}
    // `);

    this.render(hbs`{{category-icon}}`);
    expect(this.$()).to.have.length(1);
  });
});
