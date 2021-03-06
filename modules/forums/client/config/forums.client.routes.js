(function () {
  'use strict';

  angular
    .module('forums.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('forums', {
        abstract: true,
        url: '/forums',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'oper', 'admin']
        }
      })
      .state('forums.list', {
        url: '',
        templateUrl: '/modules/forums/client/views/index.client.view.html',
        data: {
          pageTitle: 'PAGETITLE.FORUM'
        }
      })
      .state('forums.search', {
        url: '/search?forumId&keys',
        templateUrl: '/modules/forums/client/views/search-result.client.view.html',
        data: {
          pageTitle: 'PAGETITLE.FORUM'
        }
      })
      .state('forums.post', {
        url: '/:forumId/post',
        templateUrl: '/modules/forums/client/views/post.client.view.html',
        data: {
          pageTitle: 'PAGETITLE.FORUM'
        }
      })
      .state('forums.view', {
        url: '/:forumId',
        templateUrl: '/modules/forums/client/views/view.client.view.html',
        data: {
          pageTitle: 'PAGETITLE.FORUM'
        }
      })
      .state('forums.topic', {
        url: '/:forumId/:topicId',
        templateUrl: '/modules/forums/client/views/topic.client.view.html',
        data: {
          pageTitle: 'PAGETITLE.FORUM'
        }
      });
  }
}());
