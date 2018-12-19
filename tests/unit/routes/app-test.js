import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Ember from 'ember';
const { run } = Ember;

describe('Unit | Route | app', function() {
  setupTest('route:app', {
    // Specify the other units that are required for this test.
    needs: ['controller:app', 'model:building', 'model:category', 'service:ajax']
  });

  it('exists', function() {
    let route = this.subject();

    expect(route).to.be.ok;
  });
  describe('functions', function() {
    it('returns template from createBuildingsTemplate', function() {
      let result,
        route = this.subject();

      run(() => {
        route.get('store').createRecord('building', { id: 1 });
        route.get('store').createRecord('building', { id: 4 });
      });
      result = route.createBuildingsTemplate([[1, 2, 3], [4, 5, 6]]);

      expect(result[0].model.get('id')).to.be.equal('1');
      expect(result[0].position.x).to.be.equal(2);
      expect(result[0].position.y).to.be.equal(3);

      expect(result[1].model.get('id')).to.be.equal('4');
      expect(result[1].position.x).to.be.equal(5);
      expect(result[1].position.y).to.be.equal(6);
    });
    it('returns empty data from createBuildingsTemplate', function() {
      let result,
        route = this.subject();

      result = route.createBuildingsTemplate([[1, 2, 3], [4, 5, 6]]);

      expect(result.length).to.be.equal(0);
    });
    it('returns buildings & categories from handleBuildingSuccess', function() {
      let data = {
          'data': [
            {
              'type': 'buildings',
              'id': '1',
              'attributes': {},
              'relationships': {
                'category': {
                  'data': {
                    'type': 'category',
                    'id': '4'
                  }
                }
              }
            },
            {
              'type': 'buildings',
              'id': '2',
              'attributes': {},
              'relationships': {
                'category': {
                  'data': {
                    'type': 'category',
                    'id': '4'
                  }
                }
              }
            }
          ],
          'included': [
            {
              'type': 'categories',
              'id': '4',
              'attributes': {}
            }
          ]
        },
        result,
        route = this.subject();

      run(() => {
        result = route.handleBuildingSuccess(data);
      });

      expect(result.buildings.get('length')).to.be.equal(2);
      expect(result.categories.get('length')).to.be.equal(1);
    });
    it('returns template from handleTemplateSuccess', function() {
      let data = {
          buildings: [1]
        },
        result,
        route = this.subject({
          createBuildingsTemplate(data) {
            return data;
          }
        });

      result = route.handleTemplateSuccess(data);

      expect(result[0]).to.be.equal(1);
    });
    it('returns null from handleTemplateSuccess', function() {
      let data = {
          buildings: []
        },
        result,
        route = this.subject({
          createBuildingsTemplate(data) {
            return data;
          }
        });

      result = route.handleTemplateSuccess(data);

      expect(result).to.be.null;
    });
    it('returns template from loadTemplate', async function() {
      let result,
        route = this.subject({
          ajax: {
            request() {
              return {
                then(functionData) {
                  return functionData();
                }
              };
            }
          },
          handleTemplateSuccess() {
            return 'template';
          }
        });

      result = await route.loadTemplate();
      expect(result).to.be.equal('template');
    });
    it('returns models from model', async function() {
      let result,
        route = this.subject({
          ajax: {
            request() {
              return {
                then(functionData) {
                  return functionData();
                }
              };
            }
          },
          handleBuildingSuccess() {
            return 'models';
          }
        });

      result = await route.model();
      expect(result).to.be.equal('models');
    });
    it('sets templateBuildings in controller in setupController', async function() {
      let result,
        route = this.subject({
          loadTemplate() {
            return 'template';
          }
        });

      await route.setupController();
      result = route.controllerFor('app').get('templateBuildings');
      expect(result).to.be.equal('template');
    });
  });
});
