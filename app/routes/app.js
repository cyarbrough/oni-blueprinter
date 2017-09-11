import Ember from 'ember';
const { inject, Route } = Ember;

export default Route.extend({
  /**
   * Services
   */
  ajax: inject.service(),

  /**
   * Pushes data into the payload, returns 
   * @param {*} buildingData 
   * @return {*} model data
   */
  handleBuildingSuccess(buildingData) {
    let store = this.get('store');

    store.pushPayload(buildingData);

    return {
      buildings: store.peekAll('building'),
      categories: store.peekAll('category')
    };
  },
  /**
   * Main model data for App
   */
  model() {
    let data = this.get('ajax').request('data/buildings.json').then((buildingData) => { return this.handleBuildingSuccess(buildingData); });

    return data;
  }
});
