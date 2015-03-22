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
            _save = function (person) {
                return (person.id) ? myHttp.put(url + '/' + person.id, person) : myHttp.post(url, person);
            },
            _get = function (id){
                return myHttp.get(url + "/" + id);
            },
            _list = function() {
                return myHttp.get(url);
            },

            _delete = function (id) {
                return myHttp.delete(url+ "/" + id);
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
                    save: _save
                }
            }
        }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
