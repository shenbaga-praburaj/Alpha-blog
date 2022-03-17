import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    inputClassName: computed('className', 'errorMessage', {
        get() {
            const errorClass = this.errorClassName ? this.errorClassName : 'input-error'
            return  this.className + (this.errorMessage ? ' ' + errorClass : '')
        }
    })
});
