import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    newPost: {}
    // newPost: computed(function() {
    //     return this.store.createRecord('post');
    // })
});
