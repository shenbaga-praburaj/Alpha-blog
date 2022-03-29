import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),

    actions: {
        viewPost(post, route) {
            this.router.transitionTo(`${route}.post.view`, post)
        },

        dummyAction() {
        }
    }
});
