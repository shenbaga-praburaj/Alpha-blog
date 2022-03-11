import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    tags: DS.attr(),
    author: DS.attr('string'),

    tagsArray: computed('tags', function() {
        return this.tags ? this.tags.split(',') : this.tags
    })
});
