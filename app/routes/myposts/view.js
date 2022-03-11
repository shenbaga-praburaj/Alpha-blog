import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    store: service(),

    model(param) {
        return this.store.findRecord('post', param.post_id)
    }
});
