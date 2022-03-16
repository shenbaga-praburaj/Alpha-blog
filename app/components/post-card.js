import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),

    actions: {
        viewPost: function(post) {
            this.router.transitionTo('posts.view', post)
        },

        dummyAction: function() {
        }
    }
});
