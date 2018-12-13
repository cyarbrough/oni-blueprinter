import Ember from 'ember';
const { A, inject, Route } = Ember;

export default Route.extend({
  /**
   * Services
   */
  ajax: inject.service(),

  /******************************** Functions */
  /**
   * Takes an array of "building data" locates the building type, and loads positional data
   * Note: Building data is in format: [[1,2,3],[1,2,3]] where 1 = id, 2 = x, 3 = y
   * @param {array} buildings
   */
  createBuildingsTemplate(buildings) {
    let model,
      position,
      store = this.get('store'),
      template = A();

    buildings.forEach(function(building) {
      model = store.peekRecord('building', building[0]);
      if (model && model.get('id')) {
        position = {
          x: building[1],
          y: building[2]
        };
        template.pushObject({ model, position });
      }
    }, this);
    this.controllerFor('app').set('templateBuildings', template);
  },
  /**
   * Checks for buildings in templateData, and passes into template builder
   * @param {array} templateData
   * @return {*}
   */
  handleTemplateSuccess(templateData) {
    if (templateData.buildings.length) {
      return this.createBuildingsTemplate(templateData.buildings);
    }
    return null;
  },
  /**
   * Main model data for App
   */
  model() {
    let buildings = this.store.findAll('building').then(() => {
      this.get('ajax').request('data/template-starter.json').then((templateData) => { return this.handleTemplateSuccess(templateData); });
    });
    let categories = this.store.findAll('category');

    return {
      buildings,
      categories
    };
  }
});
