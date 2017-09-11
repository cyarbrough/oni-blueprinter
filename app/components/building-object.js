import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Building model associated to component
   * @var {*}
   */
  building: null,
  /**
   * Holds Positional dimensions of building object
   * @var {*}
   */
  position: {
    x: 0,
    y: 0,
    z: 0
  }
});
