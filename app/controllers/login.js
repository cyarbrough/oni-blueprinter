import Ember from 'ember';
const { Controller, setProperties } = Ember;

export default Controller.extend({
  login(provider) {
    this.get('session').open('firebase', {
      provider,
      email: this.get('email') || '',
      password: this.get('password') || ''
    }).then(() => {
      setProperties(this, {
        email: null,
        password: null
      });
      this.transitionToRoute('admin');
    }, () => {
      // console.log(error);
    });
  },

  actions: {
    login(provider) {
      this.login(provider);
    },
    logout() {
      this.get('session').close();
    }
  }
});
