import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', {path: '/'}, function() {
    this.route('new');
    // this.route('edit', {path: '/:post_id/edit'});
    // this.route('delete', {path: '/:post_id/delete'});
    // this.route('view', {path: '/:post_id'});
    this.route('post', {path: '/:post_id'}, function(){
      this.route('edit');
      this.route('delete');
      this.route('view', {path: ''});
    })
  });

  this.route('newsposts', {path: '/newsposts'}, function() {
    this.route('post', {path: '/:post_id'}, function() {
      this.route('view', {path: ''});
    });
  });
});

export default Router;
