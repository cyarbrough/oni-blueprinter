import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | app', function () {
  setupTest('route:app', {
    // Specify the other units that are required for this test.
    needs: ['service:ajax']
  });

  it('exists', function () {
    let route = this.subject();

    expect(route).to.be.ok;
  });
});