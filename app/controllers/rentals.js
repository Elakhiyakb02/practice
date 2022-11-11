import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    filterByCity(param) {
      if (param !== '') {
        console.log('inside filterbycity if case ' + param);
        return this.store.query('rental', { city: param }).then((results) => {
          console.log(param, results);
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll('rental').then((results) => {
          return { query: param, results: results };
        });
      }
    },
  },
});
