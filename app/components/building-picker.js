import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  /******************************** Passed In Data */
  /**
   * Array of buildings
   * @var {[]}
   */
  buildings: null,
  /**
   * Array of Categories
   * @var {[]}
   */
  categories: null,

  /******************************** Variables */
  /**
   * Components class names
   * @var {*}
   */
  activeCategory: null,
  /**
   * Components class names
   * @var {[]}
   */
  classNames: ['building-picker'],

  /******************************** Actions */
  actions: {
    /**
     * Sets category to activeCategory, or to null if same category
     * @param {*} category
     */
    activateCategory(category) {
      let newCategory = category;

      if (this.get('activeCategory.id') === category.get('id')) {
        newCategory = null;
      }
      this.set('activeCategory', newCategory);
    }
  }
});
