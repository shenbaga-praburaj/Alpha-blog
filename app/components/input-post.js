import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
    store: service(),
    router: service(),

    actions: {
        savePost() {
            
            this.post.save().then(() => {
                this.router.transitionTo('posts')
            })
            
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
