import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('allposts', {path: '/'});
  this.route('myposts', function() {
    this.route('new');
    this.route('edit', {path: '/:post_id/edit'});
    this.route('view', {path: '/:post_id'});
    this.route('delete', {path: '/:post_id/delete'});
  });
  this.route('users');
  this.route('settings');
});

export default Router;
