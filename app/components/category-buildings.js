import Ember from 'ember';
const { Component, computed } = Ember;

export default Component.extend({
  /******************************** Passed In Data */
  /**
   * Active Category model
   * @var {*}
   */
  activeCategory: null,
  /**
   * Building models associated to component
   * @var {*}
   */
  buildings: null,
  /**
   * Category model associated to component
   * @var {*}
   */
  category: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['category-buildings'],
  classNameBindings: ['isActive'],

  /******************************** Computed */
  /**
   * Indicates if the component is active
   * @var {boolean}
   */
  isActive: computed('activeCategory.id', function () {
    return Boolean(this.get('activeCategory.id') === this.get('category.id'));
  })
});
