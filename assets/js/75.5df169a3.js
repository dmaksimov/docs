(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{259:function(e,t,n){"use strict";n.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=n(6),r=Object(o.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[n("h1",{attrs:{id:"troubleshooting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),n("p",[e._v("If you run into anything or need pointers on how to continue, first check our "),n("router-link",{attrs:{to:"./troubleshooting.html"}},[e._v("troubleshooting guide")]),e._v(". If you still have issues you can post questions to "),n("a",{attrs:{href:"https://stackoverflow.com/questions/tagged/directus",target:"_blank",rel:"noopener noreferrer"}},[e._v("StackOverflow"),n("OutboundLink")],1),e._v(", or reach out to the community and core team "),n("a",{attrs:{href:"https://slack.getdirectus.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("on Slack"),n("OutboundLink")],1),e._v("!")],1),e._v(" "),n("h2",{attrs:{id:"buildchain-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#buildchain-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Buildchain issues")]),e._v(" "),n("p",[e._v("If for some reason the buildchain is acting up, or you're not seeing the changes you've made reflected in the browser, please try the following things:")]),e._v(" "),n("p",[n("strong",[e._v("Restart the buildchain")]),e._v("\nIf you're running the application in development mode (by running "),n("code",[e._v("npm run dev")]),e._v("), stop the buildchain by pressing Ctrl+C and re-start it by running "),n("code",[e._v("npm run dev")]),e._v(" again.")]),e._v(" "),n("p",[n("strong",[e._v("Delete the caches")]),e._v("\nThe buildchain caches the changes in the "),n("code",[e._v("node_modules/.cache")]),e._v(" folder. Stop the buildchain by pressing Ctrl+C, delete that folder and restart the buildchain.")]),e._v(" "),n("p",[n("strong",[e._v("Delete and re-install node_modules")]),e._v("\nThis will both delete the cache and makes sure you're using the latest versions of the dependencies that Directus uses.")]),e._v(" "),n("p",[n("strong",[e._v("Re-clone the project")]),e._v("\nIf all else fails, a full reinstall of everything has to work. If it doesn't work after a reinstall, something else in the code is broken.")]),e._v(" "),n("h2",{attrs:{id:"posting-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#posting-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Posting issues")]),e._v(" "),n("p",[e._v("When you're suspecting that you've run into a bug in the platform itself, please let us know on GitHub! The more info we get the better.")])])},[],!1,null,null,null);r.options.__file="troubleshooting.md";t.default=r.exports}}]);