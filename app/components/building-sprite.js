import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
const { Component, computed, inject, String: { dasherize } } = Ember;

export default Component.extend({
  /******************************** Passed In Data */
  /**
   * Building model associated to component
   * @var {*}
   */
  building: null,

  /******************************** Services */
  pixel: inject.service(),

  /******************************** Variables */
  /**
   * Attribute bindings for component
   * @var []
   */
  attributeBindings: ['draggable'],
  /**
   * Components class names
   * @var []
   */
  classNames: ['building-sprite'],
  classNameBindings: ['buildingClassName'],
  /**
   * Indicates if component is currently draggable
   * @var boolean
   */
  draggable: false,
  /**
   * Holds mouse offset, relative to element
   * @var {x,y}
   */
  mouseOffset: {
    x: 0,
    y: 0
  },
  /**
   * Pixel density, number of pixel for one "unit"
   * @var number
   */
  pixelDensity: computed.alias('pixel.density'),
  /**
   * Holds Positional dimensions of building object
   * @var {x,y,z}
   */
  position: {
    x: 0,
    y: 0
  },
  /**
   * Holds Temporary Positional dimensions of building object
   * @var {x,y,z}
   */
  tempPosition: {
    active: false,
    x: null,
    y: null
  },
  /**
   * HTML Tag Name
   * @var string
   */
  tagName: 'button',
  /******************************** Computed */
  /**
   * Class name, based on building name
   * @var string
   */
  buildingClassName: computed('building.name', function() {
    let name = this.get('building.name');

    if (name) {
      return dasherize(name);
    }
    return null;
  }),
  /**
   * Returns positional x and y values adjusted to grid
   * @var {x,y}
   */
  translatedPosition: computed('position.{x,y}', 'tempPosition.{x,y}', function() {
    let pixelDensity = this.get('pixelDensity'),
      position = this.get('position');

    if (this.get('tempPosition.active')) {
      position = this.get('tempPosition');
    }

    return {
      x: String(position.x * pixelDensity) + 'px',
      y: String(position.y * pixelDensity) + 'px'
    };
  }),
  /**
   * Pixel dimensions, converted from logistical dimensions
   * @var {*}
   */
  dimensions: computed('building.{height,width}', 'pixelDensity', function() {
    let building = this.get('building'),
      pixelDensity = this.get('pixelDensity');

    if (building && pixelDensity) {
      return {
        height: String(building.get('height') * pixelDensity) + 'px',
        width: String(building.get('width') * pixelDensity) + 'px'
      };
    }
    return {
      height: pixelDensity + 'px',
      width: pixelDensity + 'px'
    };
  }),
  /******************************** Functions */
  /**
   * Called when component element is dragged
   * @param {*} e
   */
  drag(e) {
    this.get('dragTask').perform(e);
    e.stopPropagation();
  },
  /**
   * Called when component element dragging has ended
   * @param {*} e
   */
  dragEnd(e) {
    let units = this.getUnitsFromPixels(e.clientX, e.clientY, true);

    this.get('dragTask').cancelAll();
    this.resetTempPosition();
    this.setProperties({
      'draggable': false,
      'position.x': units.x,
      'position.y': units.y
    });
  },
  /**
   * Dragging Task; Sets tempPosition to moved units, based on clientX and clientY
   * @param {*} e
   */
  dragTask: task(function * (e) {
    let units = this.getUnitsFromPixels(e.clientX, e.clientY, true);

    this.set('tempPosition', { x: units.x, y: units.y, active: true });
    yield timeout(50);
  }).restartable(),
  /**
   * Converts pixel units into more ambiguous 'grid' units, based on pixel density; optionally offsets for mouse position
   * @param {number} x
   * @param {number} y
   * @param {boolean} mouseOffset
   */
  getUnitsFromPixels(x, y, mouseOffset = false) {
    let dataX = x,
      dataY = y,
      offset = this.get('mouseOffset'),
      pixelDensity = this.get('pixelDensity');

    if (mouseOffset && offset.x) {
      dataX = x - offset.x;
    }
    if (mouseOffset && offset.y) {
      dataY = y - offset.y;
    }

    return {
      x: Math.round(dataX / pixelDensity),
      y: Math.round(dataY / pixelDensity)
    };
  },
  /**
   * Called when component element is clicked on; Sets offset, draggable
   * @param {*} e
   */
  mouseDown(e) {
    this.set('draggable', true);
    this.set('mouseOffset', { x: e.offsetX, y: e.offsetY });
  },
  /**
   * Resets tempPosition to default state
   */
  resetTempPosition() {
    this.set('tempPosition', { x: 0, y: 0, active: false });
  }
});
