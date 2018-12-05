(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{281:function(t,e,s){"use strict";s.r(e);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},l=s(6),a=Object(l.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"soft-delete-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#soft-delete-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" Soft-Delete Flow")]),t._v(" "),s("p",[t._v("To "),s("code",[t._v("soft delete")]),t._v(" an item, the API does the following:")]),t._v(" "),s("ol",[s("li",[t._v("Check if the collection has a status field")]),t._v(" "),s("li",[t._v("Check if the delta data has the status field ("),s("em",[t._v("Meaning the status was changed")]),t._v(")")]),t._v(" "),s("li",[t._v("Look for all status values with "),s("code",[t._v("soft_delete = true")])]),t._v(" "),s("li",[t._v("Checks if the new status value ("),s("em",[t._v("from delta data")]),t._v(") is one of status values from Step 3")]),t._v(" "),s("li",[t._v("Sets "),s("code",[t._v("action")]),t._v(" to "),s("code",[t._v("SOFT_DELETE")])])])])},[],!1,null,null,null);a.options.__file="soft-delete.md";e.default=a.exports}}]);