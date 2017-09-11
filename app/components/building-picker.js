import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  /******************************** Passed In Data */
  /**
   * Array of buildings
   * @var []
   */
  buildings: null,
  /**
   * Array of Categories
   * @var []
   */
  categories: null,
  /******************************** Variables */
  /**
   * Components class names
   * @var []
   */
  classNames: ['building-picker']
});
