(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5f4392e4"],{"9ba6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Forwards","hide-bottom":"",dense:"",data:this.forwardsInfo,columns:this.playerColumns,"row-key":"name","rows-per-page-options":[0],pagination:this.forwardsPagination},on:{"update:pagination":function(e){return t.$set(this,"forwardsPagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"gamesPlayed",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.gamesPlayed)+"\n              ")]),a("q-td",{key:"goals",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.goals)+"\n              ")]),a("q-td",{key:"assists",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.assists)+"\n              ")]),a("q-td",{key:"points",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.points)+"\n              ")]),a("q-td",{key:"average",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(100*e.row.average)/100).toFixed(2))+"\n              ")])],1)]}}])})],1),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Defensemen","hide-bottom":"",dense:"",data:this.defensemenInfo,columns:this.playerColumns,"row-key":"name","rows-per-page-options":[0],pagination:this.forwardsPagination},on:{"update:pagination":function(e){return t.$set(this,"forwardsPagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"gamesPlayed",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.gamesPlayed)+"\n              ")]),a("q-td",{key:"goals",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.goals)+"\n              ")]),a("q-td",{key:"assists",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.assists)+"\n              ")]),a("q-td",{key:"points",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.points)+"\n              ")]),a("q-td",{key:"average",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(100*e.row.average)/100).toFixed(2))+"\n              ")])],1)]}}])})],1),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"Goaltenders","hide-bottom":"",dense:"",data:this.goaltendersInfo,columns:this.goaltenderColumns,"row-key":"name","rows-per-page-options":[0],pagination:this.goaltenderPagination},on:{"update:pagination":function(e){return t.$set(this,"goaltenderPagination",e)}},scopedSlots:t._u([{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"name",attrs:{props:e}},[a("img",{staticClass:"team-logo-table",attrs:{src:t.getTeamLogo(e.row.teamId)}}),t._v("\n                  "+t._s(e.row.name)+"\n              ")]),a("q-td",{key:"minutesPlayed",attrs:{props:e}},[t._v("\n                  "+t._s(parseFloat(Math.round(100*e.row.minutesPlayed)/100).toFixed(2))+"\n              ")]),a("q-td",{key:"goalsAgainst",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.goalsAgainst)+"\n              ")]),a("q-td",{key:"points",attrs:{props:e}},[t._v("\n                  "+t._s(e.row.points)+"\n              ")])],1)]}}])})],1)])},n=[],o=(a("28a5"),a("551c"),a("ac6a"),a("cadf"),a("06db"),a("5df3"),a("bc3a")),r=a.n(o),i={name:"Stats",data:function(){return{forwardsIds:["8471685","8475158","8479318","8477940","8477404","8475193","8471214","8475765","8477497","8477496","8479343","8479400","8476539","8479337","8479999","8475314","8476826","8478873","8481559","8474161","8480208","8478466","8481533","8480031","8478106","8480028"],defensemenIds:["8480839","8470613","8470600","8477495","8480865","8477950","8480073","8476902","8476906","8479982","8479976","8477945","8480043"],goaltendersIds:["8471695","8475883","8480925","8476876","8477480"],forwardsInfo:[],defensemenInfo:[],goaltendersInfo:[],peopleEndpoint:"https://statsapi.web.nhl.com/api/v1/people/",statsSuffix:"/stats?stats=gameLog",forwardsPagination:{page:1,rowsPerPage:0,sortBy:"points",descending:!0},goaltenderPagination:{page:1,rowsPerPage:0,sortBy:"points",descending:!0},playerColumns:[{name:"name",label:"Player",field:"name",sortable:!0,align:"left"},{name:"gamesPlayed",label:"Games Played",field:"gamesPlayed",sortable:!0},{name:"goals",label:"Goals",field:"goals",sortable:!0},{name:"assists",label:"Assists",field:"assists",sortable:!0},{name:"points",label:"Points",field:"points",sortable:!0},{name:"average",label:"Average",field:"average",sortable:!0,format:function(t,e){return parseFloat(Math.round(100*t)/100).toFixed(2)}}],goaltenderColumns:[{name:"name",label:"Player",field:"name",sortable:!0,align:"left"},{name:"minutesPlayed",label:"Minutes Played",field:"average",sortable:!0,format:function(t,e){return parseFloat(Math.round(100*t)/100).toFixed(2)}},{name:"goalsAgainst",label:"GA",field:"goalsAgainst",sortable:!0},{name:"points",label:"Points",field:"gamesStarted",sortable:!0}]}},methods:{getPlayersInfo:function(){var t=this;this.forwardsIds.forEach((function(e){var a={name:"",gamesPlayed:0,goals:0,assists:0,points:0,average:0,teamId:0},s=[];s.push(r.a.get(t.peopleEndpoint+e)),s.push(r.a.get(t.peopleEndpoint+e+t.statsSuffix)),Promise.all(s).then((function(e){var s=e[0].data.people[0],n=e[1].data.stats[0].splits.filter((function(e){return new Date(e.date)>=new Date(t.getBeginningMonday())&&new Date(e.date)<=new Date(t.getEndingSunday())})),o=0,r=0;n.forEach((function(t){o+=t.stat.goals,r+=t.stat.assists})),a.name=s.fullName,a.teamId=s.currentTeam.id,a.gamesPlayed=n.length,a.goals=o,a.assists=r,a.points=o+r,a.average=n.length>0?a.points/a.gamesPlayed:0,t.forwardsInfo.push(a)}),(function(e){t.loading=!1,t.error=!0}))})),this.defensemenIds.forEach((function(e){var a={name:"",gamesPlayed:0,goals:0,assists:0,points:0,average:0,teamId:0},s=[];s.push(r.a.get(t.peopleEndpoint+e)),s.push(r.a.get(t.peopleEndpoint+e+t.statsSuffix)),Promise.all(s).then((function(e){var s=e[0].data.people[0],n=e[1].data.stats[0].splits.filter((function(e){return new Date(e.date)>=new Date(t.getBeginningMonday())&&new Date(e.date)<=new Date(t.getEndingSunday())})),o=0,r=0;n.forEach((function(t){o+=t.stat.goals,r+=t.stat.assists})),a.name=s.fullName,a.teamId=s.currentTeam.id,a.gamesPlayed=n.length,a.goals=o,a.assists=r=0,a.points=o+r,a.average=n.length>0?a.points/a.gamesPlayed:0,t.defensemenInfo.push(a)}),(function(e){t.loading=!1,t.error=!0}))})),this.goaltendersIds.forEach((function(e){var a={name:"",minutesPlayed:0,goalsAgainst:0,points:0,teamId:0},s=[];s.push(r.a.get(t.peopleEndpoint+e)),s.push(r.a.get(t.peopleEndpoint+e+t.statsSuffix)),Promise.all(s).then((function(e){var s=e[0].data.people[0],n=e[1].data.stats[0].splits.filter((function(e){return new Date(e.date)>=new Date(t.getBeginningMonday())&&new Date(e.date)<=new Date(t.getEndingSunday())}));a.name=s.fullName,a.teamId=s.currentTeam.id,a.minutesPlayed=t.getTotalMinutesPlayed(n);var o=0;n.forEach((function(t){o+=t.stat.goalsAgainst})),a.goalsAgainst=o,a.points=Math.round(a.minutesPlayed/15-a.goalsAgainst),a.points<0&&(a.points=0),t.goaltendersInfo.push(a)}),(function(e){t.loading=!1,t.error=!0}))}))},getTotalMinutesPlayed:function(t){var e=0;return t.forEach((function(t){var a=t.stat.timeOnIce.split(":"),s=parseFloat(a[0])+parseFloat(parseFloat(a[1])/60);e+=s})),e},getBeginningMonday:function(){var t=new Date,e=t.getDay(),a=t.getDate()-e+(0===e?-6:1);return new Date(t.setDate(a)).toJSON().slice(0,10)},getEndingSunday:function(){var t=new Date,e=t.getDay(),a=t.getDate()-(0===e?7:e)+7;return new Date(t.setDate(a)).toJSON().slice(0,10)},getTeamLogo:function(t){return"statics/team-logos/"+t+".gif"}},created:function(){this.getPlayersInfo()}},l=i,d=(a("b60e"),a("2877")),p=a("fe09"),g=Object(d["a"])(l,s,n,!1,null,"f729e570",null);e["default"]=g.exports;g.options.components=Object.assign({QPage:p["e"],QTable:p["h"],QTr:p["m"],QTd:p["j"]},g.options.components||{})},b60e:function(t,e,a){"use strict";var s=a("f0a9"),n=a.n(s);n.a},f0a9:function(t,e,a){}}]);