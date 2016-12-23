var app = angular.module('qasicoApp', ['ngAnimate', 'ui.router']);

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

app.controller('qasicoCtrl', ['$scope', '$interval', function($scope, $interval){
	$scope.tabs = {};
	$scope.anim = false;
	$interval(function () {
        if ($scope.anim === false) {
			$scope.anim = true;
		}else $scope.anim = false;
    }, 3000);
}]);

app.controller('homeCtrl', ['$scope', function($scope){
	$scope.tabs.selected = 'home';
}]);

app.controller('signupCtrl', ['$scope', function($scope){
	$scope.tabs.selected = 'signup';
}])