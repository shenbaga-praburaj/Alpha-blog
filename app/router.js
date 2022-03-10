import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('allposts');
  this.route('myposts', function() {
    this.route('new');
  });
  this.route('users');
  this.route('settings');
});

export default Router;
