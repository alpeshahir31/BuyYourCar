import Component from '@ember/component';

export default Component.extend({
	isWide: false,
	classNames: ['dib'],
  isClicked: false,
	moredetails:true,
	hidedetails:false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },

		showMenu: function(){
			if(this.isClicked){
				this.set('isClicked', false);
					this.set('hidedetails',false);
				this.set('moredetails',true);
			}
			else{
			this.set('isClicked', true);
				this.set('moredetails',false);
				this.set('hidedetails',true);

			}
		}
  }
});
