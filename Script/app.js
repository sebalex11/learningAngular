(function(){


	var app = angular.module('store', [ ]);

	app.controller("StoreController", function(){
		this.products = gems;
	})

	var gems= [
	{
		name: "Dodecahedron",
		price: 2,
		description: "this is actually a diamond you fool!",
		canPurchase: true,
		images: [
			{
				full: "Assets/diamond.png"
			}],
		reviews: [
			{
				stars: 5,
				body: "I love this product",
				author: "nobody@nothing.com",
			},
			{
				stars: 1,
				body: "I hate this thing",
				author: "trash@terrible.com",
			}
			],

	},

	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "This is most definitely not a Pentagonal gem, it has at least 6 sides",
		canPurchase: true,
		images: [
			{
				full: "Assets/emerald.png"
			}
		]
	}

	];





	// app.controller("PanelController", function(){
	// 	this.tab = 1;
	// 	this.selectTab = function(setTab){
	// 		this.tab = setTab;
	// 	};

	// 	this.isSelected = function(checkTab){
	// 		return this.tab === checkTab;
	// 	};
	// });

	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: "panel"
		};
	});


})();