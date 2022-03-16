import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
    store: service(),
    router: service(),

    actions: {
        savePost: function() {
            let post = get(this, 'post') // this.post
            //this.post.title //this.post.tag.name
            //get(this, 'post.tag.name');
            let isNew = false;

            if(!post.id) {
                post.author = 'Shen Prabu'

                post = this.store.createRecord('post', post)
                isNew = true;
            }
            post.save()
                    this.router.transitionTo('posts')
            // post.validate().then(({validations}) => {

            //     if(validations.isValid) {
            //         post.save()
            //         this.router.transitionTo('posts')
                    
            //         if(isNew) {
            //             this.set('post', {})
            //         }
            //     } else {
            //         alert(validations.message)
            //     }
                
            // })
        }
    }
});
