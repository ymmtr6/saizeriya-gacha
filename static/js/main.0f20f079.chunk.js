(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,n,o){"use strict";o.r(n);var a=o(13),c=o.n(a),t=o(59),l=o.n(t),r=(o(71),o(72),o(32)),i=o(19),s=o(37),u=o(17),d=o(64),m=o(3),h=o(4),p=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:81456813180;Object(m.a)(this,e),this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=1145141919,this.y=334,this.z=810,this.w=n}return Object(h.a)(e,[{key:"next",value:function(){var e=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^e^e>>>8}},{key:"nextInt",value:function(e,n){return e+Math.abs(this.next())%(n+1-e)}}]),e}(),f={choise:function(e,n,o,a){for(var c,t=[],l=Object(u.a)(e);c=t.map(function(e){return e.price}).reduce(function(e,n){return e+n},0),!(0===(l=Object(u.a)(e).filter(function(e){return e.price<=n-c})).length||c>.9*n);)t.push(l.splice(o.nextInt(0,l.length-1),1)[0]);return t}},S=function(e){var n=Object(a.useState)(e.open),o=Object(s.a)(n,2),t=o[0],l=o[1];return Object(a.useEffect)(function(){l(e.open)},[e.open]),c.a.createElement(i.Modal,{isOpen:t},c.a.createElement(i.Icon,{icon:"md-spinner",size:{default:128},spin:!0}),c.a.createElement("p",null,"Loading..."),e.showClose&&c.a.createElement(i.Button,{onClick:function(){return l(!1)}},"Close"))},O=function(e,n,o){e.navigator.pushPage({component:n,title:o,props:Object(r.a)({},e)})},y=function e(n){var o=Object(a.useState)([]),t=Object(s.a)(o,2),l=t[0],u=t[1],m=Object(a.useMemo)(function(){return l&&0!==l.length},[l]),h=function(e){setTimeout(function(){var o=function(e,n,o){var a=new p(n),c=d.filter(function(n){return n.price<=e});return f.choise(c,e,a)}(n.balance,e);u(o)},1e3)};return Object(a.useEffect)(function(){h(n.seed)},[]),c.a.createElement(i.Page,{key:"page2"},c.a.createElement(i.Toolbar,null,c.a.createElement("div",{className:"left"},c.a.createElement(i.BackButton,null,"Back")),c.a.createElement("div",{className:"center"},"\u30ac\u30c1\u30e3\u7d50\u679c"),c.a.createElement("div",{className:"right"},c.a.createElement(i.ToolbarButton,{onClick:function(){O(Object(r.a)({},n,{balance:n.balance}),e,"DetailPage")}},c.a.createElement(i.Icon,{icon:"fa-refresh"})))),c.a.createElement("div",{className:"Under-toolbar"},c.a.createElement("section",null,c.a.createElement(i.List,{dataSource:l,renderHeader:function(){var e=m&&l.map(function(e){return e.price}).reduce(function(e,n){return e+n});return c.a.createElement(i.ListHeader,null,e?"\u7dcf\u984d".concat(e.toLocaleString(),"\u5186"):"","(\u4e88\u7b97",n.balance.toLocaleString(),"\u5186)")},renderRow:function(e,n){return c.a.createElement(i.ListItem,{key:"item_".concat(n),modifier:n===l.length-1?"longdivider":null},c.a.createElement("div",{className:"left"},"".concat(e.name)),c.a.createElement("div",{className:"right"},"".concat(e.price.toLocaleString(),"\u5186")))}}))),!m&&c.a.createElement(S,{open:!0}))},g=function(e){var n=Object(a.useState)(e.balance||1e3),o=Object(s.a)(n,2),t=(o[0],o[1],Math.floor(1e5*Math.random())),l=function(e){return c.a.createElement(i.Button,{key:"".concat(e,"-yen-button"),modifier:"large",onClick:function(){return u(e)}},c.a.createElement("div",null,"".concat(e,"\u5186\u30ac\u30c1\u30e3")))},u=function(n){O(Object(r.a)({},e,{balance:n,seed:t}),y,"DetailPage")};return Object(a.useEffect)(function(){}),c.a.createElement(i.Page,{key:"page1"},c.a.createElement(i.Toolbar,null,c.a.createElement("div",{className:"center"},"\u30b5\u30a4\u30bc\u30ac\u30c1\u30e3")),c.a.createElement("div",{className:"Under-toolbar"},c.a.createElement("section",null,"// \u3053\u3053\u306b\u8aac\u660e\u304c\u5165\u308b"),c.a.createElement("section",{className:"row-col-m2"},c.a.createElement(i.Row,null,c.a.createElement(i.Col,null,l(500)),c.a.createElement(i.Col,null,l(1e3))),c.a.createElement(i.Row,null,c.a.createElement(i.Col,null,l(1500)),c.a.createElement(i.Col,null,l(2e3))))))},v=function(e,n){var o=e.props||{};return o.navigator=n,o.key=e.title,c.a.createElement(e.component,o)},I=function(e){return c.a.createElement(i.Navigator,{renderPage:v,initialRoute:{component:g,title:"MainPage",props:Object(r.a)({},e)},animationOptions:{delay:.1,duration:.4}})};var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"frame"},c.a.createElement("div",{className:"frame-img"})),c.a.createElement("header",{className:"App-header main"},c.a.createElement(I,null)))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,127)).then(function(n){var o=n.getCLS,a=n.getFID,c=n.getFCP,t=n.getLCP,l=n.getTTFB;o(e),a(e),c(e),t(e),l(e)})};o(118),o(119),o(57);l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null))),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");b?(function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(o){var a=o.headers.get("content-type");404===o.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):w(n,e)})}}(),N()},64:function(e){e.exports=[{orderId:"301",name:"\u3084\u307f\u3064\u304d\u30b9\u30d1\u30a4\u30b9(20g)",price:300,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"306",name:"\u5510\u8f9b\u5b50\u30d5\u30ec\u30fc\u30af\u5bb9\u5668\u4ed8\u304d(40g)",price:500,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"307",name:"\u30db\u30c3\u30c8\u30bd\u30fc\u30b9\u5bb9\u5668\u4ed8\u304d(200g)",price:500,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"303",name:"\u30b5\u30a4\u30bc\u30ea\u30e4\u30c9\u30ec\u30c3\u30b7\u30f3\u30b0(500ml)",price:500,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"304",name:"\u30a8\u30af\u30b9\u30c8\u30e9\u30fb\u30d0\u30fc\u30b8\u30f3\u30fb\u30aa\u30ea\u30fc\u30d6\u30aa\u30a4\u30eb(500ml)",price:850,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"101",name:"\u51b7\u51cd\u8f9b\u5473\u30c1\u30ad\u30f3(1.5kg)",price:2200,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"107",name:"\u51b7\u51cd\u30dd\u30c3\u30d7\u30b3\u30fc\u30f3\u30b7\u30e5\u30ea\u30f3\u30d7(500g)",price:1500,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"92",name:"\u51b7\u51cd\u30a4\u30bf\u30ea\u30a2\u30f3\u30d7\u30ea\u30f3(1\u500b)",price:240,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"91",name:"\u51b7\u51cd\u30c6\u30a3\u30e9\u30df\u30b9\u30af\u30e9\u30b7\u30b3(500g)",price:1760,cal:"",sodium:"",alcoholic:!1,setOnly:!1,counterSales:!0},{orderId:"SA06",name:"\u30c1\u30ad\u30f3\u306e\u30b7\u30fc\u30b6\u30fc\u30b5\u30e9\u30c0",price:350,cal:"205",sodium:"1.3",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA56",name:"\u30c1\u30ad\u30f3\u306e\u30b7\u30fc\u30b6\u30fc\u30b5\u30e9\u30c0 L\u30b5\u30a4\u30ba",price:500,cal:"308",sodium:"1.9",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA02",name:"\u5c0f\u30a8\u30d3\u306e\u30b5\u30e9\u30c0",price:350,cal:"127",sodium:"1.4",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA52",name:"\u5c0f\u30a8\u30d3\u306e\u30b5\u30e9\u30c0 L\u30b5\u30a4\u30ba",price:500,cal:"191",sodium:"2.2",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA04",name:"\u30ac\u30fc\u30c7\u30f3\u30b5\u30e9\u30c0",price:350,cal:"173",sodium:"0.7",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA54",name:"\u30ac\u30fc\u30c7\u30f3\u30b5\u30e9\u30c0 L\u30b5\u30a4\u30ba",price:500,cal:"259",sodium:"1.1",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"TP05",name:"\u30aa\u30ea\u30fc\u30d6\u30a2\u30f3\u30c1\u30e7\u30d3\u30da\u30fc\u30b9\u30c8",price:100,cal:"97",sodium:"0.7",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA12",name:"\u30aa\u30ea\u30fc\u30d6\u30a2\u30f3\u30c1\u30e7\u30d3\u306e\u30ac\u30fc\u30c7\u30f3\u30b5\u30e9\u30c0",price:450,cal:"151",sodium:"0.9",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SA62",name:"\u30aa\u30ea\u30fc\u30d6\u30a2\u30f3\u30c1\u30e7\u30d3\u306e\u30ac\u30fc\u30c7\u30f3\u30b5\u30e9\u30c0 L\u30b5\u30a4\u30ba",price:600,cal:"178",sodium:"1.1",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SU01",name:"\u30b3\u30fc\u30f3\u30af\u30ea\u30fc\u30e0\u30b9\u30fc\u30d7",price:150,cal:"146",sodium:"1.1",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"SU03",name:"\u51b7\u305f\u3044\u30d1\u30f3\u30d7\u30ad\u30f3\u30b9\u30fc\u30d7",price:150,cal:"110",sodium:"0.9",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"RP08",name:"\u30df\u30cb\u30d5\u30a3\u30bb\u30eb",price:150,cal:"189",sodium:"1.0",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"RP09",name:"\u30ac\u30fc\u30ea\u30c3\u30af\u30c8\u30fc\u30b9\u30c8",price:200,cal:"245",sodium:"1.1",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"RP06",name:"\u30d7\u30c1\u30d5\u30a9\u30c3\u30ab",price:150,cal:"214",sodium:"0.8",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"RP05",name:"\u30bb\u30c3\u30c8\u30d7\u30c1\u30d5\u30a9\u30c3\u30ab",price:100,cal:"107",sodium:"0.4",alcoholic:!1,setOnly:!0,counterSales:!1},{orderId:"RP04",name:"\u30b7\u30ca\u30e2\u30f3\u30d7\u30c1\u30d5\u30a9\u30c3\u30ab",price:200,cal:"246",sodium:"0.8",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"DB01",name:"\u30bb\u30c3\u30c8\u30c9\u30ea\u30f3\u30af\u30d0\u30fc",price:200,cal:"",sodium:"",alcoholic:!1,setOnly:!0,counterSales:!1},{orderId:"AA13",name:"\u723d\u3084\u304b\u306b\u3093\u3058\u3093\u30b5\u30e9\u30c0",price:200,cal:"93",sodium:"0.9",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"AA20",name:"\u30d0\u30c3\u30d5\u30a1\u30ed\u30fc\u30e2\u30c3\u30c4\u30a1\u30ec\u30e9",price:300,cal:"209",sodium:"0.5",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"AA70",name:"\u30d0\u30c3\u30d5\u30a1\u30ed\u30fc\u30e2\u30c3\u30c4\u30a1\u30ec\u30e9 W\u30b5\u30a4\u30ba",price:600,cal:"418",sodium:"1.0",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"AA16",name:"\u30d7\u30ed\u30b7\u30e5\u30fc\u30c8",price:400,cal:"55",sodium:"1.4",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"AA66",name:"\u30d7\u30ed\u30b7\u30e5\u30fc\u30c8 W\u30b5\u30a4\u30ba",price:800,cal:"110",sodium:"2.8",alcoholic:!1,setOnly:!1,counterSales:!1},{orderId:"WN01",name:"\u30b0\u30e9\u30b9\u30ef\u30a4\u30f3 \u8d64",price:100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN02",name:"\u30b0\u30e9\u30b9\u30ef\u30a4\u30f3 \u767d",price:100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN03",name:"\u30c7\u30ab\u30f3\u30bf \u8d64(250ml)",price:200,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN04",name:"\u30c7\u30ab\u30f3\u30bf \u767d(250ml)",price:200,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN05",name:"\u30c7\u30ab\u30f3\u30bf \u8d64(500ml)",price:400,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN06",name:"\u30c7\u30ab\u30f3\u30bf \u767d(500ml)",price:400,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN07",name:"\u30de\u30b0\u30ca\u30e0 \u8d64(1500ml)",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN08",name:"\u30de\u30b0\u30ca\u30e0 \u767d(1500ml)",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN12",name:"\u30e9\u30f3\u30d6\u30eb\u30b9\u30b3 \u30ed\u30bc\u30fb\u7518\u53e3",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN13",name:"\u30c9\u30f3\u30e9\u30d5\u30a1\u30a8\u30ed \u767d\u30fb\u8f9b\u53e3",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN14",name:"\u30e9\u30f3\u30d6\u30eb\u30b9\u30b3\u30bb\u30c3\u30b3 \u8d64\u30fb\u8f9b\u53e3",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN15",name:"\u30d9\u30eb\u30c7\u30c3\u30ad\u30aa \u8f9b\u53e3\u30fb\u4e2d",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN16",name:"\u30ad\u30e3\u30f3\u30c6\u30a3 \u8f9b\u53e3\u30fb\u3084\u3084\u91cd\u3044",price:1100,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"WN19",name:"\u30ad\u30e3\u30f3\u30c6\u30a3\u30eb\u30d5\u30a3\u30ca\u30ea\u30bc\u30eb\u30d0 \u8f9b\u53e3\u30fb\u91cd\u3044",price:2200,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1},{orderId:"BR05",name:"\u30e9\u30b3\u30f3\u30d6\u30ea\u30c3\u30b3\u30e9(45ml)",price:300,cal:"",sodium:"",alcoholic:!0,setOnly:!1,counterSales:!1}]},65:function(e,n,o){e.exports=o(120)},71:function(e,n,o){},72:function(e,n,o){}},[[65,1,2]]]);
//# sourceMappingURL=main.0f20f079.chunk.js.map