import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | category', function () {
  setupModelTest('category', {
    // Specify the other units that are required for this test.
    needs: []
  });

  // Replace this with your real tests.
  it('exists', function () {
    let model = this.subject();
    // var store = this.store();

    expect(model).to.be.ok;
  });
});
