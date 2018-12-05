(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{238:function(e,t,a){"use strict";a.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=a(6),r=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary","aria-hidden":"true"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("p",[e._v("Definitions and other various terms that are exclusive to the Directus Ecosystem.")]),e._v(" "),a("h3",{attrs:{id:"directus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directus","aria-hidden":"true"}},[e._v("#")]),e._v(" Directus")]),e._v(" "),a("p",[e._v("The Directus "),a("a",{attrs:{href:"./img/directus.mp3"}},[e._v("duh REKT iss")]),e._v(" name is latin, meaning "),a("em",[e._v("laid straight, arranged in lines, having been arranged in lines")]),e._v(". It represents how data is displayed in an orderly fashion thereby making it more intuitive to manage.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[e._v("#")]),e._v(" Alias")]),e._v(" "),a("p",[e._v("A field that does not actually map to a database column (eg: a divider or the one side of a relationship).")]),e._v(" "),a("h3",{attrs:{id:"boilerplate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boilerplate","aria-hidden":"true"}},[e._v("#")]),e._v(" Boilerplate")]),e._v(" "),a("p",[e._v("The base schema and system content included in a fresh/blank copy of Directus.")]),e._v(" "),a("h3",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[e._v("#")]),e._v(" Client")]),e._v(" "),a("p",[e._v("An external application using Database managed data.")]),e._v(" "),a("h3",{attrs:{id:"collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection","aria-hidden":"true"}},[e._v("#")]),e._v(" Collection")]),e._v(" "),a("p",[e._v("A set of items, saved as a SQL table")]),e._v(" "),a("h3",{attrs:{id:"collection-preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection-preset","aria-hidden":"true"}},[e._v("#")]),e._v(" Collection Preset")]),e._v(" "),a("p",[e._v('Also known as a "bookmark", this is a specific view of a collection assigned to an individual user, a role, or global. It includes:')]),e._v(" "),a("ul",[a("li",[e._v("Search query")]),e._v(" "),a("li",[e._v("Filters")]),e._v(" "),a("li",[e._v("View Type")]),e._v(" "),a("li",[e._v("Sort Field and Direction")]),e._v(" "),a("li",[e._v("Layout Query (eg: visible fields)")]),e._v(" "),a("li",[e._v("Layout Options (eg: tabular column widths)")])]),e._v(" "),a("h3",{attrs:{id:"datatype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datatype","aria-hidden":"true"}},[e._v("#")]),e._v(" Datatype")]),e._v(" "),a("p",[e._v("The SQL vendor-specific database storage type (eg: "),a("code",[e._v("VARCHAR")]),e._v(", "),a("code",[e._v("BIGINT")]),e._v(", etc)")]),e._v(" "),a("h3",{attrs:{id:"display-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Display Template")]),e._v(" "),a("p",[e._v("A Mustache-style string used to format field values. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{{first_name}} {{last_name}}, {{title}}\n")])])]),a("h3",{attrs:{id:"environment-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-env","aria-hidden":"true"}},[e._v("#")]),e._v(" Environment (env)")]),e._v(" "),a("p",[e._v("A flag set in the project config: either "),a("code",[e._v("production")]),e._v(" or "),a("code",[e._v("staging")]),e._v(" (not to be confused with deployment environments).")]),e._v(" "),a("h3",{attrs:{id:"extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Extension")]),e._v(" "),a("p",[e._v("Anything that extends the core codebase, including: Interfaces, Pages, Storage Adapters, SSO Services, etc.")]),e._v(" "),a("h3",{attrs:{id:"field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#field","aria-hidden":"true"}},[e._v("#")]),e._v(" Field")]),e._v(" "),a("p",[e._v("A single piece of information contained in an item. Saved as a SQL column or alias.")]),e._v(" "),a("h3",{attrs:{id:"field-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#field-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Field Type")]),e._v(" "),a("p",[e._v("An extended and agnostic storage type mapped to SQL vendor datatypes (eg: "),a("code",[e._v("string")]),e._v(", "),a("code",[e._v("number")]),e._v(", etc). Also includes non-DB style types that provide extra functionality into the system (eg "),a("code",[e._v("m2o")]),e._v(", "),a("code",[e._v("translation")]),e._v(", etc).")]),e._v(" "),a("h3",{attrs:{id:"instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance","aria-hidden":"true"}},[e._v("#")]),e._v(" Instance")]),e._v(" "),a("p",[e._v("An API install managing one or more projects on a server.")]),e._v(" "),a("h3",{attrs:{id:"interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Interface")]),e._v(" "),a("p",[e._v("The GUI for a field (the actual thing that the user interacts with to create and edit the data for the field).")]),e._v(" "),a("h3",{attrs:{id:"item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item","aria-hidden":"true"}},[e._v("#")]),e._v(" Item")]),e._v(" "),a("p",[e._v("A single record of data. Contains values for the fields. Saved as a SQL row.")]),e._v(" "),a("h3",{attrs:{id:"length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(" Length")]),e._v(" "),a("p",[e._v("The amount/size of data that can be stored in a single field.")]),e._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout","aria-hidden":"true"}},[e._v("#")]),e._v(" Layout")]),e._v(" "),a("p",[e._v("The GUI for a collection's items. Displays the items in the user-set way.")]),e._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note","aria-hidden":"true"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("Descriptive text displayed with a field.")]),e._v(" "),a("h3",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project","aria-hidden":"true"}},[e._v("#")]),e._v(" Project")]),e._v(" "),a("p",[e._v("A database, config, and file storage directory. Also used for deployment environments (eg: "),a("code",[e._v("prod")]),e._v(", "),a("code",[e._v("stage")]),e._v(", "),a("code",[e._v("dev")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema","aria-hidden":"true"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),a("p",[e._v("The SQL database's architecture, not including any content.")])])},[],!1,null,null,null);r.options.__file="glossary.md";t.default=r.exports}}]);