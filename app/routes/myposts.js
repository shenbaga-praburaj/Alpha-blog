import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    store: service(),
    globals: service(),

    setupController: function(controller, model) {
        controller.set('posts', model)
        this.globals.set('postId', model.length)
    },

    model: function() {
        return this.store.findAll('post');
    }
});
