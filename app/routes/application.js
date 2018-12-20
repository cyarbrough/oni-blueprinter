import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    accessDenied() {
      this.transitionTo('login');
    },
    logout() {
      this.get('session').close().then(() => {
        this.transitionTo('login');
      });
    }
  }
});
