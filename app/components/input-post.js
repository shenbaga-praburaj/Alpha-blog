import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    globals: service(),
    router: service(),

    actions: {
        savePost: function() {
            let post = this.get('post')
            console.log(post)
            if(post.id) {
                // updateRecord
            } else {
                // createRecord

                post.id = this.globals.get('postId')
                post.author = 'Shen Prabu'
                post.tags = post.tags ? post.tags.split(',') : null
                this.store.createRecord('post', post)

                this.globals.set('postId', ++post.id)

                this.set('post', {})
                this.get('router').transitionTo('myposts')
            }
        }
    }
});
