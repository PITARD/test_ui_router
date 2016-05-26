require('angular');
require('angular-ui-router');

angular.module('cyrcleoflifeApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/birth');

    $stateProvider
      .state('birth', {
        url: '/birth',
        template: '<div>You are borned<br><button ui-sref=".childhood">childhood</button><div ui-view></div></div>',
      })
      .state('birth.childhood', {
        url: '/childhood',
        template: '<div>You are grown up<br><button ui-sref=".study">study</button><br><button ui-sref="birth.childhood.career">career</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study', {
        url: '/study',
        template: '<div>Really ?<br><button ui-sref=".phd">phd</button><div ui-view></div></div>'
      })
      .state('birth.childhood.study.phd', {
        url: '/phd',
        template: '<div>Great, What next ?<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career', {
        url: '/career',
        template: '<div>GoodLuck !<br><button ui-sref=".workinglife">workinglife</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife', {
        url: '/workinglife',
        template: '<div>Hard Work !<br><button ui-sref=".pension">pension</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife.pension', {
        url: '/pension',
        template: '<div>Good old days<br><button ui-sref=".death">death</button><div ui-view></div></div>'
      })
      .state('birth.childhood.career.workinglife.pension.death', {
        url: '/death',
        template: '<div>RIP<br><button ui-sref="birth">birth</button></div>'
      });

      addWorkingLife($stateProvider, 'birth.childhood.study.phd');
      addWorkingLife($stateProvider, 'birth.childhood.study');
      addWorkingLife($stateProvider, 'birth.childhood.career');

      function addWorkingLife($stateProvider, parent){
        $stateProvider.state(`${parent}.workinglife`, {
          url: '/workinglife',
          template: '<div>Hard Work !<br><button ui-sref=".pension">pension</button><div ui-view></div></div>'
        })
        .state(`${parent}.workinglife.pension`, {
          url: '/pension',
          template: '<div>Good old days<br><button ui-sref=".death">death</button><div ui-view></div></div>'
        })
        .state(`${parent}.workinglife.pension.death`, {
          url: '/death',
          template: '<div>RIP<br><button ui-sref="birth">birth</button></div>'
        });
      }

});
