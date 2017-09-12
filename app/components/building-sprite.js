import Ember from 'ember';
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
   * Components class names
   * @var []
   */
  classNames: ['building-sprite'],
  classNameBindings: ['buildingClassName'],
  /**
   * Pixel density, number of pixel for one "unit"
   * @var number
   */
  pixelDensity: computed.alias('pixel.density'),
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
  dimensions: computed('building.{height,width}', 'pixelDensity', function () {
    let building = this.get('building'),
      pixelDensity = this.get('pixelDensity');

    return {
      height: String(building.get('height') * pixelDensity) + 'px',
      width: String(building.get('width') * pixelDensity) + 'px'
    };
  })
});
