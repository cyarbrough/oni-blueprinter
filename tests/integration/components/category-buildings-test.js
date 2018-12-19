import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | category buildings', function() {
  setupComponentTest('category-buildings', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#category-buildings}}
    //     template content
    //   {{/category-buildings}}
    // `);

    this.render(hbs`{{category-buildings}}`);
    expect(this.$()).to.have.length(1);
  });
});
