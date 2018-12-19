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
   * Category model associated to component
   * @var {*}
   */
  category: null,
  /******************************** Variables */
  /**
   * Default action to bubble up
   * @var string
   */
  actionClick: 'activateCategory',
  /**
   * Components class names
   * @var []
   */
  classNames: ['category-icon'],
  classNameBindings: ['isActive'],
  /**
   * HTML Tag Name
   * @var string
   */
  tagName: 'button',

  /******************************** Computed */
  /**
   * Indicates if the component is active
   * @var {boolean}
   */
  isActive: computed('activeCategory.id', function() {
    return Boolean(this.get('activeCategory.id') === this.get('category.id'));
  }),

  /******************************** Functions */
  /**
   * Function called on click; Bubbles actionClick
   */
  click() {
    this.sendAction('actionClick', this.get('category'));
  }
});
