import Ember from 'ember';
const { $, Route } = Ember;

export default Route.extend({
  beforeModel() {
    $.ajax('data/buildings.json').done((buildingData) => { this.handleBuildingSuccess(buildingData); });
  },
  handleBuildingSuccess(buildingData) {
    console.log(buildingData);
    this.get('store').pushPayload(buildingData);
  }
});
