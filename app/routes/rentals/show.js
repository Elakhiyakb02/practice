import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    store: service(),

    model(params) {
        return this.store.findRecord('rental', params.rental_id);
      }
});
