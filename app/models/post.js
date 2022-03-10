import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    tags: DS.attr('Array'),
    author: DS.attr('string')
});
