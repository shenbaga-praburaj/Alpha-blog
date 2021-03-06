import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),

    description: DS.attr('string'),
    category: DS.attr(),
    published: DS.attr('string')
});
