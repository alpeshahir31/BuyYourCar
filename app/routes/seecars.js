import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
   return this.get('ajax').request('https://marketcheck-prod.apigee.net/v1/search?api_key=080zLu3C9W2fhyE3BVbOGCMiEjIjMdy0&car_type=used&year=2018');
    //return this.store.findAll("listing");
  }
});
