// Loaded on client startup

///////////////////////////////////////////////////////////////////////////////
Meteor.startup(function () {
// Configure app
///////////////////////////////////////////////////////////////////////////////
	// Create a new itemCandidate
	itemCandidate = new ItemCandidate();
	
  nameView = new ItemNameView({ el: $('#itemNamePicker'), model: itemCandidate });
	imageView = new ItemImageView({ el: $('#itemImagePicker'), model: itemCandidate });
	captionView = new ItemCaptionView({ el: $('#itemCaptionPicker'), model: itemCandidate });
	priceView = new ItemPriceView({ el: $('#itemPricePicker'), model: itemCandidate });
});