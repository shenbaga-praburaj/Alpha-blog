import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),

    actions: {
        delete: function() {
            this.get('model').destroyRecord()
            this.router.transitionTo('myposts')
        },

        cancel: function() {
            this.router.transitionTo('myposts')
        }
    }
});
