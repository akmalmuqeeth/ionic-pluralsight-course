(function(){

  'use strict';

  angular.module('eliteApp').factory('eliteApi', [eliteApi]);

  function eliteApi (){


      
    return {
       getLeagues : getLeagues,
       getLeagueData : getLeagueData 
    };

    function getLeagues(){
        return [
          {
            "name": "8th Grade MS Varsity Friday 2014-15 League",
            "id": 2026,
          }
        ]
    }

    function getLeagueData(){
      return {
         "league": {
            "name" : "First League",
            "id": 2026,
            "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule"
         },
         "teams": [
             {
              "divisionName": null,  
              "divisionTeams": [
                  {
                    "id": 6010,
                    "name": "Baltimore Bombers",
                    "coach": "Michael Gibson"
                  },
                  {
                    "id": 5868,
                    "name": "Bonnie Branch",
                    "coach": "Archer"
                  },
                  {
                    "id": 5869,
                    "name": "Burleigh Manor",
                    "coach": "Carpenter"
                  },
                  {
                    "id": 5925,
                    "name": "CFA",
                    "coach": "Bill Francis"
                  }
              ]
            }
         ] ,
         locations : [
            {
              "id": 3,
              "name": "Meadowbrook Ct. 1",
              "locationUrl": "http://goo.gl/rHw5Rj",
              "address": "5001 Meadowbrook Lane, Ellicott City, MD",
              "latitude": 39.24,
              "longitude": -76.82
            },
            {
              "id": 4,
              "name": "Meadowbrook Ct. 2",
              "locationUrl": "http://goo.gl/rHw5Rj",
              "address": "5001 Meadowbrook Lane, Ellicott City, MD",
              "latitude": 39.24,
              "longitude": -76.82
            },
            {
              "id": 5,
              "name": "Meadowbrook Ct. 3",
              "locationUrl": "http://goo.gl/rHw5Rj",
              "address": "5001 Meadowbrook Lane, Ellicott City, MD",
              "latitude": 39.24,
              "longitude": -76.82
            },
            {
              "id": 6,
              "name": "Meadowbrook Ct. 4",
              "locationUrl": "http://goo.gl/rHw5Rj",
              "address": "5001 Meadowbrook Lane, Ellicott City, MD",
              "latitude": 39.24,
              "longitude": -76.82
            },
            {
              "id": 1002,
              "name": "Roger Carter Community Center",
              "locationUrl": "http://goo.gl/maps/7NQA2",
              "address": "3000 Milltowne Dr, Ellicott City, MD 21043",
              "latitude": 39.27,
              "longitude": -76.8
            }
         ],
         games : [
          {
      "id": 8828,
      "location": "Meadowbrook Ct. 1",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 3,
      "team1": "Bonnie Branch",
      "team1Id": 5868,
      "team2": "Westminster",
      "team2Id": 5890,
      "team1Score": "38",
      "team2Score": "47",
      "time": "2014-12-12T18:00:00"
    },
    {
      "id": 8829,
      "location": "Meadowbrook Ct. 2",
      "locationUrl": "http://goo.gl/rHw5Rj",
      "locationId": 4,
      "team1": "Burleigh Manor",
      "team1Id": 5869,
      "team2": "CMS Camels",
      "team2Id": 5870,
      "team1Score": "40",
      "team2Score": "34",
      "time": "2014-12-12T18:00:00"
    },
    {
      "id": 8836,
      "location": "Roger Carter Community Center",
      "locationUrl": "http://goo.gl/maps/7NQA2",
      "locationId": 1002,
      "team1": "Volt",
      "team1Id": 5889,
      "team2": "Sharks-8th",
      "team2Id": 5886,
      "team1Score": "31",
      "team2Score": "57",
      "time": "2014-12-12T18:00:00"
    },
    {
      "id": 8832,
      "location": "Roger Carter Community Center",
      "locationUrl": "http://goo.gl/maps/7NQA2",
      "locationId": 1002,
      "team1": "Folly Quarter",
      "team1Id": 5872,
      "team2": "Ravens-8th (Etchison)",
      "team2Id": 5884,
      "team1Score": "31",
      "team2Score": "58",
      "time": "2014-12-12T19:00:00"
    },

         ],
         standings : [
            {
              "divisionName": null,
              "divisionStandings": [
                  {
                    "teamId": 5878,
                    "teamName": "Lime Kiln",
                    "wins": 9,
                    "losses": 1,
                    "winningPct": ".900",
                    "pointsFor": 485,
                    "pointsAgainst": 336,
                    "pointsDiff": 149
                  },
                  {
                    "teamId": 5888,
                    "teamName": "Sharks-7th (White)",
                    "wins": 8,
                    "losses": 2,
                    "winningPct": ".800",
                    "pointsFor": 434,
                    "pointsAgainst": 356,
                    "pointsDiff": 78
                  },
                  {
                    "teamId": 5886,
                    "teamName": "Sharks-8th",
                    "wins": 8,
                    "losses": 2,
                    "winningPct": ".800",
                    "pointsFor": 436,
                    "pointsAgainst": 373,
                    "pointsDiff": 63
                  },
                  {
                    "teamId": 5890,
                    "teamName": "Westminster",
                    "wins": 7,
                    "losses": 2,
                    "winningPct": ".778",
                    "pointsFor": 403,
                    "pointsAgainst": 355,
                    "pointsDiff": 48
                  },
                  {
                    "teamId": 5887,
                    "teamName": "Sharks-7th (Green)",
                    "wins": 7,
                    "losses": 3,
                    "winningPct": ".700",
                    "pointsFor": 370,
                    "pointsAgainst": 305,
                    "pointsDiff": 65
                  },
                  {
                    "teamId": 5882,
                    "teamName": "Pikesville-7th",
                    "wins": 7,
                    "losses": 3,
                    "winningPct": ".700",
                    "pointsFor": 471,
                    "pointsAgainst": 412,
                    "pointsDiff": 59
                  }

              ]
            }
         ]

      };
    }


  }

})();