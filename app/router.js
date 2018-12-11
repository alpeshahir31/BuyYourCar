import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('seecars');
  this.route('buy');
  this.route('home');
  this.route('maps');
  this.route('confirmation');
});

export default Router;
