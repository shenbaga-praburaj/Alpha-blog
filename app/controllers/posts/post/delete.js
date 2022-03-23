import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),

    actions: {
        delete() {
            this.model.destroyRecord()
            this.router.transitionTo('posts')
        },

        cancel() {
            this.router.transitionTo('posts')
        }
    }
});
