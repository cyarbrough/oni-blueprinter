import Ember from 'ember';
const { Component, computed, String: { dasherize } } = Ember;

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
  pixelRatio: 45,
  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['building-sprite'],
  classNameBindings: ['buildingClassName'],
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
   * Class name, based on building name
   * @var string
   */
  buildingClassName: computed('building.name', function () {
    let name = this.get('building.name');

    return dasherize(name);
  }),
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
