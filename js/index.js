require('angular');
require('angular-ui-router');

angular.module('cyrcleoflifeApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/birth');

    $stateProvider
      .state('birth', {
        url: '/birth',
        template: '<div>You are borned<br><button ui-sref="birth.childhood">childhood</button><div ui-view></div></div>',
      })
      .state('birth.childhood', {
        url: '/childhood',
        template: '<div>You are grown up<br><button ui-sref="birth.childhood.study">study</button><br><button ui-sref="birth.childhood.career">career</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study', {
        url: '/study',
        template: '<div>Really ?<br><button ui-sref="birth.childhood.study.phd">phd</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study.phd', {
        url: '/phd',
        template: '<div>Great, What next ?<br><button ui-sref="birth.childhood.study.phd">phd</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career', {
        url: '/career',
        template: '<div>GoodLuck !<br><button ui-sref="birth.childhood.career.workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife', {
        url: '/workinglife',
        template: '<div>Hard Work !<br><button ui-sref="birth.childhood.career.workinglife.pension">pension</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife.pension', {
        url: '/pension',
        template: '<div>Good old days<br><button ui-sref="birth.childhood.career.workinglife.pension.death">death</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife.pension.death', {
        url: '/death',
        template: '<div>RIP<br><button ui-sref="birth">birth</button></div>'
      });
  });
