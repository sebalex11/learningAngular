(function(){


	var app = angular.module('store', [ ]);

	app.controller("StoreController", function(){
		this.products = gems;
	})

	var gems= [
	{
		name: "Dodecahedron",
		price: 2,
		description: "nope",
		canPurchase: true,
		images: [
			{
				full: "Assets/diamond.png"
			}
		]
	},

	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "maybe",
		canPurchase: true,
		images: [
			{
				full: "Assets/emerald.png"
			}
		]
	}

	]
})();