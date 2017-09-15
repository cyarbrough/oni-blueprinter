import Ember from 'ember';

export default Ember.Component.extend({
  /******************************** Passed In Data */
  /**
   * Building model associated to component
   * @var {*}
   */
  building: null,
  /**
   * Components class names
   * @var []
   */
  classNames: ['category-building-button'],
  /**
   * HTML Tag Name
   * @var string
   */
  tagName: 'button'
});
