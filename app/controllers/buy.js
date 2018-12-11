import Controller from '@ember/controller';

export default Controller.extend({

  	sortAscending: false, // sorts post by timestamp
 	actions: {
    submit: function() {
    	var name = this.get("firstname");
      var buy = this.store.createRecord('buy', {
      firstname: this.get('firstName'),
	   	lastname: this.get('lastName'),
	   	phone: this.get('contactNumber'),
	   	address: this.get('address'),
	   	creditNbr: this.get('number'),
	   	name: this.get('name'),
	   	expiry: this.get('expiration'),
	   	cvv: this.get('cvv'),
	    email: this.get('email'),
      });
      buy.save();
      this.transitionToRoute('confirmation');
    },

    sendMail: function() {
      emailjs.send("buyyourcar","buyyourcar",{name: "Buy Your Car", notes: "Congratulations!! Purchase Completed"});
    }
  }
});
