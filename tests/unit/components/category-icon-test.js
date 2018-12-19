import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Component | category icon', function() {
  setupComponentTest('category-icon', {
    // Specify the other units that are required for this test
    needs: ['component:category-icon-css'],
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
  describe('computed', function() {
    it('returns isActive', function() {
      let component = this.subject({
        category: { id: 1 }
      });

      component.set('activeCategory', { id: 1 });
      expect(component.get('isActive')).to.be.true;
    });
    it('returns isActive as false', function() {
      let component = this.subject({
        category: { id: 1 }
      });

      component.set('activeCategory', { id: 2 });
      expect(component.get('isActive')).to.be.false;
    });
  });
  describe('functions', function() {
    beforeEach(function() {
      this.spy = sinon.spy();
    });

    it('sends action actionClick with category', function() {
      let component = this.subject({
        category: 1,
        sendAction: this.spy
      });

      component.click();
      expect(this.spy.calledWith('actionClick', 1)).to.be.true;
    });
  });
});
