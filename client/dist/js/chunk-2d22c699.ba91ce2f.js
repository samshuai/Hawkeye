(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c699"],{f2b9:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"setting-card"},[r("el-dialog",{attrs:{title:"添加监控项",visible:e.dialogFormVisible,width:e.mobileClient?"80%":"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[r("el-form",{attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-popover",{attrs:{placement:"right",title:"提示",width:"200",trigger:"hover"}},[e._v("若存在相同名称，会覆盖已有值 "),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]),r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.tag,callback:function(t){e.$set(e.form,"tag",t)},expression:"form.tag"}})],1),r("el-form-item",{attrs:{label:"关键字"}},[r("el-popover",{attrs:{placement:"right",title:"提示",width:"200",trigger:"hover"}},[e._v("熟悉 "),r("a",{attrs:{referrerpolicy:"no-referrer",href:"https://github.com/search/advanced",target:"_blank"}},[e._v("GitHub 搜索语法")]),e._v("可以提高监控效率: OR/AND/NOT "),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]),r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),r("el-form-item",{attrs:{label:"开启/关闭"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.enabled,callback:function(t){e.$set(e.form,"enabled",t)},expression:"form.enabled"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{round:"",size:"mini",type:"primary"},on:{click:function(t){return e.handleAddQuery(e.form)}}},[e._v("确 定")])],1)],1),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v(" 添加 ")]),r("el-table",{attrs:{data:e.rules,stripe:!0}},[r("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("router-link",{attrs:{to:"/?tag="+t.row.tag}},[e._v(" "+e._s(t.row.tag)+" ")])]}}])}),r("el-table-column",{attrs:{label:"关键字","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{attrs:{rel:"noopener noreferrer",href:"https://github.com/search?o=desc&q="+t.row.keyword+"&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93",target:"_blank"}},[e._v(e._s(t.row.keyword))])]}}])}),r("el-table-column",{attrs:{label:"最后抓取时间",prop:"last",width:"150",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.last?r("span",[e._v(e._s(e._f("timeAgo")(1e3*t.row.last)))]):e._e()]}}])}),r("el-table-column",{attrs:{label:"总数",width:"200",prop:"api_total",sortable:""}}),r("el-table-column",{attrs:{label:"已抓取",width:"200",prop:"found_total",sortable:""}}),r("el-table-column",{attrs:{label:"状态",width:"100",prop:"enabled",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(r){return e.updateEnabled(t.row)}},model:{value:t.row.enabled,callback:function(r){e.$set(t.row,"enabled",r)},expression:"scope.row.enabled"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button-group",[r("el-button",{attrs:{size:"mini",plain:"",round:""},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑 ")]),r("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(r){return e.handleDeleteQuery(t.$index,t.row)}}},[e._v("删除 ")]),0===t.row.status?r("el-button",{attrs:{size:"mini",plain:"",round:"",type:"primary",icon:"el-icon-loading"},on:{click:function(r){return e.handleSpiderResult(t.row)}}}):e._e(),1===t.row.status?r("el-button",{attrs:{size:"mini",type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(r){return e.handleSpiderResult(t.row)}}}):e._e(),-1===t.row.status?r("el-button",{attrs:{size:"mini",type:"warning",plain:"",round:"",icon:"el-icon-warning"},on:{click:function(r){return e.handleSpiderResult(t.row)}}}):e._e()],1)]}}])})],1)],1)},n=[],a=(r("6b54"),["second","minute","hour","day","week","month","year"]),i=function(e,t){if(0===t)return["just now","right now"];var r=a[Math.floor(t/2)];return e>1&&(r+="s"),[e+" "+r+" ago","in "+e+" "+r]},l=["秒","分钟","小时","天","周","个月","年"],s=function(e,t){if(0===t)return["刚刚","片刻后"];var r=l[~~(t/2)];return[e+" "+r+"前",e+" "+r+"后"]},c={},u=function(e,t){c[e]=t},d=function(e){return c[e]||c["en_US"]},f=[60,60,24,7,365/7/12,12];function m(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function p(e,t){var r=e<0?1:0;e=Math.abs(e);for(var o=e,n=0;e>=f[n]&&n<f.length;n++)e/=f[n];return e=Math.floor(e),n*=2,e>(0===n?9:1)&&(n+=1),t(e,n,o)[r].replace("%s",e.toString())}function b(e,t){var r=t?m(t):new Date;return(+r-+m(e))/1e3}var h=function(e,t,r){var o=b(e,r&&r.relativeDate);return p(o,d(t))};u("en_US",i),u("zh_CN",s);var g={data:function(){return{rules:[],dialogFormVisible:!1,form:{tag:"",keyword:"",enabled:!0}}},computed:{mobileClient:function(){return document.documentElement.clientWidth<document.documentElement.clientHeight}},methods:{handleEdit:function(e,t){this.form=t,this.dialogFormVisible=!0},fetchQuery:function(){var e=this;this.axios.get(this.api.settingQuery).then((function(t){e.rules=t.data.result})).catch((function(t){e.$message.error(t.toString())}))},handleSpiderResult:function(e){var t=h(1e3*e.last,"zh_CN");e.status>-1?this.$message.success(t+e.reason):this.$message.warning(t+e.reason)},handleDeleteQuery:function(e,t){var r=this;this.axios.delete("".concat(this.api.settingQuery,"?_id=").concat(t._id,"&tag=").concat(t.tag)).then((function(e){r.$message.success(e.data.msg),r.dialogFormVisible=!1,r.rules=e.data.result})).catch((function(e){r.$message.error(e.toString()),r.dialogFormVisible=!1}))},updateEnabled:function(e){var t=this,r={tag:e.tag,keyword:e.keyword,enabled:e.enabled};this.axios.post(this.api.settingQuery,r).then((function(e){t.$message.success(e.data.msg),t.dialogFormVisible=!1,t.rules=e.data.result})).catch((function(e){t.$message.error(e.toString()),t.dialogFormVisible=!1}))},handleAddQuery:function(e){var t=this;this.axios.post(this.api.settingQuery,e).then((function(e){t.$message.success(e.data.msg),t.dialogFormVisible=!1,t.rules=e.data.result,t.form={tag:"",keyword:"",enabled:!0}})).catch((function(e){t.$message.error(e.toString()),t.dialogFormVisible=!1}))}},mounted:function(){this.fetchQuery()}},w=g,v=r("2877"),y=Object(v["a"])(w,o,n,!1,null,null,null);t["default"]=y.exports}}]);