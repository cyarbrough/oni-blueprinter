import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import sinon from 'sinon';
import Ember from 'ember';
const { Object } = Ember;

describe('Unit | Component | building sprite', function() {
  setupComponentTest('building-sprite', {
    // Specify the other units that are required for this test
    needs: ['service:pixel', 'component:building-sprite-css'],
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
    it('returns default buildingClassName', function() {
      let component = this.subject();

      expect(component.get('buildingClassName')).to.be.null;
    });
    it('returns buildingClassName', function() {
      let component = this.subject({
        building: {
          name: 'test dasherize'
        }
      });

      expect(component.get('buildingClassName')).to.be.equal('test-dasherize');
    });
    it('returns translatedPosition', function() {
      let component = this.subject({
          pixelDensity: 10,
          position: {
            x: 1,
            y: 2
          }
        }),
        results = component.get('translatedPosition');

      expect(results.x).to.be.equal('10px');
      expect(results.y).to.be.equal('20px');
    });
    it('returns translatedPosition from tempPosition', function() {
      let component = this.subject({
          pixelDensity: 10,
          position: {
            x: 1,
            y: 2
          },
          tempPosition: {
            x: 3,
            y: 4,
            active: true
          }
        }),
        results = component.get('translatedPosition');

      expect(results.x).to.be.equal('30px');
      expect(results.y).to.be.equal('40px');
    });
    it('returns default dimensions', function() {
      let component = this.subject({
          pixelDensity: 10
        }),
        result = component.get('dimensions');

      expect(result.height).to.be.equal('10px');
      expect(result.width).to.be.equal('10px');
    });
    it('returns dimensions', function() {
      let component = this.subject({
          building: Object.create({
            height: 2,
            width: 3
          }),
          pixelDensity: 10
        }),
        result = component.get('dimensions');

      expect(result.height).to.be.equal('20px');
      expect(result.width).to.be.equal('30px');
    });
  });
  describe('functions', function() {
    beforeEach(function() {
      this.spy = sinon.spy();
    });

    it('performs dragTask on drag', function() {
      let component = this.subject({
        dragTask: {
          perform: this.spy
        }
      });

      component.drag({
        stopPropagation: this.spy
      });
      expect(this.spy.calledTwice).to.be.true;
    });
    it('calls resetTempPosition and sets position on dragEnd', function() {
      let component = this.subject({
        dragTask: {
          cancelAll: this.spy
        },
        getUnitsFromPixels() {
          return { x: 2, y: 1 };
        },
        resetTempPosition: this.spy
      });

      component.dragEnd({
        clientX: 1,
        clientY: 1
      });
      expect(this.spy.calledTwice).to.be.true;
      expect(component.get('draggable')).to.be.false;
      expect(component.get('position.x')).to.be.equal(2);
      expect(component.get('position.y')).to.be.equal(1);
    });
    it('sets tempPosition in dragTask', function() {
      let component = this.subject({
        getUnitsFromPixels() {
          return { x: 3, y: 4 };
        }
      });

      component.get('dragTask').perform({
        clientX: 1,
        clientY: 1
      });
      expect(component.get('tempPosition.x')).to.be.equal(3);
      expect(component.get('tempPosition.y')).to.be.equal(4);
    });
    it('converts pixels to units in getUnitsFromPixels', function() {
      let component = this.subject({
          mouseOffset: {
            x: 10,
            y: 10
          },
          pixelDensity: 10
        }),
        result = component.getUnitsFromPixels(100, 200);

      expect(result.x).to.be.equal(10);
      expect(result.y).to.be.equal(20);
    });
    it('converts pixels to units in getUnitsFromPixels with mouse x', function() {
      let component = this.subject({
          mouseOffset: {
            x: 10
          },
          pixelDensity: 10
        }),
        result = component.getUnitsFromPixels(100, 200, true);

      expect(result.x).to.be.equal(9);
      expect(result.y).to.be.equal(20);
    });
    it('converts pixels to units in getUnitsFromPixels with mouse y', function() {
      let component = this.subject({
          mouseOffset: {
            y: 10
          },
          pixelDensity: 10
        }),
        result = component.getUnitsFromPixels(100, 200, true);

      expect(result.x).to.be.equal(10);
      expect(result.y).to.be.equal(19);
    });
    it('converts pixels to units in getUnitsFromPixels with mouse x y', function() {
      let component = this.subject({
          mouseOffset: {
            x: 20,
            y: 10
          },
          pixelDensity: 10
        }),
        result = component.getUnitsFromPixels(100, 200, true);

      expect(result.x).to.be.equal(8);
      expect(result.y).to.be.equal(19);
    });
    it('sets mouseOffset on mouseDown', function() {
      let component = this.subject();

      component.mouseDown({
        offsetX: 1,
        offsetY: 2
      });
      expect(component.get('draggable')).to.be.true;
      expect(component.get('mouseOffset.x')).to.be.equal(1);
      expect(component.get('mouseOffset.y')).to.be.equal(2);
    });
    it('resets tempPosition on resetTempPosition', function() {
      let component = this.subject({
        tempPosition: {
          x: 10,
          y: 10,
          active: true
        }
      });

      component.resetTempPosition();
      expect(component.get('tempPosition.active')).to.be.false;
      expect(component.get('tempPosition.x')).to.be.equal(0);
      expect(component.get('tempPosition.y')).to.be.equal(0);
    });
  });
});
