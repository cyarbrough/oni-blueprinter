import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  /******************************** Variables */
  /**
   * Image URL for category image
   * @var {string}
   */
  image: attr('string'),
  /**
   * Name of object
   * @var {string}
   */
  name: attr('string'),

  /******************************** Relationships */
  /**
   * Category for object
   */
  buildings: hasMany('building', { async: false })
});
