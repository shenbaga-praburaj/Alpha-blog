import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    globals: service(),
    router: service(),

    actions: {
        savePost: function() {
            let post = this.get('post')
            let isNew = false;

            if(!post.id) {
                post.id = this.globals.get('postId') + 1
                post.author = 'Shen Prabu'

                post = this.store.createRecord('post', post)
                isNew = true;
            }


            post.validate().then(({validations}) => {

                if(validations.isValid) {
                    post.save()
                    this.router.transitionTo('myposts')
                    
                    if(isNew) {
                        this.set('post', {})
                    }
                } else {
                    alert(validations.message)
                }
                
            })
        }
    }
});
