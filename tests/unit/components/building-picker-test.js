import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import Ember from 'ember';
const { Object } = Ember;

describe('Unit | Component | building picker', function() {
  setupComponentTest('building-picker', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  it('renders', function() {
    // creates the component instance
    let component = this.subject();

    // renders the component on the page
    this.render();
    expect(component).to.be.ok;
    expect(this.$()).to.have.length(1);
  });

  describe('actions', function() {
    it('sets activateCategory', function() {
      let component = this.subject();

      component.send('activateCategory', Object.create({ id: 1 }));
      expect(component.get('activeCategory.id')).to.be.equal(1);
    });
    it('sets activateCategory to null', function() {
      let component = this.subject({
        activeCategory: Object.create({ id: 1 })
      });

      component.send('activateCategory', Object.create({ id: 1 }));
      expect(component.get('activeCategory')).to.be.null;
    });
  });
});
