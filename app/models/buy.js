import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  phone: DS.attr('number'),
  address: DS.attr('string'),
  creditNbr: DS.attr('string'),
  name: DS.attr('string'),
  expiry: DS.attr('string'),
  cvv: DS.attr('number'),
  email: DS.attr('string')
});
