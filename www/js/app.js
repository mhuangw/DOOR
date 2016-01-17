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
            controller: 'RecentCtrl'
          }
        }
      })
      .state('tabs.facts', {
        url: '/facts',
        views: {
          'facts-tab': {
            templateUrl: 'templates/facts.html',
            controller: 'BestCtrl'
          }
        }
      })
      .state('tabs.facts2', {
        url: '/facts2',
        views: {
          'facts2-tab': {
            templateUrl: 'templates/facts2.html',
            controller: 'WorstCtrl'
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

  .controller('RecentCtrl', function($scope) {

    $scope.items = [
      { id: 1, Food: 'Cheese Curds', Rating: 'Likes: 8',
        Review:'"... quickly after ordering our cheese curds came out , and let me tell you they are awesome . ...' ,
        image: 'http://2.bp.blogspot.com/-E82gDEnYiv4/UIV0NVqrS9I/AAAAAAAABpI/Uac797_BRQs/s1600/Old+Fashioned.jpg'},

      { id: 2, Food: 'Garlic Sauce', Rating: 'Likes: 4',
        Review:'"... we started our meal with the escargot , which were swimming in a potent pesto and garlic sauce . ..."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'},

      { id: 3, Food: 'Butter Milk Ranch', Rating: 'Likes: 3',
        Review:'"... butter milk ranch dipping sauce was a great addition ."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'},

      { id: 4, Food: 'French Fries', Rating: 'Likes: 2',
        Review:'"... i dont understand the french fascination with adding french fries to steak , but they were good fries , and it was exceptional steak . ..."' ,
        image: 'http://s3-media3.fl.yelpcdn.com/bphoto/N8vGbFD3JTF0eNiFy2L_vg/o.jpg'},

      { id: 5, Food: 'Chilli Cheese Dog', Rating: 'Likes: 2',
        Review:'"... the french fries are also very good , my fiance also enjoyed the chili cheese dog , the pricing was fair for what we got , if youre in the madison area you should really make it a point to come to the old fashioned ! ..."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'}

    ];

  })

  .controller('BestCtrl', function($scope) {

    $scope.items = [
      { id: 1, Food: 'Cheese Curds', Rating: 'Likes: 688',
        Review:'"... quickly after ordering our cheese curds came out , and let me tell you they are awesome ..."' ,
        image: 'http://2.bp.blogspot.com/-E82gDEnYiv4/UIV0NVqrS9I/AAAAAAAABpI/Uac797_BRQs/s1600/Old+Fashioned.jpg'},

      { id: 2, Food: 'Beer Cheese Soup', Rating: 'Likes: 60',
        Review:'"... we also had the beer cheese soup . ..."' ,
        image: 'http://s3-media3.fl.yelpcdn.com/bphoto/XeVEtmf4Waymf3WjUIFJ-Q/o.jpg'},

      { id: 3, Food: 'Fish Fry', Rating: 'Likes: 36',
        Review:'"... and yes , they have fish fry ! ..."' ,
        image: 'http://s3-media3.fl.yelpcdn.com/bphoto/LBB1QgbnWt63tpnWGgsVIA/o.jpg'},

      { id: 4, Food: 'Beer Selection', Rating: 'Likes: 32',
        Review:'"... i dont understand the french fascination with adding french fries to steak , but they were good fries , and it was exceptional steak . ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/KiWfRECn456nbnEhfupdvQ/o.jpg'},

      { id: 5, Food: 'Garlic Sauce', Rating: 'Likes: 32',
        Review:'"... the french fries are also very good , my fiance also enjoyed the chili cheese dog , the pricing was fair for what we got , if youre in the madison area you should really make it a point to come to the old fashioned ! ..."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'}

    ];

  })

.controller('WorstCtrl', function($scope) {

  $scope.items = [
    { id: 1, Food: 'Fennel Bisque', Rating: 'Likes: 2',
      Review:'"... fennel bisque was also just okay . ..."' ,
      image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'},

    { id: 2, Food: 'Cheese Noodles', Rating: 'Likes: 2',
      Review:'"... my burger was cooked just right and the mac and cheese noodles were barely cooked . ..."' ,
      image: 'http://s3-media3.fl.yelpcdn.com/bphoto/JFtxXWZmiMDfWbNio7CvYQ/o.jpg'},

    { id: 3, Food: 'Cheese Curd', Rating: 'Likes: 2',
      Review:'"... i am not much of a cheese curd guy , and a friend and i ordered them one night . ..."' ,
      image: 'http://2.bp.blogspot.com/-E82gDEnYiv4/UIV0NVqrS9I/AAAAAAAABpI/Uac797_BRQs/s1600/Old+Fashioned.jpg'},

    { id: 4, Food: 'Specialty Salads', Rating: 'Likes: 2',
      Review:'"... im not a fan of their brandy vinagrette dressing , but the specialty salads are yummy - one with cherries and another with beets - for those that would prefer to avoid a heart attack . ..."' ,
      image: 'http://s3-media3.fl.yelpcdn.com/bphoto/BdOaV9_BjM0uhw3yWa3HnQ/o.jpg'},

    { id: 5, Food: 'Egg Yolks', Rating: 'Likes: 2',
      Review:'"... i typically hate egg yolks unless the yolk is running over something like an great cheeseburger , and thats just what this place has . ..."' ,
      image: 'http://s3-media4.fl.yelpcdn.com/bphoto/26XMId_R6bvMODn6umwpuA/o.jpg'}

  ];

})

  .controller('MyCtrl2', function($scope) {

    $scope.items = [
      { id: 1, Food: 'Tomato Sauce', Rating: 'Likes: 6',
        Review:'"... i came here on business , and had the goat cheese appetizer in a tomato sauce ( it is awesome ) and their most popular chicken dish without the bacon . ...' ,
        image: 'http://s3-media2.fl.yelpcdn.com/bphoto/dVyImUBf17XzlWTxIScSpQ/o.jpg'},

      {id: 2, Food: ' Fennel Sausage', Rating: 'Likes: 4',
        Review:'"... the wiseguy was good , but i was expecting so much more from the fennel sausage . ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/M--qqBR-k7Cv3CXPnKvDhg/o.jpg'},

      { id: 3, Food: 'Fresh Mozarella', Rating: 'Likes: 4',
        Review:'"... biancoverde : fresh mozzarella , parmigiano reggiano , ricotta , arugula sonny boy : tomato sauce , fresh mozzarella , salami , olives dessert was awesome ! ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/_zdARZbZNr4k8AD-SJDCgg/o.jpg'},

      { id: 4, Food: 'Cheese Platter', Rating: 'Likes: 2',
        Review:'"... if you do have an appetizer , go with the fruit and cheese platter . ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/_zdARZbZNr4k8AD-SJDCgg/o.jpg'},

      { id: 5, Food: 'Ricotta Cheese', Rating: 'Likes: 2',
        Review:'"... the pungent flavor of fresh arugula and rich creamy finish of ricotta cheese complimented this pie nicely . ..."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'},

    ];

  })

  .controller('BestCtrl2', function($scope) {

    $scope.items = [
      { id: 1, Food: 'Tomato Sauce', Rating: 'Likes: 182',
        Review:'"... biancoverde : fresh mozzarella , parmigiano reggiano , ricotta , arugula sonny boy : tomato sauce , fresh mozzarella , salami , olives dessert was awesome ! ...' ,
        image: 'http://s3-media2.fl.yelpcdn.com/bphoto/dVyImUBf17XzlWTxIScSpQ/o.jpg'},

      { id: 2, Food: ' Fennel Sausage', Rating: 'Likes: 162',
        Review:'"... the wiseguy was good , but i was expecting so much more from the fennel sausage . ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/M--qqBR-k7Cv3CXPnKvDhg/o.jpg'},

      { id: 3, Food: 'Olive Oil', Rating: 'Likes: 98',
        Review:'"... i didnt know there was bread offered but the bartender highly recommended that i try the bread with the balsamic vinegar and olive oil . ..."' ,
        image: 'http://s3-media3.fl.yelpcdn.com/bphoto/dPcjiGb4eyy85zNpKZ9tcg/o.jpg'},

      { id: 4, Food: 'Caprese Salad', Rating: 'Likes: 69',
        Review:'"... caprese salad was a bit salty , but otherwise very fresh . ..."' ,
        image: 'http://images.clipartpanda.com/principal-clipart-black-and-white-70476_263_rm-050_b_lg.gif'},

      { id: 5, Food: 'Fresh Mozarella', Rating: 'Likes: 66',
        Review:'"... biancoverde : fresh mozzarella , parmigiano reggiano , ricotta , arugula sonny boy : tomato sauce , fresh mozzarella , salami , olives dessert was awesome ! ..."' ,
        image: 'http://s3-media1.fl.yelpcdn.com/bphoto/_zdARZbZNr4k8AD-SJDCgg/o.jpg'},

    ];

  })




