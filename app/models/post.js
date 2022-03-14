import DS from 'ember-data';
import { computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const validations = buildValidations(
    {
      title: {
        description: 'Title',
        validators: [
          validator('presence', true),
          validator('length', {
            min: 5,
            max: 50
          })
        ]
      },
      content: {
        description: 'Content',
        validators: [
          validator('presence', true),
          validator('length', {
            min: 20,
            max: 1000
          })
        ]
      },
    //   'post.tags': {
    //     description: 'Hashtags',
    //     validators: [
    //         validator('format')
    //     ]
    //   }
    }
);

export default DS.Model.extend(validations, {
    title: DS.attr('string'),
    content: DS.attr('string'),
    tags: DS.attr(),
    author: DS.attr('string'),

    tagsArray: computed('tags', function() {
        return this.tags ? this.tags.split(',') : this.tags
    })
});
