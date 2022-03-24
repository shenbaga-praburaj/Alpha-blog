import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Component.extend({
    store: service(),
    router: service(),
    showError: false,

    actions: {
        savePost() {

            this.post.validate().then(({validations}) => {

                if(validations.isValid) {
                    set(this, 'showError', false)

                    if(!this.post.author) {
                        set(this.post, 'author', 'Anonymous')
                    }
                    this.post.save().then(() => {
                        this.router.transitionTo('posts')
                    })

                } else {
                    set(this, 'showError', true)
                }
            })
        },

        close() {
            // console.log(this.post.modelChanges())
            // this.post.rollback()
            this.post.rollbackAttributes()
            this.router.transitionTo('posts')
        },

        testOnChange() {
            set(this.post, 'testAttr', {title: this.post.title, test: 'test'})
        }
    }
});
