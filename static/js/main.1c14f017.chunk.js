(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e){e.exports={publisherCurrency:"AUD",summaryChart:{dataType:"custom",data:{revenueAllTime:262.22,revenueThisMonth:100.64,revenueLastMonth:199.09,revenueAverage:131.11,revenueRate:.38}},monthlySales:{dataType:"bar","bar1-label":"Event","bar2-label":"Single/Rental","bar3-label":"Pass","bar4-label":"Subscription","line1-label":"Transactions",data:[{label:"December",bar1:120.65,bar2:null,bar3:6562.67,bar4:null,line1:12455},{label:"January",bar1:243.64,bar2:null,bar3:7165.2,bar4:null,line1:13468},{label:"February",bar1:345.54,bar2:12.4,bar3:46744.11,bar4:null,line1:58446}]},mostPopular:{dataType:"pie",data:[{label:"E946347906_AU",value:990,tooltip:"Brian Foyle Street Stock Memorial\nRevenue: $33"},{label:"E643516498_AU",value:105,tooltip:"World Series Sprintcars -USC - NSW Rnd 8\nRevenue: $1,564.30"},{label:"E657734674_AU",value:456,tooltip:"USC-NSW Rnd 7\nRevenue: $15,347.46"},{label:"E135478956_AU",value:1204,tooltip:"Sprintcar Allstars @ MMS\nRevenue: $35,441.54"}]},paymentMethods:{dataType:"pie",data:[{label:"VISA",value:12125,tooltip:"Revenue: $339,938.46"},{label:"MasterCard",value:7880,tooltip:"Revenue: $220,377.81"},{label:"PayPal",value:8092,tooltip:"Revenue: $221,042.77"},{label:"iDeal",value:15,tooltip:"Revenue: $120.6"}]},devices:{dataType:"pie",data:[{label:"Desktop",value:6013,tooltip:null},{label:"Tablet",value:1577,tooltip:null},{label:"Smartphone",value:1252,tooltip:null},{label:"TV",value:404,tooltip:null}]},transactionTypes:{dataType:"pie",data:[{label:"FREE",value:2044,tooltip:null},{label:"LIVE",value:25582,tooltip:null},{label:"SVOD",value:2105,tooltip:null},{label:"VOD",value:4,tooltip:null}]},revenueDaily:{dataType:"line","x-label":"Date","y-label":"Revenue",data:[{x:"2016-04-14",y:1654.4},{x:"2016-04-15",y:15347.99},{x:"2016-04-16",y:21541.67},{x:"2016-04-17",y:23410.26}]},revenueMonthToMonth:{dataType:"line2","x-label":"Days of Month","y-label":"Previous Month","y2-label":"This Month",data:[{x:1,y:2156.75,y2:34997.48},{x:2,y:4688.6,y2:34997.12},{x:3,y:12045.43,y2:49449.76},{x:4,y:33516.68,y2:62774.3}]},mapChart:{dataType:"map",data:[{label:"AU",tooltip:"Revenue: $56.53\nTransactions: 3"},{label:"US",tooltip:"Revenue: $205.8\nTransactions: 15"},{label:"NL",tooltip:"Revenue: $2,077.65\nTransactions: 164"},{label:"CA",tooltip:"Revenue: $23.44\nTransactions: 2"}]}}},143:function(e,t,a){e.exports=a(281)},278:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n,l,r,o,i=a(1),c=a.n(i),u=a(31),s=a.n(u),m=a(35),p=a(45),d=a(50),b=a(46),h=a(51),M=a(56),v=a(78),f=a(79),E=(a(148),a(14)),y=a(128),A=(n=function e(){Object(m.a)(this,e),Object(v.a)(this,"chartData",l,this),Object(v.a)(this,"setChartData",r,this),Object(v.a)(this,"loadMockChartData",o,this)},l=Object(f.a)(n.prototype,"chartData",[E.k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(f.a)(n.prototype,"setChartData",[E.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.chartData=t}}}),o=Object(f.a)(n.prototype,"loadMockChartData",[E.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.setChartData(y)}}}),n),N=a(20),S=a(21),R=["#5db990","#864ba5","#a7e17a","#558ca0","#829ac0"];function T(){var e=Object(N.a)(["\n  width: 100%;\n\n  padding: 24px 36px;\n\n  background: white;\n  border: 1px solid ",";\n\n  .title {\n    font-weight: normal;\n    font-size: 24px;\n  }\n"]);return T=function(){return e},e}var O=S.a.header(T(),"#d4dae8"),C=function(e){var t=e.title;return c.a.createElement(O,null,c.a.createElement("h1",{className:"title"},t))},G=a(284),D=a(75),L=a(76),B=a(285),g=a(282),I=a(77),x=a(74),U=a(36),K=a(40),P=function(e,t){return t.map(function(t){return Object.keys(t).reduce(function(a,n){return Object(K.a)({},a,Object(U.a)({},e[n],t[n]))},{})})},j=function(e){var t=e.data,a=e.labelMap,n=P(a,t);return c.a.createElement(G.a,{width:600,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(D.a,{dataKey:Object.keys(t[0])[0]}),c.a.createElement(L.a,null),c.a.createElement(B.a,{strokeDasharray:"3 3"}),c.a.createElement(g.a,null),c.a.createElement(I.a,null),Object.keys(n[0]).slice(1).map(function(e,t){return c.a.createElement(x.a,{key:e,type:"monotone",dataKey:e,stroke:R[t%R.length]})}))},V=a(288),k=a(274),F=a(55),H=function(e){var t=e.className,a=e.data,n=a.reduce(function(e,t){return e+t.value},0),l=a.map(function(e){var t=e.value;return{name:e.label,value:Math.round(100*t/n)}});return c.a.createElement(V.a,{width:350,height:250},c.a.createElement(k.a,{data:l,cx:120,cy:120,innerRadius:40,outerRadius:80,dataKey:"value",label:!0,onAnimationEnd:function(e){return function(){for(var t=document.querySelectorAll(".".concat(e," .recharts-pie-label-text tspan")),a=0;a<t.length;a++)t[a].textContent="".concat(t[a].textContent,"%")}}(t)},l.map(function(e,t){var a=e.value;return c.a.createElement(F.a,{key:a,fill:R[t%R.length]})})),c.a.createElement(g.a,null),c.a.createElement(I.a,{width:200,align:"right",layout:"vertical",wrapperStyle:{top:80,left:260}}))},w=a(287),Z=a(275),W=function(e){var t=e.data,a=e.labelMap,n=P(a,t),l=function(e,t){var a=Object.values(e).filter(function(e){return"label"!==e}).map(function(e){return{key:e,avgValue:t.reduce(function(t,a){return t+a[e]},0)/t.length}}).sort(function(e,t){return e.avgValue-t.avgValue}),n=Math.floor(a.length/2),l=a.slice(0,n);if(a.length%2!==0){var r=a[n];Math.abs(r.avgValue-a[n-1])<Math.abs(r.avgValue-a[n+1])&&l.push(r)}return l.map(function(e){return e.key})}(a,n);return c.a.createElement(w.a,{width:600,height:400,data:n,margin:{top:20,right:20,bottom:20,left:20}},c.a.createElement(B.a,{stroke:"#f5f5f5"}),c.a.createElement(D.a,{dataKey:Object.keys(t[0])[0]}),c.a.createElement(L.a,{yAxisId:"lower"}),c.a.createElement(L.a,{yAxisId:"upper",orientation:"right"}),c.a.createElement(g.a,null),c.a.createElement(I.a,null),Object.keys(t[0]).filter(function(e){return e.match(/bar/)}).map(function(e,t){return c.a.createElement(Z.a,{key:a[e],dataKey:a[e],barSize:20,fill:R[t%R.length],yAxisId:l.indexOf(a[e])>-1?"lower":"upper"})}),Object.keys(t[0]).filter(function(e){return e.match(/line/)}).map(function(e,t){return c.a.createElement(x.a,{key:a[e],type:"monotone",dataKey:a[e],stroke:R[t%R.length],yAxisId:l.indexOf(a[e])>-1?"lower":"upper"})}))},Y={AF:"AFG",AX:"ALA",AL:"ALB",DZ:"DZA",AS:"ASM",AD:"AND",AO:"AGO",AI:"AIA",AQ:"ATA",AG:"ATG",AR:"ARG",AM:"ARM",AW:"ABW",AU:"AUS",AT:"AUT",AZ:"AZE",BS:"BHS",BH:"BHR",BD:"BGD",BB:"BRB",BY:"BLR",BE:"BEL",BZ:"BLZ",BJ:"BEN",BM:"BMU",BT:"BTN",BO:"BOL",BA:"BIH",BW:"BWA",BV:"BVT",BR:"BRA",VG:"VGB",IO:"IOT",BN:"BRN",BG:"BGR",BF:"BFA",BI:"BDI",KH:"KHM",CM:"CMR",CA:"CAN",CV:"CPV",KY:"CYM",CF:"CAF",TD:"TCD",CL:"CHL",CN:"CHN",HK:"\nHKG",MO:"MAC",CX:"CXR",CC:"CCK",CO:"COL",KM:"COM",CG:"COG",CD:"COD",CK:"COK",CR:"CRI",CI:"CIV",HR:"HRV",CU:"CUB",CY:"CYP",CZ:"CZE",DK:"DNK",DJ:"DJI",DM:"DMA",DO:"DOM",EC:"ECU",EG:"EGY",SV:"SLV",GQ:"GNQ",ER:"ERI",EE:"EST",ET:"ETH",FK:"FLK",FO:"\nFRO",FJ:"FJI",FI:"FIN",FR:"FRA",GF:"GUF",PF:"PYF",TF:"ATF",GA:"GAB",GM:"GMB",GE:"GEO",DE:"DEU",GH:"GHA",GI:"GIB",GR:"GRC",GL:"GRL",GD:"GRD",GP:"GLP",GU:"GUM",GT:"GTM",GG:"GGY",GN:"GIN",GW:"GNB",GY:"GUY",HT:"HTI",HM:"HMD",VA:"VAT",HN:"HND",HU:"HUN",IS:"ISL",IN:"IND",ID:"IDN",IR:"IRN",IQ:"IRQ",IE:"IRL",IM:"IMN",IL:"ISR",IT:"ITA",JM:"JAM",JP:"JPN",JE:"JEY",JO:"JOR",KZ:"KAZ",KE:"KEN",KI:"KIR",KP:"PRK",KR:"KOR",KW:"KWT",KG:"KGZ",LA:"LAO",LV:"LVA",LB:"LBN",LS:"LSO",LR:"LBR",LY:"LBY",LI:"LIE",LT:"LTU",LU:"LUX",MK:"MKD",MG:"MDG",MW:"MWI",MY:"MYS",MV:"MDV",ML:"MLI",MT:"MLT",MH:"MHL",MQ:"MTQ",MR:"MRT",MU:"MUS",YT:"MYT",MX:"MEX",FM:"FSM",MD:"MDA",MC:"MCO",MN:"MNG",ME:"MNE",MS:"MSR",MA:"MAR",MZ:"MOZ",MM:"MMR",NA:"NAM",NR:"NRU",NP:"NPL",NL:"NLD",AN:"ANT",NC:"NCL",NZ:"NZL",NI:"NIC",NE:"NER",NG:"NGA",NU:"NIU",NF:"NFK",MP:"MNP",NO:"NOR",OM:"OMN",PK:"PAK",PW:"PLW",PS:"\nPSE",PA:"PAN",PG:"PNG",PY:"PRY",PE:"PER",PH:"PHL",PN:"PCN",PL:"POL",PT:"PRT",PR:"PRI",QA:"QAT",RE:"REU",RO:"ROU",RU:"RUS",RW:"RWA",BL:"BLM",SH:"SHN",KN:"KNA",LC:"LCA",MF:"MAF",PM:"SPM",VC:"VCT",WS:"WSM",SM:"SMR",ST:"STP",SA:"SAU",SN:"SEN",RS:"SRB",SC:"SYC",SL:"SLE",SG:"SGP",SK:"SVK",SI:"SVN",SB:"SLB",SO:"SOM",ZA:"ZAF",GS:"SGS",SS:"SSD",ES:"ESP",LK:"LKA",SD:"SDN",SR:"SUR",SJ:"SJM",SZ:"SWZ",SE:"SWE",CH:"CHE",SY:"SYR",TW:"TWN",TJ:"TJK",TZ:"TZA",TH:"THA",TL:"TLS",TG:"TGO",TK:"TKL",TO:"TON",TT:"TTO",TN:"TUN",TR:"TUR",TM:"TKM",TC:"TCA",TV:"TUV",UG:"UGA",UA:"UKR",AE:"ARE",GB:"GBR",US:"USA",UM:"UMI",UY:"URY",UZ:"UZB",VU:"VUT",VE:"VEN",VN:"VNM",VI:"VIR",WF:"WLF",EH:"ESH",YE:"YEM",ZM:"ZMB",ZW:"ZWE"},J=a(142);function _(){var e=Object(N.a)(["\n  min-width: 800px;\n  min-height: 400px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  .map-container {\n    position: relative;\n    flex: 1 1 100%;\n  }\n"]);return _=function(){return e},e}var $=S.a.div(_()),z=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){"undefined"===typeof jest&&new J({element:document.getElementsByClassName("map-container")[0],fills:{MARKED:R[0],defaultFill:"#dddddd"},data:this.props.data.reduce(function(e,t){var a=t.label,n=t.tooltip;return Object(K.a)({},e,Object(U.a)({},Y[a],{fillKey:"MARKED",tooltip:n}))},{}),geographyConfig:{highlightFillColor:R[1],popupTemplate:function(e,t){return['<div class="hoverinfo"><strong>',e.properties.name,"</strong><br/>",t.tooltip.replace(/\n/g,"<br/>"),"</div>"].join("")}}})}},{key:"render",value:function(){return c.a.createElement($,null,c.a.createElement("div",{className:"map-container"}))}}]),t}(i.Component),Q=a(286);function X(){var e=Object(N.a)(["\n  position: relative;\n\n  width: 100%;\n  height: 32px;\n\n  margin: 8px;\n\n  background: ",";\n\n  .bar {\n    height: 100%;\n    background: ",";\n  }\n\n  .label {\n    position: absolute;\n    top: 50%;\n    font-size: 12px;\n    color: white;\n    transform: translate(calc(-100% - 12px), -50%);\n  }\n\n  .label--outside {\n    color: ",";\n    transform: translate(8px, -50%);\n  }\n"]);return X=function(){return e},e}var q=S.a.div(X(),"#eef7f4",R[0],"#6b7783"),ee=function(e){var t=e.percent;return c.a.createElement(q,null,c.a.createElement("div",{className:"bar",style:{width:"".concat(t,"%")}}),c.a.createElement("div",{className:"label ".concat(t<5&&"label--outside"),style:{left:"".concat(t,"%")}},t,"%"))};function te(){var e=Object(N.a)(["\n  min-width: 200px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return te=function(){return e},e}var ae=S.a.div(te()),ne=function(e){var t=e.data;return c.a.createElement(ae,null,c.a.createElement("div",{className:"current-month-summary__label"},"In ",Object(Q.a)(new Date,"MMMM")," you did"),c.a.createElement("div",{className:"current-month-summary__sum"},"$",t.revenueThisMonth),c.a.createElement("div",{className:"comparison"},c.a.createElement("div",{className:"comparison__label"},"Last month you did:"),c.a.createElement("div",{className:"comparison__sum"},"$",t.revenueLastMonth)),c.a.createElement("div",{className:"comparison"},c.a.createElement("div",{className:"comparison__label"},"Average monthly revenue:"),c.a.createElement("div",{className:"comparison__sum"},"$",t.revenueAverage)),c.a.createElement(ee,{percent:100*t.revenueRate}),c.a.createElement("div",{className:"percent-of-average-label"},"of your monthly average revenue"))},le=function(e){return Object(K.a)({label:"label"},Object.keys(e).filter(function(e){return e.match(/-label/)}).reduce(function(t,a){return Object(K.a)({},t,Object(U.a)({},a.split("-")[0],e[a]))},{}))};function re(){var e=Object(N.a)(["\n  margin: ","px;\n  padding: 32px;\n\n  background: white;\n  border: 1px solid ",";\n  border-radius: 5px;\n\n  font-size: 14px;\n\n  .title {\n    font-size: 16px;\n    text-transform: uppercase;\n  }\n\n  .section-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return re=function(){return e},e}var oe=S.a.section(re(),16,"#d4dae8"),ie=function(e){var t=e.className,a=e.source,n=e.title,l=function(e,t){var a=e.dataType,n=e.data;switch(a){case"pie":return c.a.createElement(H,{className:t,data:n});case"line":case"line2":return c.a.createElement(j,{data:n,labelMap:le(e)});case"bar":return c.a.createElement(W,{data:n,labelMap:le(e)});case"map":return c.a.createElement(z,{data:n});case"custom":return c.a.createElement(ne,{data:n});default:throw new Error("Unsupported data type: ".concat(a))}}(a,t);return c.a.createElement(oe,{className:t},c.a.createElement("h2",{className:"title"},n),c.a.createElement("div",{className:"section-content"},l))};function ce(){var e=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .summary-section {\n    flex: 1 0 calc(25% - ","px);\n  }\n\n  .monthly-sales-section {\n    flex: 3 0 calc(75% - ","px);\n  }\n\n  .most-popular-offers-section,\n  .payment-methods-section,\n  .devices-section {\n    flex: 1 0 calc(33% - ","px);\n  }\n\n  .revenue-section,\n  .geography-section {\n    flex: 0 0 calc(100% - ","px);\n  }\n"]);return ce=function(){return e},e}var ue=S.a.main(ce(),32,32,32,32),se=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={initialized:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.state.initialized||(this.props.loadMockChartData(),this.setState({initialized:!0}))}},{key:"render",value:function(){var e=this.props.chartData;return e?c.a.createElement(ue,null,c.a.createElement(ie,{className:"summary-section",title:"Summary",source:e.summaryChart}),c.a.createElement(ie,{title:"Monthly Sales",className:"monthly-sales-section",source:e.monthlySales}),c.a.createElement(ie,{title:"Most Popular Offers",className:"most-popular-offers-section",source:e.mostPopular}),c.a.createElement(ie,{title:"Payment Methods",className:"payment-methods-section",source:e.paymentMethods}),c.a.createElement(ie,{title:"Devices",className:"devices-section",source:e.devices}),c.a.createElement(ie,{title:"Revenue This Month vs Revenue Previous Month",className:"revenue-section",source:e.revenueMonthToMonth}),c.a.createElement(ie,{title:"Geography",className:"geography-section",source:e.mapChart})):null}}]),t}(i.Component),me=Object(M.b)(function(e){var t=e.appState;return{chartData:t.chartData,loadMockChartData:t.loadMockChartData}})(Object(M.c)(se)),pe=(a(278),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).appState=new A,e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(M.a,{appState:this.appState},c.a.createElement("div",{className:"App"},c.a.createElement(C,{title:"Dashboard"}),c.a.createElement(me,null)))}}]),t}(i.Component));s.a.render(c.a.createElement(pe,null),document.getElementById("root"))}},[[143,2,1]]]);
//# sourceMappingURL=main.1c14f017.chunk.js.map