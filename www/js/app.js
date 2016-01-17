angular.module('ionicApp', ['ionic'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('signin', {
        url: '/sign-in',
        templateUrl: 'templates/sign-in.html',
        controller: 'SignInCtrl'
      })
      .state('forgotpassword', {
        url: '/forgot-password',
        templateUrl: 'templates/forgot-password.html'
      })
      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tabs.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: 'templates/home.html',
            controller: 'HomeTabCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: '/facts',
        views: {
          'home-tab': {
            templateUrl: 'templates/facts.html'
          }
        }
      })
      .state('tabs.facts2', {
        url: '/facts2',
        views: {
          'home-tab': {
            templateUrl: 'templates/facts2.html'
          }
        }
      })
      .state('tabs.about', {
        url: '/about',
        views: {
          'about-tab': {
            templateUrl: 'templates/about.html'
          }
        }
      })
      .state('tabs.navstack', {
        url: '/navstack',
        views: {
          'about-tab': {
            templateUrl: 'templates/nav-stack.html'
          }
        }
      })
      .state('tabs.contact', {
        url: '/contact',
        views: {
          'contact-tab': {
            templateUrl: 'templates/contact.html'
          }
        }
      });


    $urlRouterProvider.otherwise('/sign-in');

  })

  .controller('SignInCtrl', function($scope, $state) {

    $scope.signIn = function(user) {
      console.log('Sign-In', user);
      $state.go('tabs.home');
    };

  })

  .controller('HomeTabCtrl', function($scope) {
    console.log('HomeTabCtrl');
  })

.controller('MyCtrl', function($scope) {

  $scope.items = [
    { id: 1, Food: 'salmon sashimi', Rating: 'Likes: 8',
      Review:"" ,
      image: 'http://s3-media1.fl.yelpcdn.com/bphoto/9Yqu-zFqcS-93CL3OOroZQ/o.jpg'},

    { id: 2, Food: 'spicy tuna', Rating: 'Likes: 6',
      Link: ' http://www.yelp.com/biz/watami-sushi-and-sake-bar-waterloo?q=salmon%20sashimi' ,
      image: 'http://s3-media4.fl.yelpcdn.com/bphoto/WlMCXsy7L_hVX9_kaGwdDw/o.jpg'},

    { id: 3, Food: 'spicy tuna', Rating: 'Likes: 6',
      Link: ' http://www.yelp.com/biz/watami-sushi-and-sake-bar-waterloo?q=salmon%20sashimi' ,
      image: 'http://images.clipartpanda.com/canned-food-clipart-black-and-white-RTGE9GrTL.png'},

    { id: 4, Food: 'wasabi ginger', Rating: 'Likes: 4',
      Link: ' http://www.yelp.com/biz/watami-sushi-and-sake-bar-waterloo?q=salmon%20sashimi' ,
      image: 'http://s3-media3.fl.yelpcdn.com/bphoto/x546WIOUtvVHT7zxGYi1tQ/o.jpg'},

    { id: 5, Food: 'spicy tuna', Rating: 'Likes: 4',
      Link: ' http://www.yelp.com/biz/watami-sushi-and-sake-bar-waterloo?q=salmon%20sashimi' ,
      image: 'http://s3-media1.fl.yelpcdn.com/bphoto/pvpoBYO81xitkogC67OKtQ/o.jpg'},

  ];

});
