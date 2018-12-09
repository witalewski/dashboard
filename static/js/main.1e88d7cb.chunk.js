(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports={publisherCurrency:"AUD",summaryChart:{dataType:"custom",data:{revenueAllTime:262.22,revenueThisMonth:100.64,revenueLastMonth:199.09,revenueAverage:131.11,revenueRate:.38}},monthlySales:{dataType:"bar","bar1-label":"Event","bar2-label":"Single/Rental","bar3-label":"Pass","bar4-label":"Subscription","line1-label":"Transactions",data:[{label:"December",bar1:120.65,bar2:null,bar3:6562.67,bar4:null,line1:12455},{label:"January",bar1:243.64,bar2:null,bar3:7165.2,bar4:null,line1:13468},{label:"February",bar1:345.54,bar2:12.4,bar3:46744.11,bar4:null,line1:58446}]},mostPopular:{dataType:"pie",data:[{label:"E946347906_AU",value:990,tooltip:"Brian Foyle Street Stock Memorial\nRevenue: $33"},{label:"E643516498_AU",value:105,tooltip:"World Series Sprintcars -USC - NSW Rnd 8\nRevenue: $1,564.30"},{label:"E657734674_AU",value:456,tooltip:"USC-NSW Rnd 7\nRevenue: $15,347.46"},{label:"E135478956_AU",value:1204,tooltip:"Sprintcar Allstars @ MMS\nRevenue: $35,441.54"}]},paymentMethods:{dataType:"pie",data:[{label:"VISA",value:12125,tooltip:"Revenue: $339,938.46"},{label:"MasterCard",value:7880,tooltip:"Revenue: $220,377.81"},{label:"PayPal",value:8092,tooltip:"Revenue: $221,042.77"},{label:"iDeal",value:15,tooltip:"Revenue: $120.6"}]},devices:{dataType:"pie",data:[{label:"Desktop",value:6013,tooltip:null},{label:"Tablet",value:1577,tooltip:null},{label:"Smartphone",value:1252,tooltip:null},{label:"TV",value:404,tooltip:null}]},transactionTypes:{dataType:"pie",data:[{label:"FREE",value:2044,tooltip:null},{label:"LIVE",value:25582,tooltip:null},{label:"SVOD",value:2105,tooltip:null},{label:"VOD",value:4,tooltip:null}]},revenueDaily:{dataType:"line","x-label":"Date","y-label":"Revenue",data:[{x:"2016-04-14",y:1654.4},{x:"2016-04-15",y:15347.99},{x:"2016-04-16",y:21541.67},{x:"2016-04-17",y:23410.26}]},revenueMonthToMonth:{dataType:"line2","x-label":"Days of Month","y-label":"Previous Month","y2-label":"This Month",data:[{x:1,y:2156.75,y2:34997.48},{x:2,y:4688.6,y2:34997.12},{x:3,y:12045.43,y2:49449.76},{x:4,y:33516.68,y2:62774.3}]},mapChart:{dataType:"map",data:[{label:"AU",tooltip:"Revenue: $56.53\nTransactions: 3"},{label:"US",tooltip:"Revenue: $205.8\nTransactions: 15"},{label:"NL",tooltip:"Revenue: $2,077.65\nTransactions: 164"},{label:"CA",tooltip:"Revenue: $23.44\nTransactions: 2"}]}}},15:function(e,t,a){e.exports=a(26)},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n,l,r,o,i=a(0),c=a.n(i),s=a(2),u=a.n(s),p=a(3),b=a(7),m=a(9),d=a(8),v=a(10),h=a(13),y=a(11),f=a(12),x=(a(22),a(1)),S=a(14),E=(n=function e(){Object(p.a)(this,e),Object(y.a)(this,"chartData",l,this),Object(y.a)(this,"setChartData",r,this),Object(y.a)(this,"loadMockChartData",o,this)},l=Object(f.a)(n.prototype,"chartData",[x.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(f.a)(n.prototype,"setChartData",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.chartData=t}}}),o=Object(f.a)(n.prototype,"loadMockChartData",[x.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.setChartData(S)}}}),n),O=a(4),C=a(5);function T(){var e=Object(O.a)(["\n  width: 100%;\n\n  padding: 24px 36px;\n\n  background: white;\n  border: 1px solid ",";\n\n  .title {\n    font-weight: normal;\n    font-size: 24px;\n  }\n"]);return T=function(){return e},e}var j=C.a.header(T(),"#d4dae8"),D=function(e){var t=e.title;return c.a.createElement(j,null,c.a.createElement("h1",{className:"title"},t))};function R(){var e=Object(O.a)(["\n  margin: ","px;\n  padding: 32px;\n\n  background: white;\n  border: 1px solid ",";\n  border-radius: 5px;\n\n  font-size: 14px;\n\n  .title {\n    font-size: 16px;\n    text-transform: uppercase;\n  }\n"]);return R=function(){return e},e}var N=C.a.section(R(),16,"#d4dae8"),w=function(e){var t=e.className,a=e.title,n=e.children;return c.a.createElement(N,{className:t},c.a.createElement("h2",{className:"title"},a),n)};function M(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .summary-section {\n    flex: 1 3 200px;\n  }\n\n  .monthly-sales-section {\n    flex: 3 1 600px;\n  }\n\n  .most-popular-offers-section,\n  .payment-methods-section,\n  .devices-section {\n      flex: 1 1 200px;\n  }\n"]);return M=function(){return e},e}var g=C.a.main(M()),A=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement("div",{className:"container"},c.a.createElement(w,{title:"Summary",className:"summary-section"},"[Section Content]"),c.a.createElement(w,{title:"Monthly Sales",className:"monthly-sales-section"},"[Section Content]")),c.a.createElement("div",{className:"container"},c.a.createElement(w,{title:"Most popular offers",className:"most-popular-offers-section"},"[Section Content]"),c.a.createElement(w,{title:"Payment methods",className:"payment-methods-section"},"[Section Content]"),c.a.createElement(w,{title:"Devices",className:"devices-section"},"[Section Content]")),c.a.createElement(w,{title:"Revenue",className:"revenue-section"},"[Section Content]"),c.a.createElement(w,{title:"Geography",className:"geography-section"},"[Section Content]"))}}]),t}(i.Component),$=(a(23),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).appState=new E,e}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{appState:this.appState},c.a.createElement("div",{className:"App"},c.a.createElement(D,{title:"Dashboard"}),c.a.createElement(A,null)))}}]),t}(i.Component));u.a.render(c.a.createElement($,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.1e88d7cb.chunk.js.map