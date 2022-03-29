import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, type, payload, id, requestType) {

        payload = { newsposts: payload.news }
        
        return this._super(store, type, payload, id, requestType)
    }
});