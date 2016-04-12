(function(){

  'use strict';

  angular.module('eliteApp').controller('leaguesCtrl', ['eliteApi', leaguesCtrl]);

  function leaguesCtrl (eliteApi){
      var vm = this;

      var leagues = eliteApi.getLeagues();
      var leagueData = eliteApi.getLeagueData();

      console.log(leagueData);
      

      
  }

})();