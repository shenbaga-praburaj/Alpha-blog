import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({

    authors: computed('posts.@each.author', function() {
        const array = ['All', ...new Set(this.posts.filter(post => post.author).map(post => post.author))]

        set(this, 'author', array[0])
        return array
    }),

    filteredPosts: computed('author', function() {
        if(this.author !== 'All') {
            return this.posts.filter(post => post.author === this.author)
        }
        return this.posts
    }),

    actions: {
        onChange(author) {
            set(this, 'author', author)
        }
    }
});
