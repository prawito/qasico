var app = angular.module('qasicoApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('main', {
		abstract: true,
		templateUrl: 'tpl/main.html'
	})
	.state('main.home', {
		url: '/home',
		templateUrl: 'tpl/home.html',
		controller: 'homeCtrl'
	})
	.state('main.signup', {
		url: '/signup',
		templateUrl: 'tpl/signup.html',
		controller: 'signupCtrl'
	});
})

app.controller('qasicoCtrl', ['$scope', function($scope){
	$scope.tabs = {};
}]);

app.controller('homeCtrl', ['$scope', function($scope){
	$scope.tabs.selected = 'home';
}]);

app.controller('signupCtrl', ['$scope', function($scope){
	$scope.tabs.selected = 'signup';
}])