(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48134365"],{"0dfe":function(e,t,n){"use strict";n("8a52")},4176:function(e,t,n){"use strict";n("8234")},"521f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messages,expression:"messages"}],ref:"messageBox",staticClass:"lonelyMeg",attrs:{rows:"11",readonly:""},domProps:{value:e.messages},on:{input:function(t){t.target.composing||(e.messages=t.target.value)}}})},a=[],u=(n("425f"),{props:{showMsg:{type:String,require:!1,default:""}},data:function(){return{messages:"",count:0}},methods:{showMessage:function(e){if(null!=e&&""!=e&&void 0!=e){this.count>=50?(this.messages=" "+e+"\r\n",this.count=1):this.messages+=" "+e+"\r\n";var t=this;setTimeout((function(){t.$refs.messageBox.scrollTop=t.$refs.messageBox.scrollHeight})),this.count++}}},mounted:function(){var e="User: "+JSON.parse(localStorage.getItem("profile")).name;this.showMessage(e)},updated:function(){}}),i=u,c=n("5d22"),s=Object(c["a"])(i,r,a,!1,null,null,null);t["a"]=s.exports},"5c5a":function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p}));n("af60"),n("cc16"),n("a8aa"),n("7d72"),n("c12e"),n("f775"),n("b66b"),n("48d1"),n("5faa"),n("ec76");function r(e){var t="",n=[];return n=e.split("*"),n.map((function(e,t){n[t]=e.trim()})),n.length>=6&&(t=n[5]),t}function a(e){var t=0,n=[];return n=e.split("*"),n.map((function(e,t){n[t]=e.trim()})),n.length>=6&&(t=Number(n[1])),t}function u(e){var t="",n=[];return n=e.split("*"),n.map((function(e,t){n[t]=e.trim()})),n.length>=6&&(t=n[0]),t}function i(e){var t=e;return-1!=e.indexOf("@")&&e.split("@").length>=2&&(t=e.split("@")[1]),t}function c(e){for(var t="",n=e.split("*"),r=0;r<n.length;r++)n[r]=n[r].trim();return n.length>=6&&(t=n[0].replace(/\+/g,"").replace(/-/g,"")),t}var s=n("31d9");function o(e,t,n,r){return"X3S"==e||"X2S"==e?(s(r).endsWith("T")||(r=n%2==1?1:2,2==r&&(n-=1)),"L".concat(t,"-").concat(n,"-").concat(r)):"L".concat(t,"-").concat(n,"-").concat(r)}function l(e,t){var n=[],r=e.split("-"),a=0;return"AX501"==t?["E"+s(r[0].replace("L","")).padLeft(2,"0").s+s(r[1]).padLeft(2,"0").s]:t.startsWith("NPM")?["POS"+s(r[1]).padLeft(3,"0").s+"$"+r[2]]:(s(r[2]).endsWith("T")?n.push("POS001$"+r[2]):(a=parseInt(r[1]),"2"==r[2]&&(n.push("POS"+s(a+"").padLeft(3,"0").s+"$2"),a+=1),n.push("POS"+s(a+"").padLeft(3,"0").s+"$1")),n)}var p={ERR_LOGINFAILED:"200-登录失败",ERR_NOTNEEDVERIFY:"301-该料站不需要验料",ERR_NOTRACKINFO:"302-请扫描料站条码",ERR_NODIVISIONINFO:"303-请选择料槽号",ERR_NOCMPINFO:"304-请扫描物料",ERR_STATIONNOTINLINE:"305-机台不属于产线",ERR_SCANCOMPONENT:"306-请扫描物料",ERR_TEARDOWNFAILED:"307-卸下出错"}},"5faa":function(e,t,n){"use strict";var r=n("b591"),a=n("f2e6").f,u=n("ad3e"),i=n("ef79"),c=n("31c4"),s=n("7518"),o=n("6e2a"),l="".startsWith,p=Math.min,f=s("startsWith"),d=!o&&!f&&!!function(){var e=a(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!d&&!f},{startsWith:function(e){var t=String(c(this));i(e);var n=u(p(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return l?l.call(t,r,n):t.slice(n,n+r.length)===r}})},8234:function(e,t,n){},"8a52":function(e,t,n){},9073:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"p",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return f})),n.d(t,"o",(function(){return m})),n.d(t,"n",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return R})),n.d(t,"s",(function(){return P})),n.d(t,"i",(function(){return I})),n.d(t,"k",(function(){return S})),n.d(t,"j",(function(){return L})),n.d(t,"h",(function(){return N})),n.d(t,"d",(function(){return C})),n.d(t,"t",(function(){return $})),n.d(t,"f",(function(){return Q})),n.d(t,"q",(function(){return D})),n.d(t,"c",(function(){return G})),n.d(t,"r",(function(){return q}));n("6a61");var r=n("2e91"),a=n("b775"),u=n("3753");function i(e,t){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/GetInventorys",t),{method:"POST",body:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(e,t){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartPartition",t),{method:"POST",body:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartMerger",null),{method:"POST",body:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,t){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartIn",t),{method:"POST",body:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e,t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartOut",t),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e,t){return v.apply(this,arguments)}function v(){return v=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartMove",t),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e,t){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("/ML/CheckInventoryApi/GetAll",t),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function O(e){return w.apply(this,arguments)}function w(){return w=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/CheckInventoryTempContentApi/GetAll",null),{method:"POST",body:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function R(e,t){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/CheckInventoryTempContentApi/Submit",{strId:t}),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function P(e,t,n){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/CheckInventoryApi/SubmitCheckInventoryData",{checkInventoryId:t,reelId:n,remainQty:r}),{method:"POST",body:{}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function I(e,t){return k.apply(this,arguments)}function k(){return k=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/ChangeInventoryQty",{reelId:t,RemainQty:n}),{method:"POST",body:{}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function S(e){return T.apply(this,arguments)}function T(){return T=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartApi/GridPageListJson",null),{method:"POST",body:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function L(e){return M.apply(this,arguments)}function M(){return M=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/GetInventorys",null),{method:"POST",body:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function N(e,t,n){return A.apply(this,arguments)}function A(){return A=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/ICPartBindLot",{reelId:t,lot:n,isRewrite:r}),{method:"POST",body:{}});case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function C(e,t){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/GetInventoryWithAutoRegistory",t),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function $(e,t){return E.apply(this,arguments)}function E(){return E=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/PartAutoRecommenStorage",t),{method:"POST",body:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function Q(e,t){return B.apply(this,arguments)}function B(){return B=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("/ML/LifecycleApi/GetAll",t),{method:"POST",body:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function D(e,t){return F.apply(this,arguments)}function F(){return F=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("/ML/PartInventoryApi/PrintInventoryLabel",{inventoryId:t,printerIp:n}),{method:"POST",body:{}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function G(e){return W.apply(this,arguments)}function W(){return W=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("/ML/PartInventoryApi/CheckPrintConnection",{printerIp:t}),{method:"POST",body:{}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function q(e,t){return z.apply(this,arguments)}function z(){return z=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["a"])(Object(u["a"])("ML/PartInventoryApi/SearchInventorieCompleteds",t),{method:"POST",body:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}},a8aa:function(e,t,n){"use strict";var r=n("b591"),a=n("7b23").map,u=n("af5e"),i=n("4b7d"),c=u("map"),s=i("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},b1ea:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-cell",{staticClass:"cellAll",scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"custom-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"custom-detail"},[e._v(e._s(e.value))])]},proxy:!0}])})},a=[],u={props:{title:{type:String,require:!1,default:"标题"},value:{require:!1,default:""}},data:function(){return{messages:"",count:0}},methods:{}},i=u,c=(n("4176"),n("5d22")),s=Object(c["a"])(i,r,a,!1,null,null,null);t["a"]=s.exports},b4a7:function(e,t,n){"use strict";n("c276")},bda9:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-cell",{staticClass:"cellAll",scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"custom-title"},[e._v(e._s(e.title))]),n("van-field",{staticClass:"filed",attrs:{clearable:"",type:e.type},on:{input:e.onInput,focus:e.fieldFocus,blur:e.fieldBlur},scopedSlots:e._u([{key:"right-icon",fn:function(){return[n("van-icon",{attrs:{name:"edit",size:"20",color:"#4284f4"}})]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]},proxy:!0}])})},a=[],u={props:{title:{type:String,require:!1,default:"标题"},value:{require:!1,default:""},type:{type:String,require:!1,default:"text"}},methods:{onInput:function(e){this.value=e,this.$emit("update:value",e)},GetVal:function(){return this.value},fieldBlur:function(){window.scroll(0,this.FoucusS),window.onresize=function(){}},fieldFocus:function(){this.FoucusS=document.documentElement.scrollTop-40,window.onresize=function(){return function(){var e=document.body.clientHeight;window.scroll(0,e)}()}}}},i=u,c=(n("b4a7"),n("5d22")),s=Object(c["a"])(i,r,a,!1,null,null,null);t["a"]=s.exports},c276:function(e,t,n){},f102:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{attrs:{title:e.$t("尾数修改"),msgs:"false"}},[n("van-tabs",{staticClass:"TabHeight",attrs:{color:"#4284f4"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[n("van-tab",{attrs:{title:e.$t("操作")}},[n("MessageBox",{ref:"messageBox",staticClass:"lonelyMeg"}),n("ScanInput",{ref:"inputReelId",attrs:{label:e.$t("物料条码")},on:{submit:e.m_scanner_OnScannerReaded}}),n("Cell",{attrs:{title:e.$t("物料编号"),value:e.PartNumber}}),n("Cell",{attrs:{title:e.$t("标包数量"),value:e.PackageQuantity}}),n("Cell",{attrs:{title:e.$t("修改前数量"),value:e.RemainQty}}),n("InputEditCell",{attrs:{title:e.$t("修改后数量"),type:"digit",value:e.remainNum},on:{"update:value":function(t){e.remainNum=t}}}),n("van-button",{staticClass:"BtnButton",attrs:{type:"info"},on:{click:e.PartOut}},[e._v(e._s(e.$t("确定")))])],1),n("van-tab",{attrs:{title:e.$t("记录")}},[n("el-table",{attrs:{data:e.Lifecycle,"highlight-current-row":"",size:"mini"}},[n("el-table-column",{attrs:{prop:"ReelId",label:e.$t("物料条码"),"min-width":"50%"}}),n("el-table-column",{attrs:{prop:"Remark",label:e.$t("修改前数量"),"min-width":"25%"}}),n("el-table-column",{attrs:{prop:"Quantity",label:e.$t("修改后数量"),"min-width":"25%"}})],1)],1)],1)],1)},a=[],u=(n("cc16"),n("ec76"),n("6a61"),n("2e91")),i=n("9973"),c=n("6168"),s=n("b1ea"),o=n("bda9"),l=n("521f"),p=n("5c5a"),f=n("9073"),d={components:{Page:i["a"],ScanInput:c["a"],MessageBox:l["a"],Cell:s["a"],InputEditCell:o["a"]},data:function(){return{barcode:"",remainNum:"",active:"",div1:0,div2:2,activeTab:0,PartNumber:"",PackageQuantity:"",RemainQty:"",BathcNo:"",Lifecycle:[]}},methods:{showMessage:function(e){this.$refs.messageBox.showMessage(e)},m_scanner_OnScannerReaded:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:if(-1==e.indexOf("*")){n.next=7;break}if(e=Object(p["f"])(e),e){n.next=7;break}return t.showMessage(t.$t("条码格式不正确")),n.abrupt("return");case 7:return t.barcode=e.trim(),t.showMessage(t.$t("ReelID:"+t.barcode)),n.next=11,f["e"]({},{ReelId:t.barcode});case 11:if(r=n.sent,0!=r.length){n.next=20;break}return n.next=15,f["r"]({},{ReelId:t.barcode});case 15:if(a=n.sent,null!=a&&null!=a.rows&&0!=a.rows.length){n.next=19;break}return t.showMessage(t.barcode+t.$t("不存在")),n.abrupt("return");case 19:r=a.rows;case 20:console.log(r[0]),t.PartNumber=r[0].PartNumber,t.PackageQuantity=r[0].PackageQuantity,t.RemainQty=r[0].RemainQty;case 24:case"end":return n.stop()}}),n)})))()},PartOut:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.barcode){t.next=3;break}return e.showMessage(e.$t("请扫描料盘条码ReelID!")),t.abrupt("return");case 3:if(console.log(e.remainNum),!e.barcode||!e.remainNum){t.next=18;break}return t.prev=5,t.next=8,f["i"](e.barcode,e.remainNum);case 8:n=t.sent,n&&(r="Check Qty:"+e.remainNum,r+="\r\n "+e.$t("Result:Operation success!"),e.showMessage(r),e.Lifecycle.push({PartNumber:e.PartNumber,Remark:e.RemainQty,Quantity:e.remainNum,ReelId:e.barcode}),e.PartNumber="",e.PackageQuantity="",e.RemainQty="",e.remainNum="",e.$refs.inputReelId.clearInput()),e.barcode="",e.remainNum="",t.next=18;break;case 14:return t.prev=14,t.t0=t["catch"](5),e.showMessage(t.t0),t.abrupt("return");case 18:case"end":return t.stop()}}),t,null,[[5,14]])})))()}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["f"](null,{LifecycleType:8,CreatedTimeFrom:new Date(Date.now()-864e5),CreatedTimeTo:new Date(Date.now()+864e5)});case 2:n=t.sent,e.Lifecycle=n.Items;case 4:case"end":return t.stop()}}),t)})))()}},m=d,h=(n("0dfe"),n("5d22")),b=Object(h["a"])(m,r,a,!1,null,null,null);t["default"]=b.exports}}]);