import Ember from 'ember';

export default Ember.Component.extend({
  /******************************** Variables */
  actionList: [
    {
      name: 'destroy'
    },
    {
      name: 'cancel'
    }
  ],
  /**
   * Components class names
   * @var []
   */
  classNames: ['action-picker']
});
