(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2be3ba43"],{"440a":function(t,e,a){},"4e78":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Forwards","hide-bottom":"",dense:"",data:this.forwardsInfo,columns:this.columns,"row-key":"name","rows-per-page-options":[0],pagination:this.pagination},on:{"update:pagination":function(e){return t.$set(this,"pagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"games",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.games)+"\n              ")]),a("q-td",{key:"score",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(1e3*e.row.score)/1e3).toFixed(3))+"\n              ")])],1)]}}])})],1),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Defensemen","hide-bottom":"",dense:"",data:this.defensemenInfo,columns:this.columns,"row-key":"name","rows-per-page-options":[0],pagination:this.pagination},on:{"update:pagination":function(e){return t.$set(this,"pagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"games",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.games)+"\n              ")]),a("q-td",{key:"score",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(1e3*e.row.score)/1e3).toFixed(3))+"\n              ")])],1)]}}])})],1),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Goaltenders","hide-bottom":"",dense:"",data:this.goaltendersInfo,columns:this.columns,"row-key":"name","rows-per-page-options":[0],pagination:this.pagination},on:{"update:pagination":function(e){return t.$set(this,"pagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"games",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.games)+"\n              ")]),a("q-td",{key:"score",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(1e3*e.row.score)/1e3).toFixed(3))+"\n              ")])],1)]}}])})],1)])},n=[],o=(a("551c"),a("ac6a"),a("cadf"),a("06db"),a("5df3"),a("bc3a")),i=a.n(o),r={name:"Recommended",data:function(){return{loading:!0,lopadingMessage:"Getting teams info",error:!1,forwardsIds:["8471685","8475158","8479318","8477940","8477404","8475193","8471214","8475765","8477497","8477496","8479343","8479400","8476539","8479337","8479999","8475314","8476826","8478873","8481559","8474161","8480208","8478466","8481533","8480031","8478106","8480028"],defensemenIds:["8480839","8470613","8470600","8477495","8480865","8477950","8480073","8476902","8476906","8479982","8479976","8477945","8480043"],goaltendersIds:["8471695","8475883","8480925","8476876","8477480"],teamsIds:[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,52,53,54],teamsInfo:[],forwardsInfo:[],defensemenInfo:[],goaltendersInfo:[],peopleEndpoint:"https://statsapi.web.nhl.com/api/v1/people/",scheduleEndpoint:"https://statsapi.web.nhl.com/api/v1/schedule/?teamId=",teamsEndpoint:"https://statsapi.web.nhl.com/api/v1/teams/",peopleSuffix:"/stats?stats=gameLog",teamsSuffix:"/stats?stats=statsSingleSeason",pagination:{page:1,rowsPerPage:0,sortBy:"score",descending:!0},columns:[{name:"name",label:"Player",field:"name",sortable:!0,align:"left"},{name:"games",label:"Games",field:"games",sortable:!0},{name:"score",label:"Score",field:"score",sortable:!0}]}},methods:{getPlayersScores:function(){var t=this,e=[],a=[];this.forwardsIds.forEach((function(a){var s={name:"",games:0,score:0,teamId:0},n=[];n.push(i.a.get(t.peopleEndpoint+a)),n.push(i.a.get(t.peopleEndpoint+a+t.peopleSuffix)),Promise.all(n).then((function(e){var a=e[0].data.people[0],n=e[1].data.stats[0].splits.splice(0,10),o=a.currentTeam.id,i=0,r=0;n.length>0&&(n.forEach((function(e){r+=parseInt(e.stat.points)/parseFloat(t.teamsInfo[e.opponent.id].gapg)})),r/=parseFloat(n.length)),t.teamsInfo[o].opponents.forEach((function(t){i+=r*t.gapg})),s.name=a.fullName,s.teamId=o,s.games=t.teamsInfo[o].opponents.length,s.score=i}),(function(e){t.loading=!1,t.error=!0})),e.push(s)})),this.forwardsInfo=e.splice(0,14),this.defensemenIds.forEach((function(e){var s={name:"",games:0,score:0,teamId:0},n=[];n.push(i.a.get(t.peopleEndpoint+e)),n.push(i.a.get(t.peopleEndpoint+e+t.peopleSuffix)),Promise.all(n).then((function(e){var a=e[0].data.people[0],n=e[1].data.stats[0].splits.splice(0,10),o=a.currentTeam.id,i=t.teamsInfo[o].opponents.length,r=0,p=0;n.length>0&&(n.forEach((function(e){p+=parseInt(e.stat.points)/parseFloat(t.teamsInfo[e.opponent.id].gapg)})),p/=parseFloat(n.length)),t.teamsInfo[o].opponents.forEach((function(t){r+=p*t.gapg})),s.name=a.fullName,s.teamId=o,s.games=i,s.score=r}),(function(e){t.loading=!1,t.error=!0})),a.push(s)})),this.defensemenInfo=a.splice(0,6),this.goaltendersIds.forEach((function(e){var a={name:"",games:0,score:0,teamId:0},s=[];s.push(i.a.get(t.peopleEndpoint+e)),s.push(i.a.get(t.peopleEndpoint+e+t.peopleSuffix)),Promise.all(s).then((function(e){var s=e[0].data.people[0],n=e[1].data.stats[0].splits.splice(0,10),o=s.currentTeam.id,i=t.teamsInfo[o].opponents.length,r=0,p=0,l=0;n.length>0&&(n.forEach((function(e){r+=parseInt(e.stat.goalsAgainst)/parseFloat(t.teamsInfo[e.opponent.id].gfpg)})),r/=parseFloat(n.length)),t.teamsInfo[o].opponents.forEach((function(t){p+=r*t.gfpg})),l=4*i-p,l=l<0?0:l,l=n.length>0?l:0,a.name=s.fullName,a.teamId=o,a.games=i,a.score=l}),(function(e){t.loading=!1,t.error=!0})),t.goaltendersInfo.push(a)})),this.loading=!1},getTeamsScheduleAndInfo:function(){var t=this,e=[],a=[];this.teamsIds.forEach((function(a){e.push(i.a.get(t.teamsEndpoint+a+t.teamsSuffix))})),this.teamsIds.forEach((function(e){a.push(i.a.get(t.scheduleEndpoint+e+"&startDate="+t.getBeginningMonday()+"&endDate="+t.getEndingSunday()))})),Promise.all(e).then((function(e){e.forEach((function(e){void 0!==e&&null!==e&&void 0!==e.data.stats[0].splits[0].stat.goalsPerGame&&null!==e.data.stats[0].splits[0].stat.goalsPerGame&&(t.teamsInfo[e.data.stats[0].splits[0].team.id]={gfpg:e.data.stats[0].splits[0].stat.goalsPerGame,gapg:e.data.stats[0].splits[0].stat.goalsAgainstPerGame})})),t.loadingMessage="Getting teams schedules",Promise.all(a).then((function(e){for(var a=0;a<e.length;a++){var s=e[a],n=t.teamsIds[a];if(void 0!==s&&null!==s&&void 0!==s.data.totalItems&&null!==s.data.totalItems){var o=[];s.data.dates.forEach((function(e){var a=e.games[0].teams.home.team.id===n,s=a?e.games[0].teams.away.team.id:e.games[0].teams.home.team.id;o.push({gfpg:t.teamsInfo[s].gfpg,gapg:t.teamsInfo[s].gapg})})),t.teamsInfo[n].opponents=o}}t.loadingMessage="Getting players info",t.getPlayersScores()}),(function(e){t.loading=!1,t.error=!0}))}),(function(e){t.loading=!1,t.error=!0}))},getBeginningMonday:function(){var t=new Date,e=t.getDay(),a=t.getDate()-e+(0===e?-6:1);return new Date(t.setDate(a)).toJSON().slice(0,10)},getEndingSunday:function(){var t=new Date,e=t.getDay(),a=t.getDate()-e+7;return new Date(t.setDate(a)).toJSON().slice(0,10)},getTeamLogo:function(t){return"statics/team-logos/"+t+".gif"}},created:function(){this.getTeamsScheduleAndInfo()}},p=r,l=(a("9b84"),a("2877")),d=a("fe09"),g=Object(l["a"])(p,s,n,!1,null,"312cffce",null);e["default"]=g.exports;g.options.components=Object.assign({QPage:d["e"],QTable:d["h"],QTr:d["m"],QTd:d["j"]},g.options.components||{})},"9b84":function(t,e,a){"use strict";var s=a("440a"),n=a.n(s);n.a}}]);