(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f148078"],{"54f2":function(e,t,n){"use strict";n("9c24")},"9c24":function(e,t,n){},a134:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{attrs:{title:e.$t("遥控器成品出库"),WMSType:"PCBA",msgs:"true",showMsg:e.showMsg,showSetting:"true",showSettingT:"true"}},[n("div",{staticClass:"offlineTableBox"},[e._v(" "+e._s(e.$t("类型"))+" "),n("van-radio-group",{attrs:{"icon-size":"14px",direction:"horizontal"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("van-radio",{attrs:{name:"1"},on:{click:e.ChangeType}},[e._v(e._s(e.$t("包装")))]),n("van-radio",{attrs:{name:"2"},on:{click:e.ChangeType}},[e._v(e._s(e.$t("库位")))])],1)],1),n("ScanInput",{attrs:{label:e.$t("条码")},on:{submit:e.m_scanner_OnScannerReaded}}),n("el-table",{attrs:{data:e.List,"highlight-current-row":"",size:"mini"}},[n("el-table-column",{attrs:{prop:"BoxId",label:e.$t("包装条码"),sortable:"","min-width":"30%"}}),n("el-table-column",{attrs:{prop:"Lot",label:e.$t("批次"),sortable:"","min-width":"30%"}}),n("el-table-column",{attrs:{prop:"Qty",label:e.$t("数量"),sortable:"","min-width":"30%"}})],1),n("van-button",{staticClass:"BtnButton",attrs:{type:"info"},on:{click:function(t){return e.FinishedOut()}}},[e._v(e._s(e.$t("确认")))])],1)},a=[],s=(n("247c"),n("6a61"),n("9ad1")),u=(n("42e2"),n("7b07")),o=(n("8019"),n("a97c")),c=(n("06bb"),n("28e4")),i=(n("4434"),n("82cf")),p=n("a593"),l=n("9973"),b=n("6168"),f=n("e91a");p["default"].use(i["a"]),p["default"].use(c["a"]),p["default"].use(o["a"]),p["default"].use(u["a"]);var h={components:{Page:l["a"],ScanInput:b["a"]},data:function(){return{Flex:"Flex",value:"",txtPcbBox:"",AppSession:{CurrentUser:{USER_NAME:""}},submitmodel:"1",m_scanner:"",showMsg:"",type:"1",List:[]}},mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{showMessage:function(e){this.showMsg=e},ChangeType:function(){this.List=[]},m_scanner_OnScannerReaded:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:if(t.txtPcbBox=e.trim(),"1"!=t.type){n.next=16;break}return n.next=6,f["f"]({BoxId:e});case 6:if(r=n.sent,r&&0!=r.Items.length){n.next=11;break}return t.showMessage(e+t.$t("不存在！")),t.txtPcbBox="",n.abrupt("return");case 11:t.showMessage(t.$t("扫描到条码：")+e),t.List=[],t.List=r.Items,n.next=27;break;case 16:if("2"!=t.type){n.next=27;break}return n.next=19,f["f"]({Location:e});case 19:if(a=n.sent,a&&0!=a.Items.length){n.next=24;break}return t.showMessage(e+t.$t("不存在！")),t.txtPcbBox="",n.abrupt("return");case 24:t.showMessage(t.$t("扫描到条码：")+e),t.List=[],t.List=a.Items;case 27:case"end":return n.stop()}}),n)})))()},FinishedOut:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s,u,o,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.txtPcbBox.trim(),n){t.next=4;break}return e.showMessage(e.$t("请扫描条码!")),t.abrupt("return");case 4:if(0!=e.List.length){t.next=7;break}return e.showMessage(e.$t("请扫描条码!")),t.abrupt("return");case 7:if(t.prev=7,r=localStorage.getItem("PCBA-WMS"),null!=r&&0!=r||(r="No"),1==r&&(r="Yes"),"1"!=e.type){t.next=18;break}return t.next=14,f["d"](n);case 14:a=t.sent,a&&(e.showMessage(e.$t("出库成功")),e.txtPcbBox="",console.log(a),s="Message:",s+="\r\n Submit WMS: "+r,s+="\r\n Off Type: Package",s+="\r\n Package: "+e.boxReelId,s+="\r\n "+e.$t("Off Result:Operation success!"),e.showMessage(s),e.List=[]),t.next=23;break;case 18:if("2"!=e.type){t.next=23;break}return t.next=21,f["e"](n);case 21:if(u=t.sent,u){for(e.showMessage(e.$t("出库成功")),e.txtPcbBox="",console.log(u),o="Message:",o+="\r\n Submit WMS: "+r,o+="\r\n Off Type: Package",o+="\r\n Package: ",c=0;c<u.length;c++)i=u[c],o+="  "+i.BoxId;o+="\r\n "+e.$t("Off Result:Operation success!"),e.showMessage(o),e.List=[]}case 23:t.next=29;break;case 25:return t.prev=25,t.t0=t["catch"](7),e.showMessage(t.t0),t.abrupt("return");case 29:case"end":return t.stop()}}),t,null,[[7,25]])})))()},txtBarcode_KeyDown:function(e){13==e.KeyCode&&this.FinishedOut()}}},d=h,m=(n("54f2"),n("5d22")),g=Object(m["a"])(d,r,a,!1,null,null,null);t["default"]=g.exports},e91a:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"g",(function(){return x}));n("6a61");var r=n("9ad1"),a=n("b775"),s=n("3753");function u(e){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryPackageApi/GetAll",null),{method:"POST",body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function c(e,t){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/InStore",{cellCode:t,boxId:n}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/OutStoreByCellCode",{cellCode:t}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/OutStore",{boxId:t}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e,t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/MoveStore",{cellCode:t,boxId:n}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/CancelStore",{boxId:t}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function x(e,t){return w.apply(this,arguments)}function w(){return w=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(s["a"])("Customize/CSRWIPInventoryApi/PartAutoRecommendationStorage",{partnumber:t,boxId:n}),{method:"POST",body:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}}}]);