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

    buildings.forEach(function (building) {
      model = store.peekRecord('building', String(building[0]));
      if (model && model.get('id')) {
        position = {
          x: building[1],
          y: building[2]
        };
        template.pushObject({ model, position });
      }
    }, this);
    return template;
  },
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
   * Loads starter template data via ajax
   */
  async loadTemplate() {
    return this.get('ajax').request('data/template-starter.json').then((templateData) => { return this.handleTemplateSuccess(templateData); });
  },
  /**
   * Main model data for App
   */
  model() {
    return this.get('ajax').request('data/buildings.json').then((buildingData) => { return this.handleBuildingSuccess(buildingData); });
  },
  /**
   * Setups the controller, and loads starter template data
   * @param {*} controller 
   * @param {*} model 
   */
  async setupController(controller, model) {
    this._super(controller, model);

    let template = await this.loadTemplate();

    this.controllerFor('app').set('templateBuildings', template);
  }
});
