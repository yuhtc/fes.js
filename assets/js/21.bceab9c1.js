(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{334:function(t,e,l){},394:function(t,e,l){"use strict";var r=l(334);l.n(r).a},440:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{percent:20,percent2:80}},ready:function(){},methods:{add:function(){if(this.percent>=100)return!1;this.percent+=5},minus:function(){if(this.percent<=0)return!1;this.percent-=5}},computed:{color:function(){var t="#43a3fb";return 100==this.percent&&(t="#00cc66"),t}}},s=(l(394),l(46)),i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"processcircle-进度环"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#processcircle-进度环"}},[t._v("#")]),t._v(" processCircle 进度环")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("用于展示操作进度，告知用户当前状态")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/process-circle/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Row",[l("Cell",{attrs:{span:"12"}},[l("Process-circle",{attrs:{percent:100,"stroke-color":"#00cc66","stroke-type":"round"}},[l("Icon",{attrs:{type:"md-checkmark",size:"50",color:"#00cc66"}})],1)],1),t._v(" "),l("Cell",{attrs:{span:"12"}},[l("Process-circle",{attrs:{percent:80,"stroke-type":"round","stroke-width":4,"trail-width":3}},[l("Icon",{attrs:{type:"md-cloud-download",size:"50",color:"#3399ff"}})],1)],1)],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("Process-circle的属性有：percent百分比，size宽高，stroke-type,stroke-width,stroke-color,trail-width,trail-color")]),t._v(" "),l("p",[t._v("具体属性配置请查看下方的API表")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"自定义样式",template:"ui/templates/process-circle/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Process-circle",{attrs:{size:250,"trail-width":4,"stroke-width":5,percent:t.percent2,"stroke-type":"round","stroke-color":"#3399ff"}},[l("div",{staticClass:"center-style"},[l("p",[t._v("统计结果")]),t._v(" "),l("span",[t._v("占比"+t._s(t.percent2)+"%")])])])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("圆环中间设置居中的自定义样式可以按需求显示，实现图表统计功能")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"配合其他组件使用",template:"ui/templates/process-circle/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Process-circle",{attrs:{percent:t.percent,size:100,"stroke-width":4,"trail-width":3,"stroke-color":t.color}},[l("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.percent)+"%")])]),t._v(" "),l("Wb-button",{on:{click:t.add}},[t._v("+")]),t._v(" "),l("Wb-button",{on:{click:t.minus}},[t._v("-")])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过数据驱动实现视觉效果")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("percent")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("百分比（1~100）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环宽高长度 (px)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("120")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("stroke-type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环线框前景色头部形状，可选有两种：square,round")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("round")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("stroke-width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环线框前景色宽度 (px)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("stroke-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环线框前景色颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#3399ff")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("trail-width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环线框背景色宽度 (px)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("trail-color")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("圆环线框背景色颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#eaeef2")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);