import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | blueprint canvas', function () {
  setupComponentTest('blueprint-canvas', {
    integration: true
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#blueprint-canvas}}
    //     template content
    //   {{/blueprint-canvas}}
    // `);

    this.render(hbs`{{blueprint-canvas}}`);
    expect(this.$()).to.have.length(1);
  });
});
