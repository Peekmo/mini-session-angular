angular.module('umanit', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'MainCtrl'
            })
            .when('/page2', {
                templateUrl: 'partials/page2.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])

    .controller('MainCtrl', function($scope, ProxyService) {
        $scope.data = [];
        $scope.selected = ProxyService.selected;

        ProxyService.getNews().then(function(data) {
            $scope.data = data;
        });

        $scope.select = function(id) {
            $scope.selected = id;
            ProxyService.selected = id;
        }
    })

    .service('ProxyService', ['$http', '$q', function($http, $q) {
        var news = [];

        var get = function() {
            var defer = $q.defer();

            $http.get('news.json')
                .success(function(data) {
                    defer.resolve(data);
                })
            ;

            return defer.promise;
        }

        var defer1 = $q.defer();
        defer1.resolve(get());

        return {
            selected: 0,
            getNews: function() {
                return defer1.promise;
            }
        }
    }])
;
