'use strict';

/**
 * @ngdoc service
 * @name angularApp.People
 * @description
 * # People
 * Service in the angularApp.
 */
angular.module('angularApp')
    .provider('RestPeople', function RestPeopleProvider() {

        var url,
            myHttp,
            _add = function (person) {
                return $http.post(url, person);
            },
            _get = function (id){
                return $http.get(url + "/" + id);
            },
            _list = function() {
                return myHttp.get(url);
            },

            _delete = function (id) {
                return $http.delete(url+ "/" + id);
            };

        return {

            setUrl: function(u) {
                url = u;
            },

            $get: function($http) {

                myHttp = $http;
                return {
                    get: _get,
                    list: _list,
                    delete: _delete,
                    add: _add
                }
            }
        }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
