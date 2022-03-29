import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.currentsapi.services',
    namespace: 'v1',
    apiKey: 'AVf3jCmyyRrC8jF9b7vmlNcnoTJefeC7Gz0c3LyedvLGE_bo',

    // urlForFindAll(model) {
    //     return `${this.host}/${this.namespace}/latest-news?apiKey=${this.apiKey}`
    // },

    pathForType(model) {
        return `latest-news?apiKey=${this.apiKey}`
    }
 });
