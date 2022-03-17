import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({

    authors: computed('posts.@each.author', {
        get() {
            const array = ['All']
            this.posts.forEach(post => {
                if(array.indexOf(post.author) === -1 && post.author) {
                    array.push(post.author)
                }
                    
            })
            set(this, 'author', array[0])
            return array
        }
    }),

    filteredPosts: computed('author', {
        get() {
            if(this.author !== 'All') {
                return this.posts.filter(post => post.author === this.author)
            }
            return this.posts
        }
    }),

    actions: {
        onChange(author) {
            set(this, 'author', author)
        }
    }
});
