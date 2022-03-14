import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    store: service(),
    globals: service(),

    model: function() {
        return this.store.findAll('post');
    },

    actions: {
        didTransition: function() {
            this.globals.set('postId', +this.store.peekAll('post').lastObject.id)
        }
    }
});
