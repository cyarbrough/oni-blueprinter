import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | building object', function () {
  setupComponentTest('building-object', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#building-object}}
    //     template content
    //   {{/building-object}}
    // `);

    this.render(hbs`{{building-object}}`);
    expect(this.$()).to.have.length(1);
  });
});
