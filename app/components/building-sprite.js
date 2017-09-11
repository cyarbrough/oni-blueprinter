import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed In Data */
  /**
   * Building model associated to component
   * @var {*}
   */
  building: null,
  /**
   * Pixel ratio, number of pixel for one "unit"
   * @var number
   */
  pixelRatio: 50,
  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['building-sprite'],
  /**
   * Holds Positional dimensions of building object
   * @var {*}
   */
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  /**
   * HTML Tag Name
   * @var string
   */
  tagName: 'button',
  /******************************** Computed */
  /**
   * Pixel dimensions, converted from logistical dimensions
   * @var {*}
   */
  dimensions: computed('building.{height,width}', 'pixelRatio', function () {
    let building = this.get('building'),
      pixelRatio = this.get('pixelRatio');

    return {
      height: String(building.get('height') * pixelRatio) + 'px',
      width: String(building.get('width') * pixelRatio) + 'px'
    };
  })
});
