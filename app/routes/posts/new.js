import Route from '@ember/routing/route'
import { get, set } from '@ember/object'
import { inject as service } from '@ember/service'

export default Route.extend({
    store: service(),

    setupController(controller, model) {
        let newpost = this.store.createRecord('post')
        set(controller, 'newPost', newpost)
    }
});
