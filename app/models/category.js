import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  /**
   * Name of object
   * @var {string}
   */
  name: attr('string'),

  /******************************** Relationships */
  /**
   * Category for object
   */
  building: hasMany('building')
});
