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
      categories: store.peekAll('category'),
      hq: store.peekRecord('building', '1'),
      tile: store.peekRecord('building', '2'),
      rationBox: store.peekRecord('building', '3'),
      positionHQ: { x: 3, y: 3, z: 0 }
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
