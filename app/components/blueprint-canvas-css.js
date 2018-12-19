import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  /******************************** Services */
  pixel: inject.service(),

  /******************************** Variables */
  /**
   * Pixel density, number of pixel for one "unit"
   * @var number
   */
  pixelDensity: computed.alias('pixel.density'),
  /**
   * HTML Tag Name
   * @var string
   */
  tagName: 'style',

  /******************************** Computed */
  /**
   * Returns CSS appropriate value
   * @var string
   */
  pixelDensityCss: computed('pixelDensity', function() {
    return this.get('pixelDensity') + 'px';
  })
});
