import DS from 'ember-data';
const { attr, belongsTo, Model } = DS;

export default Model.extend({
  /**
   * Name of object
   * @var {string}
   */
  name: attr('string'),

  /**
   * Image URL for building image
   * @var {string}
   */
  image: attr('string'),
  /**
   * Base height of building
   * @var {number}
   */
  height: attr('number'),
  /**
   * Base width of building
   * @var {number}
   */
  width: attr('number'),

  /******************************** Relationships */
  /**
   * Category for object
   */
  category: belongsTo('category')
});
