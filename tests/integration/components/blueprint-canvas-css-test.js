import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | blueprint canvas css', function() {
  setupComponentTest('blueprint-canvas-css', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#blueprint-canvas-css}}
    //     template content
    //   {{/blueprint-canvas-css}}
    // `);

    this.render(hbs`{{blueprint-canvas-css}}`);
    expect(this.$()).to.have.length(1);
  });
});
