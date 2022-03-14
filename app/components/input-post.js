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

            // post.validate().then(({validations}) => {

            //     console.log(validations.isValid)
                
                if(post.id) {
                    // updateRecord

                    post.save()
                    this.router.transitionTo('myposts')
                } else {
                    // createRecord

                    post.id = this.globals.get('postId') + 1
                    post.author = 'Shen Prabu'

                    let newPost = this.store.createRecord('post', post)
                    newPost.save()

                    this.set('post', {})
                    this.router.transitionTo('myposts')
                }
            // }, () => {
            //     console.log('error')
            // })
        }
    }
});
