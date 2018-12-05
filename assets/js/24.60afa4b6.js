(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{255:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"installing-the-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing the API")]),t._v(" "),a("p",[t._v("Installation will vary depending on your specific server and project goals. This guide with walk you through several of the most common installation methods.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("Directus is quite flexible and can be installed on many different varieties of server/database setups. Learn more about the "),a("router-link",{attrs:{to:"./requirements.html"}},[t._v("Directus Requirements")]),t._v(".")],1),t._v(" "),a("ul",[a("li",[t._v("HTTP/Web Server")]),t._v(" "),a("li",[t._v("MySQL 5.2+\n"),a("ul",[a("li",[t._v("Database (empty or existing)")]),t._v(" "),a("li",[t._v("Database User (with access to database)")])])]),t._v(" "),a("li",[t._v("PHP 7.1+\n"),a("ul",[a("li",[a("code",[t._v("pdo")]),t._v(" + "),a("code",[t._v("mysql")])]),t._v(" "),a("li",[a("code",[t._v("curl")])]),t._v(" "),a("li",[a("code",[t._v("gd")])]),t._v(" "),a("li",[a("code",[t._v("fileinfo")])]),t._v(" "),a("li",[a("code",[t._v("mbstring")])]),t._v(" "),a("li",[a("code",[t._v("xml")]),t._v(" (Only if you are installing PHPUnit)")])])])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The Directus API can be installed in three ways:")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For instructions on how to setup a local development copy, checkout our "),a("router-link",{attrs:{to:"./../contributor/install-dev.html"}},[t._v("dev install guide")])],1)]),t._v(" "),a("h3",{attrs:{id:"using-git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-git","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Git")]),t._v(" "),a("p",[t._v("The easiest way of installing and updating the API is through Git. By using the build branch on our repo, you're assured to have the latest version pre-bundled and ready to go.")]),t._v(" "),a("p",[t._v("To install the pre-bundled build version through Git, run")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b build https://github.com/directus/api.git\n")])])]),a("h3",{attrs:{id:"manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually","aria-hidden":"true"}},[t._v("#")]),t._v(" Manually")]),t._v(" "),a("p",[t._v("If you don't have access to the command line for your server, you can download the static bundle manually as a zip. Head over to "),a("a",{attrs:{href:"https://github.com/directus/api/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("the releases page"),a("OutboundLink")],1),t._v(" to download a fresh copy of the latest version.")]),t._v(" "),a("h2",{attrs:{id:"post-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Post-Installation")]),t._v(" "),a("h3",{attrs:{id:"web-server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-server-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Web Server Setup")]),t._v(" "),a("p",[t._v("Directus API should work on any HTTP Server, but most testing has been done on Apache 2, NGINX, and Caddy.")]),t._v(" "),a("ol",[a("li",[t._v("The root directory for Directus API should be set the "),a("code",[t._v("/public")]),t._v(" directory.")]),t._v(" "),a("li",[t._v("Make sure the directory ownership is set to user the web server is running under. Usually the user is "),a("code",[t._v("www-data")]),t._v(" "),a("ul",[a("li",[t._v("eg: "),a("code",[t._v("sudo chown -R www-data:www-data /var/www/api")])])])]),t._v(" "),a("li",[t._v("The following files/folders should have write permission:\n"),a("ul",[a("li",[a("code",[t._v("/logs")])]),t._v(" "),a("li",[a("code",[t._v("/public/uploads")]),t._v(" (or your configured upload directory)")])])])]),t._v(" "),a("h4",{attrs:{id:"specific-server-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-server-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Specific Server Setup")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./setup-apache.html"}},[t._v("Apache 2 Setup")])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:"./setup-nginx.html"}},[t._v("NGINX Setup")])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:"./setup-caddy.html"}},[t._v("Caddy Setup")])],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For local development environments you can use WAMP, XAMP or MAMP")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("We appreciate any pull-requests outlining steps for new server-types. Just submit them to "),a("a",{attrs:{href:"https://github.com/directus/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("these Docs on GitHub"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("Lastly, we need to generate a project config file and add the system boilerplate data to the database.")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./configure-with-app.html"}},[t._v("Configure with App")])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:"./configure-with-script.html"}},[t._v("Configure with Script")])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:"./configure-manually.html"}},[t._v("Configure Manually")])],1),t._v(" "),a("h3",{attrs:{id:"installation-complete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-complete","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation Complete")]),t._v(" "),a("p",[t._v("If you followed the steps above you have successfully installed the Directus API and can now access secure endpoints with your Admin credentials. To learn more about the many Directus API endpoints you can browse our "),a("router-link",{attrs:{to:"/api/reference.html"}},[t._v("API Reference")]),t._v(".")],1)])},[],!1,null,null,null);i.options.__file="install.md";e.default=i.exports}}]);